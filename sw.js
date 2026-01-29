const CACHE_NAME = 'khanblox-v2';
const CORE_ASSETS = [
  '/',
  '/khanblox/',
  '/khanblox/index.html',
  '/khanblox/og-image.svg',
  '/khanblox/manifest.webmanifest'
];

// Install event - cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .catch(err => console.error('Cache installation failed:', err))
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - network first, fall back to cache
self.addEventListener('fetch', event => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Only cache successful responses
        if (response.status === 200 && (response.type === 'basic' || response.type === 'cors')) {
          // Clone the response before caching
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          }).catch(err => console.warn('Failed to cache:', event.request.url, err));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

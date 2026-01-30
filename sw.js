const CACHE_NAME = 'khanblox-v2';
const CORE_ASSETS = [
  './',
  './index.html',
  './khanblox.html',
  './og-image.svg',
  './manifest.webmanifest'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(err => {
        console.error('Cache install failed:', err);
        throw err; // Prevent service worker from activating if caching fails
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(resp => {
        if (resp) {
          return resp;
        }
        return fetch(event.request).catch(err => {
          console.error('Fetch failed for:', event.request.url, err);
          // Return a basic offline response for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          throw err;
        });
      })
  );
});

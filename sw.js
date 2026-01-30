const CACHE_NAME = 'khanblox-v2-cdn';
const CORE_ASSETS = [
  '/',
  '/khanblox/',
  '/khanblox/index.html',
  '/khanblox/og-image.svg',
  '/khanblox/manifest.webmanifest',
  '/khanblox/robots.txt',
  '/khanblox/sitemap.xml'
];

// Install event - cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[ServiceWorker] Caching core assets');
      return cache.addAll(CORE_ASSETS);
    }).catch(err => {
      console.error('[ServiceWorker] Cache installation failed:', err);
    })
  );
  self.skipWaiting();
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      console.log('[ServiceWorker] Activated');
      return clients.claim();
    })
  );
});

// Fetch event - serve from cache with network fallback (cache-first strategy)
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Return cached version and update cache in background
        event.waitUntil(
          fetch(event.request).then(response => {
            if (response && response.status === 200) {
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, response.clone());
              });
            }
          }).catch(() => {
            // Network request failed, but we have cache
          })
        );
        return cachedResponse;
      }
      
      // Not in cache, fetch from network
      return fetch(event.request).then(response => {
        // Cache successful responses
        if (response && response.status === 200 && event.request.method === 'GET') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch(error => {
        console.error('[ServiceWorker] Fetch failed:', error);
        throw error;
      });
    })
  );
});

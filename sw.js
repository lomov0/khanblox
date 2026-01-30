const CACHE_NAME = 'khanblox-v2';
const CORE_ASSETS = [
  '/khanblox/',
  '/khanblox/index.html',
  '/khanblox/khanblox.html',
  '/khanblox/og-image.svg',
  '/khanblox/manifest.webmanifest'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .catch(err => console.error('Cache install failed:', err))
  );
  self.skipWaiting();
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
      .then(resp => resp || fetch(event.request))
      .catch(err => {
        console.error('Fetch failed:', err);
        throw err;
      })
  );
});

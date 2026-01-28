const CACHE_NAME = 'khanblox-v1';
const CORE_ASSETS = [
  '/',
  '/khanblox/',
  '/khanblox/index.html',
  '/khanblox/og-image.svg',
  '/khanblox/manifest.webmanifest'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});

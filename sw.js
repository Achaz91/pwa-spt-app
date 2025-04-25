const CACHE_NAME = 'spt-cache-v1';
const urlsToCache = [
  'index.html',
  'style.css',
  'main.js',
  'manifest.json',
  'sio.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      console.log('Cache ouvert');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      // Retourne la réponse mise en cache si disponible, sinon effectue une requête en ligne
      return response || fetch(event.request);
    })
  );
});

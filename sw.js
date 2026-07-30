self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Základní pass-through fetch pro PWA podporu
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

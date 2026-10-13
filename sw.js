/* Misi Alat Sekolah Ajaib - offline-first core, network-first HTML updates. */
const VERSION = 'misi-alat-sekolah-ajaib-v2.0.0';
const ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png',
  './icons/icon-maskable-512.png', './icons/apple-touch-icon.png'
];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION)
    .then((cache) => cache.addAll(ASSETS))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(
    keys.filter((key) => key.startsWith('misi-alat-sekolah-ajaib-') && key !== VERSION)
      .map((key) => caches.delete(key))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  // Do not intercept YouTube: watching videos requires internet.
  if (url.origin !== self.location.origin) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).then((response) => {
      if (response.ok && response.type === 'basic') {
        const copy = response.clone();
        event.waitUntil(caches.open(VERSION).then((cache) => cache.put(event.request, copy)));
      }
      return response;
    }).catch(async () =>
      (await caches.match(event.request)) || (await caches.match('./index.html'))
    ));
    return;
  }
  event.respondWith(caches.match(event.request).then((cached) => cached ||
    fetch(event.request).then((response) => {
      if (response.ok && response.type === 'basic' && ASSETS.some((path) =>
          new URL(path, self.registration.scope).href === url.href)) {
        const copy = response.clone();
        event.waitUntil(caches.open(VERSION).then((cache) => cache.put(event.request, copy)));
      }
      return response;
    })
  ));
});

const CACHE_NAME = "neet2026-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/firebase-config.js",
  "/manifest.json",
  "/assets/icon-192.png",
  "/assets/icon-512.png"
];

// 🔁 Install and cache files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 🔁 Intercept requests
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// 🔁 Clear old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      );
    })
  );
});

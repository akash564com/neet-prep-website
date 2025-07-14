const CACHE_NAME = "neet-journey-cache-v1";
const urlsToCache = [
  "index.html",
  "posts.html",
  "admin.html",
  "style.css",
  "manifest.json",
  "firebase-config.js",
  "assets/your-qr-code.jpg",
  "assets/icon-192.png",
  "assets/icon-512.png"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});

const CACHE = "son-nobet-v73";
const ASSETS = [
  "./",
  "./index.html",
  "./ads.txt",
  "./style.css",
  "./script.js",
  "./senaryo_soru_bankasi.js",
  "./admin.js",
  "./music.mp3",
  "./music1.mp3",
  "./music2.mp3",
  "./music3.mp3",
  "./music4.mp3",
  "./music5.mp3",
  "./systems.js",
  "./ads.js",
  "./supabaseClient.js",
  "./features.js",
  "./manifest.webmanifest",
  "./logo.png",
  "./sec.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = event.request.url;
  // JS ve HTML her zaman ağdan (eski liderlik kodu kalmasın)
  if (url.includes(".js") || url.includes("index.html") || event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(event.request, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(event.request).then((c) => c || caches.match("./index.html")))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached || fetch(event.request).catch(() => caches.match("./index.html"))
    )
  );
});

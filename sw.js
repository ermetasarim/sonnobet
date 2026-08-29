const CACHE = "son-nobet-v76";
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
  "./systems.js",
  "./ads.js",
  "./supabaseClient.js",
  "./features.js",
  "./manifest.webmanifest",
  "./logo.png",
  "./sec.png"
];

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Supabase, Google Ads veya dış servis isteklerini SW önbelleğine sokma, direkt ağa gönder
  if (url.origin.includes('supabase.co') || 
      url.origin.includes('googlesyndication.com') || 
      url.origin.includes('pagead2')) {
    return; // respondWith ÇAĞIRMAYIN, tarayıcı varsayılan ağ isteği yapsın.
  }

  // Normal fetch mantığı buraya devam eder...
});

self.addEventListener('fetch', (event) => {
  // Safari'de chrome-extension, supabase auth veya 3. parti URL'leri bypass edin
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          // Geçersiz veya hatalı yanıtları kontrol edin
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          return networkResponse;
        })
        .catch((error) => {
          console.error('Fetch hatası yakalandı (Safari bypass):', error);
          // Safari'nin çökmesini önlemek için boş/kontrollü bir yanıt döndürün
          return new Response('Ağ hatası veya çevrimdışı durum.', {
            status: 408,
            headers: { 'Content-Type': 'text/plain' }
          });
        });
    })
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
self.addEventListener('install', (e) => {
    console.log('DocAgent Service Worker Active');
});

self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request));
});

// PWA 最低需求背景服務，目前設定為直接放行所有網路請求
self.addEventListener('install', (e) => {
  console.log('[Service Worker] 安裝成功');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] 啟動成功');
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // 保持連網抓取最新資料，不強制快取舊檔案，避免員工看不到最新課程
  e.respondWith(fetch(e.request));
});

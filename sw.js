const CACHE='sveta-mesta-v1';
const SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png','favicon.png','navodila-poster.jpg','navodila.mp4'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET')return;
  if(r.headers.get('range')){ // video: serve whole cached file when offline
    e.respondWith(fetch(r).catch(()=>caches.match('navodila.mp4')));return;}
  e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{
    if(res&&(res.ok||res.type==='opaque')&&(new URL(r.url).origin===location.origin||/fonts\.(googleapis|gstatic)\.com/.test(r.url))){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}
    return res;}).catch(()=>caches.match('index.html'))));
});

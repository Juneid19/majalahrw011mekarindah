var CACHE='rw-v2';
var PRECACHE=['/'];

self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(PRECACHE);}));
  self.skipWaiting();
});

self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
  }));
  self.clients.claim();
});

self.addEventListener('fetch',function(e){
  var url=new URL(e.request.url);
  if(e.request.method!=='GET')return;
  if(url.origin!==location.origin)return;

  var path=url.pathname;

  // notif.js SELALU fresh dari network
  if(path.indexOf('notif.js')!==-1){
    e.respondWith(fetch(e.request));
    return;
  }

  // Gambar: cache first (hemat bandwidth besar)
  if(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/i.test(path)){
    e.respondWith(caches.match(e.request).then(function(r){
      if(r)return r;
      return fetch(e.request).then(function(res){
        if(res.ok){var cl=res.clone();caches.open(CACHE).then(function(c){c.put(e.request,cl);});}
        return res;
      });
    }).catch(function(){return fetch(e.request);}));
    return;
  }

  // JS/CSS: cache first (otomatis bust via ?v=xxx di URL)
  if(/\.(js|css)$/i.test(path)){
    e.respondWith(caches.match(e.request).then(function(r){
      if(r)return r;
      return fetch(e.request).then(function(res){
        if(res.ok){var cl=res.clone();caches.open(CACHE).then(function(c){c.put(e.request,cl);});}
        return res;
      });
    }).catch(function(){return fetch(e.request);}));
    return;
  }

  // HTML: network first, fallback cache (untuk offline)
  e.respondWith(fetch(e.request).then(function(res){
    if(res.ok){var cl=res.clone();caches.open(CACHE).then(function(c){c.put(e.request,cl);});}
    return res;
  }).catch(function(){return caches.match(e.request);}));
});

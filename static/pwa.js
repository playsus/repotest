const CACHE="pwabuilder-offline-page";importScripts("https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/6.5.4/workbox-sw.min.js");const offlineFallbackPage="/offline";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),self.addEventListener("install",(async e=>{e.waitUntil(caches.open(CACHE).then((e=>e.add(offlineFallbackPage))))})),workbox.navigationPreload.isSupported()&&workbox.navigationPreload.enable(),workbox.routing.registerRoute(new RegExp("/*"),new workbox.strategies.StaleWhileRevalidate({cacheName:CACHE})),self.addEventListener("fetch",(e=>{"navigate"===e.request.mode&&e.respondWith((async()=>{try{const a=await e.preloadResponse;if(a)return a;return await fetch(e.request)}catch(e){const a=await caches.open(CACHE);return await a.match(offlineFallbackPage)}})())}));
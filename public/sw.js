if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>c(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/PNqtxnrCX6al5v5D8aZfv/_buildManifest.js",revision:"9a946577398c99eb7998cf9bf9a1765a"},{url:"/_next/static/PNqtxnrCX6al5v5D8aZfv/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/PNqtxnrCX6al5v5D8aZfv/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/100-090c40b0c1b2c8a6.js",revision:"090c40b0c1b2c8a6"},{url:"/_next/static/chunks/18-7c549f5a2e08c7c3.js",revision:"7c549f5a2e08c7c3"},{url:"/_next/static/chunks/229.e7e80998bcebb1df.js",revision:"e7e80998bcebb1df"},{url:"/_next/static/chunks/234-087669da5f8eb5a1.js",revision:"087669da5f8eb5a1"},{url:"/_next/static/chunks/2c796e83-52ed4e91ad8ec6b3.js",revision:"52ed4e91ad8ec6b3"},{url:"/_next/static/chunks/33-f11fe5ea4ca86f4e.js",revision:"f11fe5ea4ca86f4e"},{url:"/_next/static/chunks/343-cfdb66cf93cff706.js",revision:"cfdb66cf93cff706"},{url:"/_next/static/chunks/362-32a0bb723f48abbd.js",revision:"32a0bb723f48abbd"},{url:"/_next/static/chunks/368-01ac687b131bef2c.js",revision:"01ac687b131bef2c"},{url:"/_next/static/chunks/421-36f40dca5a34d215.js",revision:"36f40dca5a34d215"},{url:"/_next/static/chunks/582-9649bfa3d57da1f5.js",revision:"9649bfa3d57da1f5"},{url:"/_next/static/chunks/608-728a8ce8e5a1f39e.js",revision:"728a8ce8e5a1f39e"},{url:"/_next/static/chunks/612-c62cfd793f7218b4.js",revision:"c62cfd793f7218b4"},{url:"/_next/static/chunks/66-526cdf61ab79e32e.js",revision:"526cdf61ab79e32e"},{url:"/_next/static/chunks/679-174e6b6e773a8271.js",revision:"174e6b6e773a8271"},{url:"/_next/static/chunks/6c44d60f.1430d54e63f881c2.js",revision:"1430d54e63f881c2"},{url:"/_next/static/chunks/754.ebe22e27adb496e1.js",revision:"ebe22e27adb496e1"},{url:"/_next/static/chunks/77-c65e260406977184.js",revision:"c65e260406977184"},{url:"/_next/static/chunks/800-fdb7c3e423c8caad.js",revision:"fdb7c3e423c8caad"},{url:"/_next/static/chunks/872-f03233c7be9ae2c7.js",revision:"f03233c7be9ae2c7"},{url:"/_next/static/chunks/901-d101bda674a6e8ed.js",revision:"d101bda674a6e8ed"},{url:"/_next/static/chunks/935.b6161aa86ca14d96.js",revision:"b6161aa86ca14d96"},{url:"/_next/static/chunks/937-ad026820625b5c40.js",revision:"ad026820625b5c40"},{url:"/_next/static/chunks/framework-0f993ea2febf1269.js",revision:"0f993ea2febf1269"},{url:"/_next/static/chunks/main-a491dfd9c5e5feb6.js",revision:"a491dfd9c5e5feb6"},{url:"/_next/static/chunks/mapbox-gl-csp-worker-f6753b6fe22055c0.worker.js",revision:"f6753b6fe22055c0"},{url:"/_next/static/chunks/pages/404-2e7727f7e59de835.js",revision:"2e7727f7e59de835"},{url:"/_next/static/chunks/pages/500-82d40bbda00b2ee0.js",revision:"82d40bbda00b2ee0"},{url:"/_next/static/chunks/pages/_app-3ec8a6344b8e669e.js",revision:"3ec8a6344b8e669e"},{url:"/_next/static/chunks/pages/_error-a3f18418a2205cb8.js",revision:"a3f18418a2205cb8"},{url:"/_next/static/chunks/pages/about-us-cb2cfd44f0f1d9e1.js",revision:"cb2cfd44f0f1d9e1"},{url:"/_next/static/chunks/pages/authors-361cfd30a225f0c3.js",revision:"361cfd30a225f0c3"},{url:"/_next/static/chunks/pages/authors/%5Bslug%5D-2292073ea60ccc41.js",revision:"2292073ea60ccc41"},{url:"/_next/static/chunks/pages/contacts-bbfb3dfa3526fa4f.js",revision:"bbfb3dfa3526fa4f"},{url:"/_next/static/chunks/pages/index-becc9300860ce6bd.js",revision:"becc9300860ce6bd"},{url:"/_next/static/chunks/pages/photosessions-0a87f22ab69b4a4b.js",revision:"0a87f22ab69b4a4b"},{url:"/_next/static/chunks/pages/photosessions/%5BcategorySlug%5D-4fad6bdc85d7ac60.js",revision:"4fad6bdc85d7ac60"},{url:"/_next/static/chunks/pages/photosessions/%5BcategorySlug%5D/%5Bslug%5D-2f2564e42c90bf17.js",revision:"2f2564e42c90bf17"},{url:"/_next/static/chunks/pages/prices-6b0ea27f69e7f30c.js",revision:"6b0ea27f69e7f30c"},{url:"/_next/static/chunks/pages/tags-7b3c7b7400549087.js",revision:"7b3c7b7400549087"},{url:"/_next/static/chunks/pages/tags/%5Bslug%5D-b771afa33cb2a0cb.js",revision:"b771afa33cb2a0cb"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-6b8d64082a3d80d8.js",revision:"6b8d64082a3d80d8"},{url:"/_next/static/css/2cd066a7f53492b7.css",revision:"2cd066a7f53492b7"},{url:"/_next/static/css/bc81d552bfbb3745.css",revision:"bc81d552bfbb3745"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/assets/icons/icon-128x128.png",revision:"1238f4f2ba67801cfdc369e77169c3ea"},{url:"/assets/icons/icon-144x144.png",revision:"924f4afb2ccb480fddec37808d45f4b1"},{url:"/assets/icons/icon-152x152.png",revision:"79781c310497a9b00b25794b82892686"},{url:"/assets/icons/icon-192x192.png",revision:"ece07dc1da8e017ece91aa4c1e11bfd8"},{url:"/assets/icons/icon-384x384.png",revision:"459055277d4d8f1e26f60aa1da3b8359"},{url:"/assets/icons/icon-48x48.png",revision:"2593b5b737dc51be7cb00309c8cd5843"},{url:"/assets/icons/icon-512x512.png",revision:"d4fadbe86918b1f0b34273c16555f077"},{url:"/assets/icons/icon-72x72.png",revision:"8867883d156639edf45824e7a9823667"},{url:"/assets/icons/icon-96x96.png",revision:"3e4d1cee245702348d37aade529b1a36"},{url:"/assets/overlay.svg",revision:"8a76136366260a561586b3b792e9ed9b"},{url:"/favicon.ico",revision:"bb8799437fac0e159a72dc13691ab263"},{url:"/favicon/android-chrome-192x192.png",revision:"a492a457ead30c490fc7dfbad9100edc"},{url:"/favicon/android-chrome-512x512.png",revision:"9ec97b7fa91d3b7ae820f52ecbcfa363"},{url:"/favicon/apple-touch-icon.png",revision:"a3fbcf08982e5c2d2c065843a701836a"},{url:"/favicon/favicon-16x16.png",revision:"4c8c47829202fd419a4aabc0da0e7e5d"},{url:"/favicon/favicon-32x32.png",revision:"0760c176021302fe7a8948854b63643b"},{url:"/favicon/favicon.ico",revision:"bb8799437fac0e159a72dc13691ab263"},{url:"/favicon/favicon.png",revision:"5cab78266ed854c665c59176b0060ba8"},{url:"/fonts/CircularStd-Bold.otf",revision:"e7d8d6236925285b4445f933aebb68f3"},{url:"/fonts/CircularStd-Book.otf",revision:"4f84355b5c00ed31cdcf994158c0af39"},{url:"/fonts/CircularStd-Medium.otf",revision:"35be8fce7bdccf610b76528990f76136"},{url:"/fonts/Roboto-Bold.ttf",revision:"e07df86cef2e721115583d61d1fb68a6"},{url:"/fonts/Roboto-Regular.ttf",revision:"11eabca2251325cfc5589c9c6fb57b46"},{url:"/fonts/index.css",revision:"8711e169f3dc54f34d839f18d7acef21"},{url:"/icons/ic_analytics.svg",revision:"356b7f532a580f07b8b7e0f86fe5ceea"},{url:"/icons/ic_banking.svg",revision:"bd920e249e265e9546d8e42a726ce751"},{url:"/icons/ic_blog.svg",revision:"a34c0d3046096c4dc3a90e79ab57a6c3"},{url:"/icons/ic_booking.svg",revision:"19db467e176f85ee8aaace5b967cafef"},{url:"/icons/ic_calendar.svg",revision:"e821271a8dc5273615571b7d283e9242"},{url:"/icons/ic_cart.svg",revision:"aa9740e3d3a44f6c9cb3f98f2c0f781e"},{url:"/icons/ic_chat.svg",revision:"704e574bfeb926d5cdc389c5d2c38813"},{url:"/icons/ic_dashboard.svg",revision:"bd60ee7c05e71db0a13684ec8180729c"},{url:"/icons/ic_ecommerce.svg",revision:"5989fd7d993b35515795eed22e988e27"},{url:"/icons/ic_invoice.svg",revision:"f04ec73cf77c0fb8f98442ab97010d86"},{url:"/icons/ic_kanban.svg",revision:"097e1d99449b6395f4e947aeb95075df"},{url:"/icons/ic_mail.svg",revision:"0422394bed25c0bbd0f2f9e7ba17e01e"},{url:"/icons/ic_user.svg",revision:"46ef665540a7ecf243bd91a44e35b570"},{url:"/logo/logo_full.jpg",revision:"ea3206d2edb3605cefbd555ccaf919b2"},{url:"/logo/logo_full.svg",revision:"b3225e6e195eb86367125f7a8cd94ba1"},{url:"/logo/logo_single.svg",revision:"117be1751c5e71cf16f6ea4792afc55b"},{url:"/manifest._old_json",revision:"7337a261810f7d09f3d9342b9efd89c9"},{url:"/manifest.json",revision:"84aeac42c7b81a098f0227380393c675"},{url:"/robots.txt",revision:"2a0241b819c1cc769a8eab858fa29b41"},{url:"/sitemap-0.xml",revision:"f0fde30916664a760f217bf8bd8d5208"},{url:"/sitemap.xml",revision:"50fbb8fc48403c914c88f0667fb2ed4d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise(async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()})),s.then(()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]})},s=(s,t)=>{Promise.all(s.map(e)).then(e=>t(1===e.length?e[0]:e))},t={require:Promise.resolve(s)};self.define=(s,n,a)=>{t[s]||(t[s]=Promise.resolve().then(()=>{let t={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return t;case"module":return r;default:return e(s)}})).then(e=>{const s=a(...e);return t.default||(t.default=s),t})}))}}define("./sw.js",["./workbox-0bd5f3fa"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/cWgpGtlkEnVBolYM8iFlK/_buildManifest.js",revision:"a503f86b074be36cff60f61f014e52c5"},{url:"/_next/static/cWgpGtlkEnVBolYM8iFlK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/framework-3b3928090eb95153.js",revision:"8c0b2fe1e9b639a909e259a001382a24"},{url:"/_next/static/chunks/main-app-3a63d54f15239109.js",revision:"68ee84616f928f0b89561db07ba35f4a"},{url:"/_next/static/chunks/main-e289d4dee9f43dfc.js",revision:"3a65d699ffa9d42e0aa7bbeb46bf7c8f"},{url:"/_next/static/chunks/pages/_app-d441bac100660676.js",revision:"f8ef662fc862b46106991e3f9a10d192"},{url:"/_next/static/chunks/pages/_error-158b4b6e83cda9be.js",revision:"b0a1e6e212e7eb6609043ffb2a212fdb"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-961486a0378d0a12.js",revision:"595451e3172ad483ca432a0f4cc14148"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));

if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>i(s,r),o={module:{uri:r},exports:t,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(n(...s),t)))}}define(["./workbox-37fde244"],(function(s){"use strict";s.setCacheNameDetails({prefix:"app-shell"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/focus-visible-legacy-to7ZvaWj.js",revision:null},{url:"assets/focus-visible-Pz59kC95.js",revision:null},{url:"assets/hardware-back-button-gIgTg7vJ.js",revision:null},{url:"assets/hardware-back-button-legacy-lzXszDge.js",revision:null},{url:"assets/index-APhoyhVm.css",revision:null},{url:"assets/index-DrfmTIhZ.js",revision:null},{url:"assets/index-legacy-zfTQ1D2Y.js",revision:null},{url:"assets/index8-jWP7o420.js",revision:null},{url:"assets/index8-legacy-PZ0lmkqi.js",revision:null},{url:"assets/index9-legacy-qbF5VC3-.js",revision:null},{url:"assets/index9-sSthCyDz.js",revision:null},{url:"assets/input-shims-legacy-Nml0Ogp8.js",revision:null},{url:"assets/input-shims-NhQBqg9Q.js",revision:null},{url:"assets/ios.transition-legacy-WpRMubSG.js",revision:null},{url:"assets/ios.transition-mN6TQHmC.js",revision:null},{url:"assets/keyboard2-legacy-x1xE2BNJ.js",revision:null},{url:"assets/keyboard2-UIJQLBvX.js",revision:null},{url:"assets/md.transition-legacy-ejJ4wxmh.js",revision:null},{url:"assets/md.transition-VAHpLjsW.js",revision:null},{url:"assets/polyfills-legacy-VXF8Edu7.js",revision:null},{url:"assets/status-tap-legacy-zs644_hQ.js",revision:null},{url:"assets/status-tap-T1Z3Dd2H.js",revision:null},{url:"assets/swipe-back-legacy-8pHR2IkD.js",revision:null},{url:"assets/swipe-back-m8pLx4K_.js",revision:null},{url:"index.html",revision:"ba1d84bd9312d696dc177654569add5b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/icon192.png",revision:"ae99a99b0471018e63c8a439b8e24af0"},{url:"img/icon512.png",revision:"41694a4024efd9b1df66842ca74be9a3"},{url:"manifest.webmanifest",revision:"077321168d163fe662c75339d5c258de"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));

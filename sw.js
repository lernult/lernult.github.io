if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>i(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-37fde244"],(function(s){"use strict";s.setCacheNameDetails({prefix:"app-shell"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/focus-visible-legacy-to7ZvaWj.js",revision:null},{url:"assets/focus-visible-Pz59kC95.js",revision:null},{url:"assets/hardware-back-button-gIgTg7vJ.js",revision:null},{url:"assets/hardware-back-button-legacy-lzXszDge.js",revision:null},{url:"assets/index-APhoyhVm.css",revision:null},{url:"assets/index-legacy-e9vhiS_J.js",revision:null},{url:"assets/index-RubEUxly.js",revision:null},{url:"assets/index8-legacy-6F2zcC6Q.js",revision:null},{url:"assets/index8-nUnZhb9q.js",revision:null},{url:"assets/index9-1iiq93JG.js",revision:null},{url:"assets/index9-legacy-T8fMihfd.js",revision:null},{url:"assets/input-shims-KjvSL9Fr.js",revision:null},{url:"assets/input-shims-legacy-Hd6rwmu5.js",revision:null},{url:"assets/ios.transition--Z2ecKlp.js",revision:null},{url:"assets/ios.transition-legacy-lDGxrr89.js",revision:null},{url:"assets/keyboard2-legacy-osabh9m0.js",revision:null},{url:"assets/keyboard2-W7eIoblu.js",revision:null},{url:"assets/md.transition-legacy-NHp3gtz_.js",revision:null},{url:"assets/md.transition-tqMMi1ob.js",revision:null},{url:"assets/polyfills-legacy-VXF8Edu7.js",revision:null},{url:"assets/status-tap-legacy-4WEg19Pu.js",revision:null},{url:"assets/status-tap-mrdXBvya.js",revision:null},{url:"assets/swipe-back-legacy-IJ8xGo9p.js",revision:null},{url:"assets/swipe-back-W7rZ-i6o.js",revision:null},{url:"index.html",revision:"82c42f9eaf659e92c853b5deffca75a6"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/icon192.png",revision:"ae99a99b0471018e63c8a439b8e24af0"},{url:"img/icon512.png",revision:"41694a4024efd9b1df66842ca74be9a3"},{url:"manifest.webmanifest",revision:"077321168d163fe662c75339d5c258de"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));

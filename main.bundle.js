(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(354),i=n.n(r),o=n(314),a=n.n(o)()(i());a.push([t.id,"body,\np,\nh1,\nimg,\nnav,\nli,\nul,\nh2,\ndiv {\n  margin: 0;\n  padding: 0;\n}\n\n.carousel-element {\n  position: absolute;\n  top: calc(50% - 70px);\n  left: calc(50% - 70px);\n  width: 142px;\n  overflow: hidden;\n  display: grid;\n}\n\n.slides {\n  display: grid;\n  grid-auto-flow: column;\n}\n\nimg {\n  margin: 20px;\n}\n\n.picture-frame {\n  width: 140px;\n  overflow: hidden;\n  border: 1px solid;\n  margin-bottom: 10px;\n}\n\n.navigation-dots {\n  display: grid;\n  grid-auto-flow: row;\n  justify-content: center;\n  justify-items: center;\n  overflow: auto;\n  grid-template-columns: repeat(auto-fill, minmax(10px, 1fr));\n  gap: 5px;\n  max-width: 142px;\n  margin-bottom: 20px;\n}\n\n.navigation-dot {\n  width: 5px;\n  height: 5px;\n  background-color: white;\n  border: 1px solid;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.navigation-dot[active='true'] {\n  background-color: black;\n}\n\n.buttons {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;;;;;;;EASE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;EACd,2DAA2D;EAC3D,QAAQ;EACR,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB",sourcesContent:["body,\np,\nh1,\nimg,\nnav,\nli,\nul,\nh2,\ndiv {\n  margin: 0;\n  padding: 0;\n}\n\n.carousel-element {\n  position: absolute;\n  top: calc(50% - 70px);\n  left: calc(50% - 70px);\n  width: 142px;\n  overflow: hidden;\n  display: grid;\n}\n\n.slides {\n  display: grid;\n  grid-auto-flow: column;\n}\n\nimg {\n  margin: 20px;\n}\n\n.picture-frame {\n  width: 140px;\n  overflow: hidden;\n  border: 1px solid;\n  margin-bottom: 10px;\n}\n\n.navigation-dots {\n  display: grid;\n  grid-auto-flow: row;\n  justify-content: center;\n  justify-items: center;\n  overflow: auto;\n  grid-template-columns: repeat(auto-fill, minmax(10px, 1fr));\n  gap: 5px;\n  max-width: 142px;\n  margin-bottom: 20px;\n}\n\n.navigation-dot {\n  width: 5px;\n  height: 5px;\n  background-color: white;\n  border: 1px solid;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.navigation-dot[active='true'] {\n  background-color: black;\n}\n\n.buttons {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n}"],sourceRoot:""}]);const s=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},354:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(i," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},a=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(A);else{var f=i(A,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var s=n(o[a]);e[s].references--}for(var c=r(t,i),l=0;l<o.length;l++){var d=n(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!t||!/^http(s?):/.test(t));)t=r[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{var t=n(72),e=n.n(t),r=n(825),i=n.n(r),o=n(659),a=n.n(o),s=n(56),c=n.n(s),l=n(540),d=n.n(l),u=n(113),p=n.n(u),A=n(208),f={};function h(t,e){for(let n=0;n<t.length;n++)if("true"===t[n].getAttribute("active")&&n+1<t.length){t.forEach((t=>{t.style.display="none"})),t[n].setAttribute("active","false"),t[n+1].setAttribute("active","true"),t[n+1].style.display="inline",e[n].setAttribute("active","false"),e[n+1].setAttribute("active","true");break}}f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),e()(A.A,f),A.A&&A.A.locals&&A.A.locals;const g=n.p+"bf2af9db7418e8226064.svg",v=n.p+"26700d2f178dc44cf575.svg",m=n.p+"9f45c9fbdf78e56b36a2.svg",y=n.p+"f5fadbcbfedf36761696.svg",b=n.p+"5e0ac7818877955d1dec.svg",x=n.p+"abccce6bc91765a072d5.svg",E=document.querySelector(".slides"),C=new Image;C.src=g,C.style.height="100px",C.style.width="100px",E.appendChild(C);const w=new Image;w.src=v,w.style.height="100px",w.style.width="100px",E.appendChild(w);const B=new Image;B.src=m,B.style.height="100px",B.style.width="100px",E.appendChild(B);const I=new Image;I.src=y,I.style.height="100px",I.style.width="100px",E.appendChild(I);const S=new Image;S.src=b,S.style.height="100px",S.style.width="100px",E.appendChild(S);const k=new Image;k.src=x,k.style.height="100px",k.style.width="100px",E.appendChild(k);const j=new Image;j.src=g,j.style.height="100px",j.style.width="100px",E.appendChild(j);const T=new Image;T.src=v,T.style.height="100px",T.style.width="100px",E.appendChild(T);const q=new Image;q.src=m,q.style.height="100px",q.style.width="100px",E.appendChild(q);const L=new Image;L.src=y,L.style.height="100px",L.style.width="100px",E.appendChild(L);const M=new Image;M.src=b,M.style.height="100px",M.style.width="100px",E.appendChild(M);const U=new Image;U.src=x,U.style.height="100px",U.style.width="100px",E.appendChild(U);const R=document.querySelectorAll("img");R.forEach(((t,e)=>{t.setAttribute("active","false"),t.setAttribute("index",e)})),R[0].setAttribute("active","true"),document.querySelector(".turnCarouselRight").addEventListener("click",(()=>{h(R,Y)})),document.querySelector(".turnCarouselLeft").addEventListener("click",(()=>{!function(t,e){for(let n=0;n<t.length;n++)if("true"===t[n].getAttribute("active")&&n-1>=0){t.forEach((t=>{t.style.display="none"})),t[n].setAttribute("active","false"),t[n-1].setAttribute("active","true"),t[n-1].style.display="inline",e[n].setAttribute("active","false"),e[n-1].setAttribute("active","true");break}}(R,Y)}));const N=document.querySelector(".navigation-dots");R.forEach((t=>{const e=document.createElement("div"),n=t.getAttribute("index");e.setAttribute("index",n),e.classList.add("navigation-dot"),e.setAttribute("active","false"),N.appendChild(e)})),document.querySelector(".navigation-dot").setAttribute("active","true");const Y=document.querySelectorAll(".navigation-dot");let O;function P(){O=setInterval((()=>{!function(t,e){for(let n=0;n<e.length;n++)if("true"===e[n].getAttribute("active")){if(n+1<e.length){h(e,t);break}e.forEach(((e,n)=>{e.style.display="none",e.setAttribute("active","false"),t[n].setAttribute("active","false")})),e[0].setAttribute("active","true"),e[0].style.display="inline",t[0].setAttribute("active","true");break}}(Y,R)}),5e3)}function D(){clearInterval(O)}Y.forEach((t=>{t.addEventListener("click",function(t,e){return function(n){t.forEach((t=>{t.setAttribute("active","false")})),e.forEach((t=>{t.style.display="none",t.setAttribute("active","false")}));const r=n.target.getAttribute("index");t[r].setAttribute("active","true"),e[r].setAttribute("active","true"),e[r].style.display="inline"}}(Y,R))})),P(),document.addEventListener("visibilitychange",(function(){document.hidden?D():P()})),window.addEventListener("unload",D)})()})();
//# sourceMappingURL=main.bundle.js.map
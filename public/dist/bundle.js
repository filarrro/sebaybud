!function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";o(16),o(15),o(7),o(11),o(12),o(13),o(10)},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}},function(e,t,o){function n(e,t){for(var o=0;o<e.length;o++){var n=e[o],i=g[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(c(n.parts[r],t))}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(c(n.parts[r],t));g[n.id]={id:n.id,refs:1,parts:a}}}}function i(e){for(var t=[],o={},n=0;n<e.length;n++){var i=e[n],r=i[0],a=i[1],l=i[2],s=i[3],c={css:a,media:l,sourceMap:s};o[r]?o[r].parts.push(c):t.push(o[r]={id:r,parts:[c]})}return t}function r(e,t){var o=h(),n=v[v.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function c(e,t){var o,n,i;if(t.singleton){var r=b++;o=x||(x=l(t)),n=p.bind(null,o,r,!1),i=p.bind(null,o,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=s(t),n=f.bind(null,o),i=function(){a(o),o.href&&URL.revokeObjectURL(o.href)}):(o=l(t),n=d.bind(null,o),i=function(){a(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}function p(e,t,o,n){var i=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function d(e,t){var o=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function f(e,t){var o=t.css,n=t.sourceMap;n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([o],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var g={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=u(function(){return document.head||document.getElementsByTagName("head")[0]}),x=null,b=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=i(e);return n(o,t),function(e){for(var r=[],a=0;a<o.length;a++){var l=o[a],s=g[l.id];s.refs--,r.push(s)}if(e){var c=i(e);n(c,t)}for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete g[s.id]}}}};var y=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},,function(e,t,o){t=e.exports=o(1)(),t.push([e.id,"@media screen and (min-width:600px){body{font-size:16px}.container{margin:0 2em}h1.inverse{padding:20px 20px 30px}p{margin:1em 2em}header .logo{right:25px}#about{margin-bottom:25px}#offer .offer-header{padding:40px 0 60px}#offer .offer-header .offer-header-content p{padding:1em 2em;text-align:center}#offer ul{padding:0;margin:20px}#offer ul li{margin-bottom:10px;padding:5px;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);border-radius:2px}#testimontials .ref-button{border-radius:4px;width:55px;height:55px}#testimontials .ref-button .md-ripple-container{border-radius:4px}#testimontials .ref-button md-icon{font-size:32px;line-height:32px;width:32px;height:32px}#testimontials .ref-button.prev-button{left:-50px}#testimontials .ref-button.next-buton{right:-50px}#testimontials .ref-container-outer{max-width:450px;padding:40px 60px}#testimontials .ref-container-outer .ref-container{height:400px}#testimontials .ref-container-outer .ref-container .ref-slide:hover{cursor:pointer}#testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay{font-size:1.3em}#testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay .testmontial-desc{padding:30px}#testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay .testmontial-text{margin-bottom:25px}#testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay .testmontial-author{font-size:20px}#prices{margin-bottom:-30px}#prices .price-header{padding:30px 0 90px}#prices .container{position:relative;top:-60px}#prices .container .prices-container{perspective:1500px}#prices .price-row{font-size:1.1em;padding:7px 35px}#prices .price-cat-container{background-color:#fafafa;padding:10px 20px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);margin-bottom:20px;overflow:hidden}#prices .price-cat-container h3{margin:0}#solcraft{padding-bottom:40px}#contact .container{max-width:400px;margin:1em auto 3em;padding:.5em 2em 1px}footer .logo{margin:20px 50px;padding:12px;width:140px;height:140px}#gallery .img-container{width:150px;height:120px;margin:10px}}@media screen and (min-width:960px){.container,p{max-width:960px;margin:1em auto;padding:0 4em}h1{padding:25px 3em;font-size:2.2em}h1:after{height:4px;width:80px}#menuContent,header .menuButton{display:none}header .header-btn{display:inline-block;height:100%;color:#f5f5f5;line-height:100%;margin:0;padding:0 25px;border-radius:0;width:100%}header .logo{position:static;margin:0 20px}#baner #banerContent .md-display-1{font-size:45px;margin-bottom:50px}#baner #banerContent .md-display-2{font-size:70px}#about{margin-bottom:35px}#offer .offer-header{padding:40px 0 60px}#offer .offer-header .offer-header-content p{padding:1.5em 4.5em;max-width:900px;margin:15px auto 0;box-sizing:border-box;font-size:1.3em;background:hsla(0,0%,100%,.8);background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.8) 20%,hsla(0,0%,100%,.8) 80%,hsla(0,0%,100%,0))}#offer ul{max-width:960px;margin:30px auto;padding:0 3em}#offer .offer-row{margin-bottom:15px;background-color:#eee;transform:scale(0);transition:transform .225s ease-out}#offer .offer-row.is-visible{transform:scale(1)}#prices{margin-bottom:-70px}#prices .price-header{padding:45px 0 110px}#prices .price-cat-container{margin-bottom:40px}#prices .price-cat-container h3{margin:10px 0}#prices .price-row-header{text-transform:uppercase;font-size:1.4em;opacity:0;transition:transform .225s ease-out;transform:translateX(-100px)}#prices .price-row-header.is-visible{opacity:1;transform:translateX(0)}#prices .price-row{font-size:1em}#popup-overlay .popup-container #popup-dialog img{height:100%}footer{text-align:center}body{max-width:1920px;margin:0 auto;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}h1.inverse{padding:30px 20px}#prices .container{max-width:1200px}#gallery .img-container{margin:20px}.my-icon-button.popup-nav-btn{width:68px!important;height:68px}.my-icon-button.popup-nav-btn md-icon{width:60px;height:60px;font-size:60px}}@media screen and (min-width:1200px){header .nav-btns{margin:0 auto;width:1090px}#gallery .gallery-container{max-width:1200px}#gallery .img-container{width:200px;height:140px}}",""])},function(e,t,o){t=e.exports=o(1)(),t.push([e.id,'body{box-sizing:border-box;font-family:Proza Libre,sans-serif;min-width:320px;font-size:14px;padding-top:64px}section{position:relative;overflow:auto}h1{text-align:center;margin:0;padding:15px;text-transform:uppercase;font-size:1.6em;color:#424242}h1:after{content:"";display:block;height:2px;width:70px;background-color:#424242;margin:5px auto 0}h1.inverse{background-color:#212121;color:#fff}h1.inverse:after{background-color:#fff}p{margin:1em}a{outline:none}.relative{position:relative}.event-auto{pointer-events:auto}.text-center{text-align:center!important}.text-left{text-align:left}.bold{font-weight:700}.underline{text-decoration:underline}.italic{font-style:italic}.white-text{color:#fff}.yellow-text{color:#ff6f00}.primary-text{color:#ffc107}.red-text{color:#f44336}.container{margin:0 1em}.animated-bg{height:200%;transform:translateY(0);box-sizing:border-box}.my-icon-button{width:40px!important;min-width:0;height:40px;margin:0!important;padding:0}.my-icon-button.open md-icon{transform:rotate(180deg)}.my-icon-button md-icon{pointer-events:none;transform:rotate(0deg);transition:transform .3s ease-in-out}.my-icon-button.popup-nav-btn{position:absolute;background-color:hsla(0,0%,100%,.7);border:4px solid #333;bottom:0;width:48px!important;min-width:0;height:48px;margin:0!important;padding:0}.my-icon-button.popup-nav-btn:hover{background-color:#fff!important}.my-icon-button.popup-nav-btn.prev{left:0}.my-icon-button.popup-nav-btn.next{right:0}.my-icon-button.popup-nav-btn.close{right:0;top:0}.my-icon-button.popup-nav-btn md-icon{color:#333;transition:transform .3s ease-in-out;width:40px;height:40px;font-size:40px}#menuContent{display:block;position:fixed;left:-250px;top:0;bottom:0;z-index:59;background-color:#424242}#menuContent #menuInner{position:relative;display:block;padding:60px 15px 15px;width:250px;height:100%;box-sizing:border-box;overflow:auto}#menuContent #menuInner .menuInnerButton{position:relative;margin:15px 0}#menuContent #menuInner .md-button{display:block;width:100%;margin:0;height:48px;line-height:48px;color:#fff;background:#202020;background:-webkit-linear-gradient(to top left,#202020,#656565);background:-o-linear-gradient(to top left,#202020,#656565);background:-moz-linear-gradient(to top left,#202020,#656565);background:linear-gradient(to top left,#202020,#656565);font-weight:700}header{position:fixed;top:0;left:0;z-index:60;height:64px;width:100%;background-color:#121212;pointer-events:none;transition:box-shadow .3s ease-in-out}header .header-btn{display:none}header .menuButton{display:inline-block;position:relative;border:1px solid #fff;padding:5px;background-color:#212121!important;margin:12px;pointer-events:auto}header .menuButton span{display:block;position:absolute;height:2px;background-color:#fff;border-radius:3px;width:20px;left:9px;top:18px}header .menuButton span:first-of-type{top:12px}header .menuButton span:last-of-type{top:24px}.logo{background:hsla(0,0%,100%,.8);padding:2px 10px;position:fixed;top:0;right:5px;text-align:center;border-radius:50%;height:60px}.logo img{max-width:100%;max-height:100%}#page-loader{position:fixed;left:0;top:0;right:0;bottom:0;z-index:40;background-color:#f5f5f5;opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}#page-loader.is-visible{opacity:1}#page-content{height:100%;overflow:auto}#baner{height:70%;overflow:hidden}#baner #banerContent{position:relative;height:100%}#baner #firmName span{display:inline-block}#baner .slides{position:absolute;top:0;left:0;right:0;bottom:0}#baner .slides .slide{width:100%;height:100%;opacity:0;position:absolute;transition:opacity .7s ease-in-out}#baner .slides .slide.is-actual{opacity:1;z-index:2}#baner .slides .slide.slide1{background:url('+o(20)+") no-repeat 50%;background-size:cover}#baner .slides .slide.slide2{background:url("+o(21)+") no-repeat 50%;background-size:cover}#baner .slides .slide.slide3{background:url("+o(22)+") no-repeat 50%;background-size:cover}#baner .baner-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:3}#baner .baner-text{z-index:5}#about p{text-align:justify}#offer{overflow:hidden}#offer .offer-header{overflow:hidden;position:relative;padding:15px 0 30px;background-color:#000;box-sizing:border-box}#offer .offer-header .bg{position:absolute;left:0;top:0;right:0;bottom:0;background:url("+o(18)+") no-repeat 50%;background-size:cover;opacity:.4}#offer .offer-header .offer-header-content{position:relative}#offer .offer-header .offer-header-content h1{color:#fff}#offer .offer-header .offer-header-content h1:after{background-color:#fff}#offer .offer-header .offer-header-content p{background-color:hsla(0,0%,100%,.7);margin:0;padding:1em}#offer ul{list-style:none;padding:0;margin:20px}#offer .offer-row{margin-bottom:5px}#testimontials .ref-button{color:#fff;position:absolute;top:43%}#testimontials .ref-button.prev-button{left:-1em}#testimontials .ref-button.next-buton{right:-1em}#testimontials .ref-button md-icon{color:inherit}#testimontials .ref-container-outer{margin:auto;max-width:450px;padding:20px 40px;overflow:hidden;box-sizing:border-box}#testimontials .ref-container-outer .ref-container{position:relative;height:300px}#testimontials .ref-container-outer .ref-container .ref-slide{position:absolute;top:0;left:20px;right:20px;bottom:0;text-align:center;opacity:0}#testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.65);color:#fff;font-size:1.2em;font-weight:700}#testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay .testmontial-desc{padding:20px}#testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay .testmontial-text{margin-bottom:15px}#testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay .testmontial-author{font-size:14px;font-weight:400;text-align:right}#prices{margin-bottom:30px;overflow:hidden}#prices .price-header{overflow:hidden;position:relative;padding:20px 0 60px;box-sizing:border-box}#prices .price-header .price-bg{position:absolute;top:0;left:0;right:0;bottom:0;background:url("+o(19)+") no-repeat 50%;background-size:cover;opacity:.3}#prices .price-header h1{position:relative}#prices .price-cat-container{perspective:700px;max-height:none;position:relative;overflow:hidden;margin:10px 0}#prices .price-cat-container h3{margin:0}#prices .price-cat-container .price-row-details{overflow:hidden;height:0}#prices .price-row{background:#eaeaea;margin:10px 0;background:linear-gradient(90deg,transparent 0,rgba(0,0,0,.05) 10%,rgba(0,0,0,.05) 90%,transparent);padding:7px 25px;font-size:.9em}#prices .price-row .price{font-weight:700;color:#ffc107;text-align:right}#solcraft{background-color:#fff;padding-bottom:20px}#solcraft p{text-align:justify}#solcraft>div{margin:0 auto;max-width:1200px}#solcraft img{max-width:100%}#solcraft a{text-decoration:none}#solcraft .accent{color:#ffc107;font-weight:700}#solcraft .accent sup{font-weight:400}#contact{position:relative}#contact .contact-bg{position:absolute;top:0;left:0;right:0;bottom:0;background:url("+o(17)+") no-repeat 0;background-size:cover}#contact h1{position:relative;color:#fff}#contact h1:after{background-color:#fff}#contact .container{padding:.5em 1em 1px;background-color:hsla(0,0%,100%,.93);position:relative;border-radius:4px;margin:1em 1em 3em}#contact form .md-errors-spacer{display:none}#contact form button{color:#fff;width:200px}#contact form button md-icon{color:inherit}#popup-dialog{max-height:90%}#popup-dialog img{max-height:100%;max-width:100%}#popup-dialog #popup-cancel{position:absolute;right:20px;width:40px;min-width:auto;height:40px;margin:0;border:2px solid;color:#fff}#popup-dialog #popup-cancel md-icon{color:inherit}footer{padding:10px 15px;background-color:#424242;color:#fff}footer .logo{margin:10px;padding:8px;position:static;width:90px;height:90px}footer .info-row{margin-bottom:10px}footer .info-row md-icon{margin-right:10px}.made-by{background-color:#212121;padding:10px;text-align:center;color:#fff}.made-by md-icon{margin:0 8px}#gallery{min-height:100%;box-sizing:border-box}#gallery .img-container{width:120px;height:120px;margin:7px;padding:0;border-radius:0;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);transition:box-shadow .3s ease-in-out,filter .3s ease-in-out;transform:scale(0);filter:grayscale(.75)}#gallery .img-container img{max-width:100%}#gallery .img-container .gallery-image{width:100%;height:100%}#gallery .img-container:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);filter:grayscale(0)}#gallery .gallery-container{max-width:960px;margin:0 auto;min-height:calc(100% - 135px)}#gallery #loader{height:15px;background-color:#ddd;margin-top:20px}#gallery-popup{max-width:90%;max-height:90%}#gallery-popup md-toolbar{background-color:#212121}#gallery-popup md-toolbar md-icon{color:#fff}#gallery-popup .md-dialog-content{padding:0}#gallery-popup .relative{background-color:#f5f5f5;position:relative}#gallery-popup md-progress-circular{position:absolute;margin:auto;top:0;left:0;right:0;bottom:0}#gallery-popup .gallery-img-popup{position:relative;width:250px;height:250px;opacity:0}md-dialog.testimontial-dialog .md-dialog-content{background-color:#fff;border-radius:4px;padding:6px}.pagination{padding-bottom:20px;width:100%}.pagination .md-button{background-color:#fff;min-width:0;border:1px solid;margin:0 3px;width:30px;height:30px;min-height:0;line-height:31px;padding:0}.pagination .md-button:focus,.pagination .md-button:hover{background-color:#fff}.pagination .md-button.md-raised{border:none}.pagination .md-button.md-raised:focus,.pagination .md-button.md-raised:hover{background-color:#333}",""])},,function(e,t){"use strict";angular.module("webApp",["ui.router","ngMaterial"]).config(["$mdThemingProvider","$stateProvider","$urlRouterProvider","$locationProvider",function(e,t,o,n){"ngInject";var i=e.extendPalette("grey",{600:"#333333"});e.definePalette("primary",i),e.theme("default").primaryPalette("primary",{default:"900"}),n.html5Mode({enabled:!0,requireBase:!1}),o.otherwise("/"),t.state({name:"home",url:"/",controller:"MainController",controllerAs:"vm",templateUrl:"templates/application/main.html"}).state({name:"gallery",url:"/gallery",controller:"GalleryController",controllerAs:"vm",templateUrl:"templates/application/gallery.html",resolve:{images:["Factory",function(e){return e.GetImages()}]}})}]).run(["$rootScope","$state","$location","$anchorScroll","$timeout",function(e,t,o,n,i){"ngInject";function r(o,n){return o===t.current.name?(d.to(u,.3,{x:"0%"}),f=!1,void("home"===o&&l(n.anchor))):(d.killAll(),d.to(u,.3,{x:"0%"}),f=!1,s(),i(function(){n&&n.anchor&&(e.anchor=n.anchor),t.go(o,n)},p),void 0)}function a(){f?d.to(u,.3,{x:"0%"}):d.to(u,.3,{x:"100%"}),f=!f}function l(e){var t=document.getElementById(e),o=document.getElementById("page-content");d.to(o,.6,{scrollTo:{y:t,offsetY:0}})}function s(){g=!0,document.getElementById("page-loader").classList.add("is-visible")}function c(){g=!1,document.getElementById("page-loader").classList.remove("is-visible")}var p=200,d=TweenMax,f=!1,g=!1,u=angular.element(document.querySelector("#menuContent"));n.yOffset=64,e.toggleMenu=a,e.go=r,e.scrollTo=l,e.$on("$stateChangeSuccess",function(t,r,a,l,s){e.anchor&&(o.hash(e.anchor),i(function(){n(),e.anchor=void 0},180)),g&&i(function(){c()},p)})}])},,,function(e,t){"use strict";angular.module("webApp").controller("GalleryController",["$timeout","$mdDialog","Factory","images",function(e,t,o,n){"ngInject";function i(){e(function(){p=document.getElementsByClassName("img-container"),TweenMax.staggerTo(p,.2,{scale:1},.02)})}function r(t){c.selectedPage!==t&&(p=document.getElementsByClassName("img-container"),TweenMax.staggerTo(p,.2,{scale:0},.02,function(){o.GetImages(t).then(function(o){console.log(o),c.gallery=o.data,c.selectedPage=t,e(function(){p=document.getElementsByClassName("img-container"),TweenMax.staggerFromTo(p,.2,{scale:0},{scale:1},.02)})})}))}function a(){if(0!==c.selectedPage){var e=c.selectedPage-1;r(e)}}function l(){if(c.selectedPage!==c.pagination[c.pagination.length-1]){var e=c.selectedPage+1;r(e)}}function s(e,o){t.show({controller:"GalleryDialogController",controllerAs:"vm",templateUrl:"/templates/application/gallery.tmpl.html",parent:angular.element(document.body),targetEvent:e,clickOutsideToClose:!0,locals:{images:c.gallery,position:o}}).then(function(){},function(){})}console.log(n);var c=this,p=void 0;c.gallery=n.data,c.pagination=n.pages,c.selectedPage=0,c.show=s,c.getPage=r,c.prevPage=a,c.nextPage=l,i()}]).controller("GalleryDialogController",["$timeout","$mdDialog","images","position",function(e,t,o,n){"ngInject";function i(){e(function(){u=document.getElementById("gallery-img"),h=new Image,h.onload=function(){var e=h.height,t=h.width,n=p(t,e),i=n.w,r=n.h;u.src="/media/galery/"+o[m].source,f.to(u,.225,{width:i}),f.to(u,.225,{height:r,delay:.05,onComplete:function(){f.to(u,.225,{autoAlpha:1})}})},h.src="/media/galery/"+o[m].source})}function r(){t.cancel()}function a(){h.src="/media/galery/"+o[m].source}function l(e){m+=e,m<0?m=g:m>g&&(m=0)}function s(){l(1),f.to(u,.225,{autoAlpha:0,onComplete:function(){a()}})}function c(){l(-1),f.to(u,.225,{autoAlpha:0,onComplete:function(){a()}})}function p(e,t){var o=Math.floor(.9*window.innerWidth),n=Math.floor(.9*window.innerHeight),i=void 0,r=void 0;return e>o&&(i=o/e),t>n&&(r=n/t),i||r?i&&r?i<r?{w:o,h:t*i}:{w:e*r,h:n}:i?{w:o,h:t*i}:{w:e*r,h:n}:{w:e,h:t}}var d=this,f=TweenMax,g=o.length-1,u=void 0,m=n,h=void 0;d.images=o,d.close=r,d.next=s,d.prev=c,i()}])},function(e,t){"use strict";angular.module("webApp").factory("Factory",["$http","$q",function(e,t){"ngInject";function o(){var o=t.defer();return e.get("/api/main-page").then(function(e){console.log(e),o.resolve(e.data)},function(e){console.log("error"),console.log(e),o.resolve(e)}),o.promise}function n(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,i=t.defer();return e.get("/api/galerry-files/"+n+"/"+o).then(function(e){console.log(e),i.resolve(e.data)},function(e){console.log("error"),console.log(e),i.resolve(e)}),i.promise}function i(o){var n=t.defer();return e.post("/contact-mail",o).then(function(e){n.resolve(e.data)},function(e){console.log("error",e),n.resolve(e)}),n.promise}var r={GetData:o,GetImages:n,sendMail:i};return r}])},function(e,t){"use strict";angular.module("webApp").controller("DialogController",["$mdDialog","$scope","item",function(e,t,o){"ngInject";function n(){e.hide()}function i(){e.cancel()}t.item=o,t.hide=n,t.cancel=i}])},function(e,t){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};angular.module("webApp").controller("MainController",["$rootScope","$scope","$timeout","$state","$mdPanel","$mdDialog","Factory",function(e,t,n,i,r,a,l){"ngInject";function s(){l.GetData().then(g),n(function(){y=document.getElementById("banerContent");var e=u.to(y,1,{y:"60%",ease:Power0.easeNone});m=new ScrollMagic.Controller({container:"#page-content"}),h=new ScrollMagic.Scene({duration:"100%"}).setTween(e).addTo(m)})}function c(e,t){console.log(e),a.show({controller:"TetsimontialPanelController",controllerAs:"vm",templateUrl:"templates/application/testimontial.tmpl.html",parent:angular.element(document.body),targetEvent:t,clickOutsideToClose:!0,locals:{data:e}}).then(function(){},function(){})}function p(){var e=new TimelineMax;e.fromTo(document.getElementById("popup-dialog"),.5,{scale:1,opacity:1},{scale:0,opacity:0,ease:Back.easeIn}).fromTo(document.getElementById("popup-overlay"),.3,{autoAlpha:1,zIndex:70},{autoAlpha:1,zIndex:70},"-= 0.3").set(document.getElementById("popup-overlay"),{zIndex:-1})}function d(e,t){var o=document.getElementById("price-details-"+e),n=o.offsetHeight;0===n?(u.set(o,{height:"auto"}),u.from(o,.6,{height:0,ease:Power1.easeInOut}),t.srcElement.classList.add("open")):(u.to(o,.5,{height:0}),t.srcElement.classList.remove("open"))}function f(e){e&&(t.sendingMail=!0,l.sendMail(t.contact).then(function(e){console.log(e),t.sendingMail=!1,e.message?(a.show(a.alert().clickOutsideToClose(!0).title("Wiadomość wysłana").textContent("Twoja wiadomość została wysłana. Odezwiemy się do Ciebie wkrótce.").ariaLabel("Info").ok("ok")),t.contact={},t.contactForm.$setPristine(),t.contactForm.$setUntouched()):a.show(a.alert().clickOutsideToClose(!0).title("Wystąpił błąd").textContent("Wystapił nieoczekiwany bląd podczas próby wysłania wiadomości.").ariaLabel("Info").ok("ok"))}))}function g(e){t.priceCategories=e.categories,t.testimontials=e.testimontials,t.testimontialSelect=function(e){e?t.testimontialCarousel.next():t.testimontialCarousel.prev()},n(function(){if(v={actual:0,before:null,timeout:void 0,slides:document.getElementsByClassName("slide"),length:document.getElementsByClassName("slide").length,start:function(){var e=this;this.slides[0].classList.add("is-actual"),this.actual=1,this.before=0,this.timeout=n(function(){e.next()},3500)},next:function(){var e=this;console.log(this.slides,o(this.slides)),this.slides[this.before].classList.remove("is-actual"),this.slides[this.actual].classList.add("is-actual"),this.before=this.actual,this.actual=this.actual+1<this.length&&this.actual+1||0,this.timeout=n(function(){e.next()},3500)}},v.start(),t.testimontialCarousel={actual:0,array:document.getElementById("testimontials").getElementsByClassName("ref-slide"),length:document.getElementById("testimontials").getElementsByClassName("ref-slide").length,build:function(){u.set(this.array[0],{alpha:1,scale:1,zIndex:4})},next:function(){var e=new TimelineMax,t=this.actual+1<this.length&&this.actual+1||0;e.fromTo(this.array[this.actual],.6,{xPercent:0,alpha:1,scale:1,zIndex:2},{alpha:0,scale:0,xPercent:-100,zIndex:2,ease:Power2.easeOut},0).fromTo(this.array[t],.6,{alpha:0,scale:0,xPercent:100,zIndex:4},{alpha:1,scale:1,xPercent:0,zIndex:4,ease:Back.easeOut,onStart:function(){this.actual=t}.bind(this)},0)},prev:function(){var e=new TimelineMax,t=this.actual>0?this.actual-1:this.length-1;e.fromTo(this.array[this.actual],.6,{xPercent:0,alpha:1,scale:1,zIndex:2},{alpha:0,scale:0,xPercent:100,zIndex:2,ease:Power2.easeOut},0).fromTo(this.array[t],.6,{alpha:0,scale:0,xPercent:-100,zIndex:4},{alpha:1,scale:1,xPercent:0,zIndex:4,ease:Back.easeOut,onStart:function(){this.actual=t}.bind(this)},0)}},t.testimontialCarousel.build(),!window.IS_MOBILE){for(w=document.getElementsByClassName("animated-bg"),b=w.length,x=0;x<b;x++){var e=u.fromTo(w[x],1,{yPercent:0},{yPercent:-50,ease:Power0.easeNone});new ScrollMagic.Scene({triggerElement:w[x],triggerHook:"onEnter",duration:"200%"}).setTween(e).addTo(m)}for(k=document.getElementsByClassName("offer-row"),b=k.length,x=0;x<b;x++)new ScrollMagic.Scene({triggerElement:k[x],triggerHook:"onCenter",offset:-150,reverse:!1}).setClassToggle(k[x],"is-visible").addTo(m);for(C=document.getElementsByClassName("price-row-header"),b=C.length,x=0;x<b;x++)new ScrollMagic.Scene({triggerElement:C[x],triggerHook:"onCenter",offset:-150,reverse:!1}).setClassToggle(C[x],"is-visible").addTo(m)}})}var u=TweenMax,m=void 0,h=void 0,x=void 0,b=void 0,v=void 0,y=void 0,w=void 0,k=void 0,C=void 0;t.contact={},t.sendingMail=!1,t.priceCategories=void 0,t.testimontials=void 0,t.showReference=c,t.hidePopup=p,t.togglePriceDetails=d,t.sendMail=f,s(),t.$on("$destroy",function(){m.destroy(!0),m=null,n.cancel(v.timeout)})}]).controller("TetsimontialPanelController",["$mdPanel","data",function(e,t){"ngInject";var o=this;o.img=t.img}])},,function(e,t,o){var n=o(4);"string"==typeof n&&(n=[[e.id,n,""]]);o(2)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,o){var n=o(5);"string"==typeof n&&(n=[[e.id,n,""]]);o(2)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,o){e.exports=o.p+"../img/contact.jpg"},function(e,t,o){e.exports=o.p+"../img/offer.jpg"},function(e,t,o){e.exports=o.p+"../img/pricing.jpg"},function(e,t,o){e.exports=o.p+"../img/slide1.jpeg"},function(e,t,o){e.exports=o.p+"../img/slide2.jpg"},function(e,t,o){e.exports=o.p+"../img/slide3.jpg"}]);
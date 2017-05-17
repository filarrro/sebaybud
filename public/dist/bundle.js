/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(8);

	__webpack_require__(16);

	__webpack_require__(18);

	__webpack_require__(19);

	__webpack_require__(20);

	__webpack_require__(21);

	__webpack_require__(22);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  box-sizing: border-box;\n  font-family: 'Proza Libre', sans-serif;\n  min-width: 320px;\n  font-size: 14px;\n  padding-top: 64px; }\n\nsection {\n  position: relative;\n  overflow: auto; }\n\nh1 {\n  text-align: center;\n  margin: 0;\n  padding: 15px;\n  text-transform: uppercase;\n  font-size: 1.6em;\n  color: #424242; }\n  h1::after {\n    content: \"\";\n    display: block;\n    height: 2px;\n    width: 70px;\n    background-color: #424242;\n    margin: 5px auto 0; }\n  h1.inverse {\n    background-color: #212121;\n    color: #FFF; }\n    h1.inverse::after {\n      background-color: #FFF; }\n\np {\n  margin: 1em; }\n\na {\n  outline: none; }\n\n.relative {\n  position: relative; }\n\n.event-auto {\n  pointer-events: auto; }\n\n.text-center {\n  text-align: center !important; }\n\n.text-left {\n  text-align: left; }\n\n.bold {\n  font-weight: 700; }\n\n.underline {\n  text-decoration: underline; }\n\n.italic {\n  font-style: italic; }\n\n.white-text {\n  color: #FFF; }\n\n.yellow-text {\n  color: #FF6F00; }\n\n.primary-text {\n  color: #FFC107; }\n\n.red-text {\n  color: #F44336; }\n\n.container {\n  margin: 0 1em; }\n\n.animated-bg {\n  height: 200%;\n  transform: translateY(0);\n  box-sizing: border-box; }\n\n.my-icon-button {\n  width: 40px !important;\n  min-width: 0;\n  height: 40px;\n  margin: 0px !important;\n  padding: 0px; }\n  .my-icon-button.open md-icon {\n    transform: rotateZ(180deg); }\n  .my-icon-button md-icon {\n    pointer-events: none;\n    transform: rotateZ(0deg);\n    transition: transform .3s ease-in-out; }\n  .my-icon-button.popup-nav-btn {\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.7);\n    border: 4px solid #333;\n    bottom: 0;\n    width: 48px !important;\n    min-width: 0;\n    height: 48px;\n    margin: 0px !important;\n    padding: 0px; }\n    .my-icon-button.popup-nav-btn:hover {\n      background-color: #FFF !important; }\n    .my-icon-button.popup-nav-btn.prev {\n      left: 0px; }\n    .my-icon-button.popup-nav-btn.next {\n      right: 0px; }\n    .my-icon-button.popup-nav-btn.close {\n      right: 0;\n      top: 0; }\n    .my-icon-button.popup-nav-btn md-icon {\n      color: #333;\n      transition: transform .3s ease-in-out;\n      width: 40px;\n      height: 40px;\n      font-size: 40px; }\n\n#menuContent {\n  display: block;\n  position: fixed;\n  left: -250px;\n  top: 0;\n  bottom: 0;\n  z-index: 59;\n  background-color: #424242; }\n  #menuContent #menuInner {\n    position: relative;\n    display: block;\n    padding: 60px 15px 15px;\n    width: 250px;\n    height: 100%;\n    box-sizing: border-box;\n    overflow: auto; }\n    #menuContent #menuInner .menuInnerButton {\n      position: relative;\n      margin: 15px 0; }\n    #menuContent #menuInner .md-button {\n      display: block;\n      width: 100%;\n      margin: 0;\n      height: 48px;\n      line-height: 48px;\n      color: #FFF;\n      background: #202020;\n      background: -webkit-linear-gradient(to top left, #202020, #656565);\n      background: -o-linear-gradient(to top left, #202020, #656565);\n      background: -moz-linear-gradient(to top left, #202020, #656565);\n      background: linear-gradient(to top left, #202020, #656565);\n      font-weight: 700; }\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 60;\n  height: 64px;\n  width: 100%;\n  background-color: #121212;\n  pointer-events: none;\n  transition: box-shadow .3s ease-in-out; }\n  header .header-btn {\n    display: none; }\n  header .menuButton {\n    display: inline-block;\n    position: relative;\n    border: 1px solid #FFF;\n    padding: 5px;\n    background-color: #212121 !important;\n    margin: 12px;\n    pointer-events: auto; }\n    header .menuButton span {\n      display: block;\n      position: absolute;\n      height: 2px;\n      background-color: #FFF;\n      border-radius: 3px;\n      width: 20px;\n      left: 9px;\n      top: 18px; }\n      header .menuButton span:first-of-type {\n        top: 12px; }\n      header .menuButton span:last-of-type {\n        top: 24px; }\n\n.logo {\n  background: rgba(255, 255, 255, 0.8);\n  padding: 2px 10px;\n  position: fixed;\n  top: 0px;\n  right: 5px;\n  text-align: center;\n  border-radius: 50%;\n  height: 60px; }\n  .logo img {\n    max-width: 100%;\n    max-height: 100%; }\n\n#page-loader {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 40;\n  background-color: #F5F5F5;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity ease-in-out 0.2s; }\n  #page-loader.is-visible {\n    opacity: 1; }\n\n#page-content {\n  height: 100%;\n  overflow: auto; }\n\n#baner {\n  height: 70%;\n  overflow: hidden; }\n  #baner #banerContent {\n    position: relative;\n    height: 100%; }\n  #baner #firmName span {\n    display: inline-block; }\n  #baner .slides {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n    #baner .slides .slide {\n      width: 100%;\n      height: 100%;\n      opacity: 0;\n      position: absolute;\n      transition: opacity ease-in-out 0.7s; }\n      #baner .slides .slide.is-actual {\n        opacity: 1;\n        z-index: 2; }\n      #baner .slides .slide.slide1 {\n        background: url(" + __webpack_require__(10) + ") no-repeat center;\n        background-size: cover; }\n      #baner .slides .slide.slide2 {\n        background: url(" + __webpack_require__(11) + ") no-repeat center;\n        background-size: cover; }\n      #baner .slides .slide.slide3 {\n        background: url(" + __webpack_require__(12) + ") no-repeat center;\n        background-size: cover; }\n  #baner .baner-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.6);\n    z-index: 3; }\n  #baner .baner-text {\n    z-index: 5; }\n\n#about p {\n  text-align: justify; }\n\n#offer {\n  overflow: hidden; }\n  #offer .offer-header {\n    overflow: hidden;\n    position: relative;\n    padding: 15px 0 30px;\n    background-color: #000;\n    box-sizing: border-box; }\n    #offer .offer-header .bg {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      background: url(" + __webpack_require__(13) + ") no-repeat center;\n      background-size: cover;\n      opacity: .4; }\n    #offer .offer-header .offer-header-content {\n      position: relative; }\n      #offer .offer-header .offer-header-content h1 {\n        color: #FFF; }\n        #offer .offer-header .offer-header-content h1::after {\n          background-color: #FFF; }\n      #offer .offer-header .offer-header-content p {\n        background-color: rgba(255, 255, 255, 0.7);\n        margin: 0;\n        padding: 1em; }\n  #offer ul {\n    list-style: none;\n    padding: 0;\n    margin: 20px; }\n  #offer .offer-row {\n    margin-bottom: 5px; }\n\n#testimontials .ref-button {\n  color: #FFF;\n  position: absolute;\n  top: 43%; }\n  #testimontials .ref-button.prev-button {\n    left: -1em; }\n  #testimontials .ref-button.next-buton {\n    right: -1em; }\n  #testimontials .ref-button md-icon {\n    color: inherit; }\n\n#testimontials .ref-container-outer {\n  margin: auto;\n  max-width: 450px;\n  padding: 20px 40px;\n  overflow: hidden;\n  box-sizing: border-box; }\n  #testimontials .ref-container-outer .ref-container {\n    position: relative;\n    height: 300px; }\n    #testimontials .ref-container-outer .ref-container .ref-slide {\n      position: absolute;\n      top: 0;\n      left: 20px;\n      right: 20px;\n      bottom: 0;\n      text-align: center;\n      opacity: 0; }\n      #testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.65);\n        color: #FFF;\n        font-size: 1.2em;\n        font-weight: 700; }\n        #testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay .testmontial-desc {\n          padding: 20px; }\n        #testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay .testmontial-text {\n          margin-bottom: 15px; }\n        #testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay .testmontial-author {\n          font-size: 14px;\n          font-weight: normal;\n          text-align: right; }\n\n#prices {\n  margin-bottom: 30px;\n  overflow: hidden; }\n  #prices .price-header {\n    overflow: hidden;\n    position: relative;\n    padding: 20px 0 60px;\n    box-sizing: border-box; }\n    #prices .price-header .price-bg {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: url(" + __webpack_require__(14) + ") no-repeat center;\n      background-size: cover;\n      opacity: .3; }\n    #prices .price-header h1 {\n      position: relative; }\n  #prices .price-cat-container {\n    perspective: 700px;\n    max-height: none;\n    position: relative;\n    overflow: hidden;\n    margin: 10px 0; }\n    #prices .price-cat-container h3 {\n      margin: 0; }\n    #prices .price-cat-container .price-row-details {\n      overflow: hidden;\n      height: 0; }\n  #prices .price-row {\n    background: #EAEAEA;\n    margin: 10px 0;\n    background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.05) 10%, rgba(0, 0, 0, 0.05) 90%, transparent 100%);\n    padding: 7px 25px;\n    font-size: 0.9em; }\n    #prices .price-row .price {\n      font-weight: 700;\n      color: #FFC107;\n      text-align: right; }\n\n#solcraft {\n  background-color: #FFF;\n  padding-bottom: 20px; }\n  #solcraft p {\n    text-align: justify; }\n  #solcraft > div {\n    margin: 0 auto;\n    max-width: 1200px; }\n  #solcraft img {\n    max-width: 100%; }\n  #solcraft a {\n    text-decoration: none; }\n  #solcraft .accent {\n    color: #FFC107;\n    font-weight: bold; }\n    #solcraft .accent sup {\n      font-weight: normal; }\n\n#contact {\n  position: relative; }\n  #contact .contact-bg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: url(" + __webpack_require__(15) + ") no-repeat center left;\n    background-size: cover; }\n  #contact h1 {\n    position: relative;\n    color: #FFF; }\n    #contact h1::after {\n      background-color: #FFF; }\n  #contact .container {\n    padding: 0.5em 1em 1px;\n    background-color: rgba(255, 255, 255, 0.93);\n    position: relative;\n    border-radius: 4px;\n    margin: 1em 1em 3em; }\n  #contact form .md-errors-spacer {\n    display: none; }\n  #contact form button {\n    color: #FFF;\n    width: 200px; }\n    #contact form button md-icon {\n      color: inherit; }\n\n#popup-dialog {\n  max-height: 90%; }\n  #popup-dialog img {\n    max-height: 100%;\n    max-width: 100%; }\n  #popup-dialog #popup-cancel {\n    position: absolute;\n    right: 20px;\n    width: 40px;\n    min-width: auto;\n    height: 40px;\n    margin: 0;\n    border: 2px solid;\n    color: #FFF; }\n    #popup-dialog #popup-cancel md-icon {\n      color: inherit; }\n\nfooter {\n  padding: 10px 15px;\n  background-color: #424242;\n  color: #FFF; }\n  footer .logo {\n    margin: 10px;\n    padding: 8px;\n    position: static;\n    width: 90px;\n    height: 90px; }\n  footer .info-row {\n    margin-bottom: 10px; }\n    footer .info-row md-icon {\n      margin-right: 10px; }\n\n.made-by {\n  background-color: #212121;\n  padding: 10px;\n  text-align: center;\n  color: #FFF; }\n  .made-by md-icon {\n    margin: 0 8px; }\n\n/*** GALERY ***/\n#gallery {\n  min-height: 100%;\n  box-sizing: border-box; }\n  #gallery .img-container {\n    width: 120px;\n    height: 120px;\n    margin: 7px;\n    padding: 0;\n    border-radius: 0;\n    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n    transition: box-shadow .3s ease-in-out, filter .3s ease-in-out;\n    transform: scale(0);\n    filter: grayscale(0.75); }\n    #gallery .img-container img {\n      max-width: 100%; }\n    #gallery .img-container .gallery-image {\n      width: 100%;\n      height: 100%; }\n    #gallery .img-container:hover {\n      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n      filter: grayscale(0); }\n  #gallery .gallery-container {\n    max-width: 960px;\n    margin: 0 auto;\n    min-height: calc(100% - 135px); }\n  #gallery #loader {\n    height: 15px;\n    background-color: #DDD;\n    margin-top: 20px; }\n\n#gallery-popup {\n  max-width: 90%;\n  max-height: 90%; }\n  #gallery-popup md-toolbar {\n    background-color: #212121; }\n    #gallery-popup md-toolbar md-icon {\n      color: #FFF; }\n  #gallery-popup .md-dialog-content {\n    padding: 0; }\n  #gallery-popup .relative {\n    background-color: #F5F5F5;\n    position: relative; }\n  #gallery-popup md-progress-circular {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n  #gallery-popup .gallery-img-popup {\n    position: relative;\n    width: 250px;\n    height: 250px;\n    opacity: 0; }\n\nmd-dialog.testimontial-dialog .md-dialog-content {\n  background-color: #FFF;\n  border-radius: 4px;\n  padding: 6px; }\n\n.pagination {\n  padding-bottom: 20px;\n  width: 100%; }\n  .pagination .md-button {\n    background-color: #FFF;\n    min-width: 0;\n    border: 1px solid;\n    margin: 0 3px;\n    width: 30px;\n    height: 30px;\n    min-height: initial;\n    line-height: 31px;\n    padding: 0; }\n    .pagination .md-button:hover, .pagination .md-button:focus {\n      background-color: #FFF; }\n    .pagination .md-button.md-raised {\n      border: none; }\n      .pagination .md-button.md-raised:hover, .pagination .md-button.md-raised:focus {\n        background-color: #333333; }\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../img/slide1.jpeg";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../img/slide2.jpg";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../img/slide3.jpg";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../img/offer.jpg";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../img/pricing.jpg";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../img/contact.jpg";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style-large.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style-large.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@media screen and (min-width: 600px) {\n  body {\n    font-size: 16px; }\n  .container {\n    margin: 0 2em; }\n  h1.inverse {\n    padding: 20px 20px 30px; }\n  p {\n    margin: 1em 2em; }\n  header .logo {\n    right: 25px; }\n  #about {\n    margin-bottom: 25px; }\n  #offer .offer-header {\n    padding: 40px 0 60px; }\n    #offer .offer-header .offer-header-content p {\n      padding: 1em 2em;\n      text-align: center; }\n  #offer ul {\n    padding: 0;\n    margin: 20px; }\n    #offer ul li {\n      margin-bottom: 10px;\n      padding: 5px;\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n      border-radius: 2px; }\n  #testimontials .ref-button {\n    border-radius: 4px;\n    width: 55px;\n    height: 55px; }\n    #testimontials .ref-button .md-ripple-container {\n      border-radius: 4px; }\n    #testimontials .ref-button md-icon {\n      font-size: 32px;\n      line-height: 32px;\n      width: 32px;\n      height: 32px; }\n    #testimontials .ref-button.prev-button {\n      left: -50px; }\n    #testimontials .ref-button.next-buton {\n      right: -50px; }\n  #testimontials .ref-container-outer {\n    max-width: 450px;\n    padding: 40px 60px; }\n    #testimontials .ref-container-outer .ref-container {\n      height: 400px; }\n      #testimontials .ref-container-outer .ref-container .ref-slide:hover {\n        cursor: pointer; }\n      #testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay {\n        font-size: 1.3em; }\n        #testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay .testmontial-desc {\n          padding: 30px; }\n        #testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay .testmontial-text {\n          margin-bottom: 25px; }\n        #testimontials .ref-container-outer .ref-container .ref-slide .ref-overlay .testmontial-author {\n          font-size: 20px; }\n  #prices {\n    margin-bottom: -30px; }\n    #prices .price-header {\n      padding: 30px 0 90px; }\n    #prices .container {\n      position: relative;\n      top: -60px; }\n      #prices .container .prices-container {\n        perspective: 1500px; }\n    #prices .price-row {\n      font-size: 1.1em;\n      padding: 7px 35px; }\n    #prices .price-cat-container {\n      background-color: #fafafa;\n      padding: 10px 20px;\n      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n      margin-bottom: 20px;\n      overflow: hidden; }\n      #prices .price-cat-container h3 {\n        margin: 0; }\n  #solcraft {\n    padding-bottom: 40px; }\n  #contact .container {\n    max-width: 400px;\n    margin: 1em auto 3em;\n    padding: 0.5em 2em 1px; }\n  footer .logo {\n    margin: 20px 50px;\n    padding: 12px;\n    width: 140px;\n    height: 140px; }\n  #gallery .img-container {\n    width: 150px;\n    height: 120px;\n    margin: 10px; } }\n\n@media screen and (min-width: 960px) {\n  .container {\n    max-width: 960px;\n    margin: 1em auto;\n    padding: 0 4em; }\n  p {\n    max-width: 960px;\n    margin: 1em auto;\n    padding: 0 4em; }\n  h1 {\n    padding: 25px 3em;\n    font-size: 2.2em; }\n    h1::after {\n      height: 4px;\n      width: 80px; }\n  #menuContent {\n    display: none; }\n  header .menuButton {\n    display: none; }\n  header .header-btn {\n    display: inline-block;\n    height: 100%;\n    color: #F5F5F5;\n    line-height: 100%;\n    margin: 0;\n    padding: 0 25px;\n    border-radius: 0;\n    width: 100%; }\n  header .logo {\n    position: static;\n    margin: 0 20px; }\n  #baner #banerContent .md-display-1 {\n    font-size: 45px;\n    margin-bottom: 50px; }\n  #baner #banerContent .md-display-2 {\n    font-size: 70px; }\n  #about {\n    margin-bottom: 35px; }\n  #offer .offer-header {\n    padding: 40px 0 60px; }\n    #offer .offer-header .offer-header-content p {\n      padding: 1.5em 4.5em;\n      max-width: 900px;\n      margin: 15px auto 0;\n      box-sizing: border-box;\n      font-size: 1.3em;\n      background: rgba(255, 255, 255, 0.8);\n      background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0.8) 80%, rgba(255, 255, 255, 0) 100%); }\n  #offer ul {\n    max-width: 960px;\n    margin: 30px auto;\n    padding: 0 3em; }\n  #offer .offer-row {\n    margin-bottom: 15px;\n    background-color: #EEE;\n    transform: scale(0);\n    transition: transform ease-out 0.225s; }\n    #offer .offer-row.is-visible {\n      transform: scale(1); }\n  #prices {\n    margin-bottom: -70px; }\n    #prices .price-header {\n      padding: 45px 0 110px; }\n    #prices .price-cat-container {\n      margin-bottom: 40px; }\n      #prices .price-cat-container h3 {\n        margin: 10px 0; }\n    #prices .price-row-header {\n      text-transform: uppercase;\n      font-size: 1.4em;\n      opacity: 0;\n      transition: transform ease-out 0.225s;\n      transform: translateX(-100px); }\n      #prices .price-row-header.is-visible {\n        opacity: 1;\n        transform: translateX(0); }\n    #prices .price-row {\n      font-size: 1em; }\n  #popup-overlay .popup-container #popup-dialog img {\n    height: 100%; }\n  footer {\n    text-align: center; }\n  body {\n    max-width: 1920px;\n    margin: 0 auto;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n  h1.inverse {\n    padding: 30px 20px 30px; }\n  #prices .container {\n    max-width: 1200px; }\n  #gallery .img-container {\n    margin: 20px; }\n  .my-icon-button.popup-nav-btn {\n    width: 68px !important;\n    height: 68px; }\n    .my-icon-button.popup-nav-btn md-icon {\n      width: 60px;\n      height: 60px;\n      font-size: 60px; } }\n\n@media screen and (min-width: 1200px) {\n  header .nav-btns {\n    margin: 0 auto;\n    width: 1090px; }\n  #gallery .gallery-container {\n    max-width: 1200px; }\n  #gallery .img-container {\n    width: 200px;\n    height: 140px; } }\n", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	angular.module("webApp", ["ui.router", "ngMaterial"]).config(["$mdThemingProvider", "$stateProvider", "$urlRouterProvider", "$locationProvider", function ($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
	    "ngInject";

	    var primary = $mdThemingProvider.extendPalette("grey", {
	        "600": "#333333"
	    });

	    $mdThemingProvider.definePalette("primary", primary);

	    $mdThemingProvider.theme("default").primaryPalette("primary", {
	        'default': '900'
	    });

	    $locationProvider.html5Mode({
	        enabled: true,
	        requireBase: false
	    });

	    $urlRouterProvider.otherwise('/');
	    $stateProvider.state({
	        name: "home",
	        url: "/",
	        controller: "MainController",
	        controllerAs: "vm",
	        templateUrl: "templates/application/main.html"
	    }).state({
	        name: "gallery",
	        url: "/gallery",
	        controller: "GalleryController",
	        controllerAs: "vm",
	        templateUrl: "templates/application/gallery.html",
	        resolve: {
	            images: ["Factory", function images(Factory) {
	                return Factory.GetImages();
	            }]
	        }
	    });
	}]).run(["$rootScope", "$state", "$location", "$anchorScroll", "$timeout", function ($rootScope, $state, $location, $anchorScroll, $timeout) {
	    "ngInject";

	    var PAGE_LOADER_DURATION_MS = 200,
	        PAGE_LOADER_DURATION_S = 0.2;

	    var TM = TweenMax,
	        menuOpened = false,
	        pageLoaderVisible = false,
	        menuContainer = angular.element(document.querySelector('#menuContent'));

	    $anchorScroll.yOffset = 64;

	    $rootScope.toggleMenu = toggleMenu;
	    $rootScope.go = go;
	    $rootScope.scrollTo = scrollTo;

	    function go(state, params) {
	        if (state === $state.current.name) {
	            TM.to(menuContainer, 0.3, { x: "0%" });
	            menuOpened = false;
	            if (state === "home") {
	                scrollTo(params.anchor);
	            }
	            return;
	        } else {
	            TM.killAll();
	            TM.to(menuContainer, 0.3, { x: "0%" });
	            menuOpened = false;
	            showPageLoader();
	            $timeout(function () {
	                if (params && params.anchor) {
	                    $rootScope.anchor = params.anchor;
	                }
	                $state.go(state, params);
	            }, PAGE_LOADER_DURATION_MS);
	        }
	    }

	    function toggleMenu() {
	        if (!menuOpened) {
	            TM.to(menuContainer, 0.3, { x: "100%" });
	        } else {
	            TM.to(menuContainer, 0.3, { x: "0%" });
	        }
	        menuOpened = !menuOpened;
	    }

	    function scrollTo(id) {
	        var el = document.getElementById(id),
	            page = document.getElementById("page-content");
	        TM.to(page, 0.6, { scrollTo: { y: el, offsetY: 0 } });
	    }

	    function showPageLoader() {
	        pageLoaderVisible = true;
	        document.getElementById("page-loader").classList.add("is-visible");
	    }

	    function hidePageLoader() {
	        pageLoaderVisible = false;
	        document.getElementById("page-loader").classList.remove("is-visible");
	    }

	    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
	        if ($rootScope.anchor) {
	            $location.hash($rootScope.anchor);
	            $timeout(function () {
	                $anchorScroll();
	                $rootScope.anchor = undefined;
	            }, 180);
	        }
	        if (pageLoaderVisible) {
	            $timeout(function () {
	                hidePageLoader();
	            }, PAGE_LOADER_DURATION_MS);
	        }
	    });
	}]);

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	angular.module("webApp").factory("Factory", ["$http", "$q", function ($http, $q) {
	    "ngInject";

	    var service = {
	        GetData: getData,
	        GetImages: getImages,
	        sendMail: sendMail
	    };
	    return service;

	    function getData() {
	        var defered = $q.defer();
	        $http.get("/api/main-page").then(function (data) {
	            console.log(data);
	            defered.resolve(data.data);
	        }, function (err) {
	            console.log("error");
	            console.log(err);
	            defered.resolve(err);
	        });
	        return defered.promise;
	    }

	    function getImages() {
	        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

	        var defered = $q.defer();
	        $http.get("/api/galerry-files/" + size + "/" + page).then(function (data) {
	            console.log(data);
	            defered.resolve(data.data);
	        }, function (err) {
	            console.log("error");
	            console.log(err);
	            defered.resolve(err);
	        });
	        return defered.promise;
	    }

	    function sendMail(data) {
	        var defered = $q.defer();
	        $http.post('/contact-mail', data).then(function (success) {
	            defered.resolve(success.data);
	        }, function (error) {
	            console.log("error", error);
	            defered.resolve(error);
	        });
	        return defered.promise;
	    }
	}]);

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	angular.module("webApp").controller("DialogController", ["$mdDialog", "$scope", "item", function DialogController($mdDialog, $scope, item) {
	    "ngInject";

	    $scope.item = item;

	    $scope.hide = hide;
	    $scope.cancel = cancel;

	    function hide() {
	        $mdDialog.hide();
	    }

	    function cancel() {
	        $mdDialog.cancel();
	    }
	}]);

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	angular.module("webApp").controller("MainController", ["$rootScope", "$scope", "$timeout", "$state", "$mdPanel", "$mdDialog", "Factory", function ($rootScope, $scope, $timeout, $state, $mdPanel, $mdDialog, Factory) {
	    "ngInject";

	    var TM = TweenMax,
	        SMController = void 0,
	        HEADER_SCENE = void 0,
	        i = void 0,
	        len = void 0,
	        slider = void 0;

	    // animation vars
	    var banner = void 0,
	        header = void 0,
	        headerLogo = void 0,
	        animatedBackgrounds = void 0,
	        offerRows = void 0,
	        priceRowsHeaders = void 0,
	        priceRows = void 0;

	    $scope.contact = {};
	    $scope.sendingMail = false;
	    $scope.priceCategories = undefined;
	    $scope.testimontials = undefined;

	    $scope.showReference = showReference;
	    $scope.hidePopup = hidePopup;

	    $scope.togglePriceDetails = togglePriceDetails;
	    $scope.sendMail = sendMail;

	    activate();

	    function activate() {
	        Factory.GetData().then(handleData);

	        $timeout(function () {
	            banner = document.getElementById("banerContent");
	            var bannerTween = TM.to(banner, 1, { y: "60%", ease: Power0.easeNone });
	            SMController = new ScrollMagic.Controller({ container: "#page-content" });
	            HEADER_SCENE = new ScrollMagic.Scene({
	                duration: "100%"
	            }).setTween(bannerTween).addTo(SMController);
	        });
	    }

	    function showReference(item, ev) {
	        console.log(item);
	        $mdDialog.show({
	            controller: 'TetsimontialPanelController',
	            controllerAs: 'vm',
	            templateUrl: 'templates/application/testimontial.tmpl.html',
	            parent: angular.element(document.body),
	            targetEvent: ev,
	            clickOutsideToClose: true,
	            locals: {
	                data: item
	            }
	        }).then(function () {}, function () {});
	    }

	    function hidePopup() {
	        var tween = new TimelineMax();
	        tween.fromTo(document.getElementById("popup-dialog"), 0.5, {
	            scale: 1,
	            opacity: 1
	        }, {
	            scale: 0,
	            opacity: 0,
	            ease: Back.easeIn
	        }).fromTo(document.getElementById("popup-overlay"), 0.3, {
	            autoAlpha: 1,
	            zIndex: 70
	        }, {
	            autoAlpha: 1,
	            zIndex: 70
	        }, "-= 0.3").set(document.getElementById("popup-overlay"), { zIndex: -1 });
	    }

	    function togglePriceDetails(ind, event) {
	        var target = document.getElementById("price-details-" + ind);
	        var height = target.offsetHeight;

	        if (height === 0) {
	            TM.set(target, { height: "auto" });
	            TM.from(target, 0.6, { height: 0, ease: Power1.easeInOut });
	            event.srcElement.classList.add("open");
	        } else {
	            TM.to(target, 0.5, { height: 0 });
	            event.srcElement.classList.remove("open");
	        }
	    }

	    function sendMail(valid) {
	        if (valid) {
	            $scope.sendingMail = true;
	            Factory.sendMail($scope.contact).then(function (res) {
	                console.log(res);
	                $scope.sendingMail = false;
	                if (res.message) {
	                    $mdDialog.show($mdDialog.alert().clickOutsideToClose(true).title('Wiadomość wysłana').textContent('Twoja wiadomość została wysłana. Odezwiemy się do Ciebie wkrótce.').ariaLabel('Info').ok('ok'));
	                    $scope.contact = {};
	                    $scope.contactForm.$setPristine();
	                    $scope.contactForm.$setUntouched();
	                } else {
	                    $mdDialog.show($mdDialog.alert().clickOutsideToClose(true).title('Wystąpił błąd').textContent('Wystapił nieoczekiwany bląd podczas próby wysłania wiadomości.').ariaLabel('Info').ok('ok'));
	                }
	            });
	        }
	    }

	    function handleData(response) {
	        $scope.priceCategories = response.categories;
	        $scope.testimontials = response.testimontials;

	        $scope.testimontialSelect = function (next) {
	            if (next) {
	                $scope.testimontialCarousel.next();
	            } else {
	                $scope.testimontialCarousel.prev();
	            }
	        };

	        $timeout(function () {
	            slider = {
	                actual: 0,
	                before: null,
	                timeout: undefined,
	                slides: document.getElementsByClassName("slide"),
	                length: document.getElementsByClassName("slide").length,
	                start: function start() {
	                    var _this = this;

	                    this.slides[0].classList.add("is-actual");
	                    this.actual = 1;
	                    this.before = 0;
	                    this.timeout = $timeout(function () {
	                        _this.next();
	                    }, 3500);
	                },
	                next: function next() {
	                    var _this2 = this;

	                    console.log(this.slides, _typeof(this.slides));
	                    this.slides[this.before].classList.remove("is-actual");
	                    this.slides[this.actual].classList.add("is-actual");
	                    this.before = this.actual;
	                    this.actual = this.actual + 1 < this.length && this.actual + 1 || 0;
	                    this.timeout = $timeout(function () {
	                        _this2.next();
	                    }, 3500);
	                }
	            };

	            slider.start();

	            $scope.testimontialCarousel = {
	                actual: 0,
	                array: document.getElementById("testimontials").getElementsByClassName("ref-slide"),
	                length: document.getElementById("testimontials").getElementsByClassName("ref-slide").length,
	                build: function build() {
	                    TM.set(this.array[0], { alpha: 1, scale: 1, zIndex: 4 });
	                },
	                next: function next() {
	                    var tween = new TimelineMax(),
	                        n = this.actual + 1 < this.length && this.actual + 1 || 0;
	                    tween.fromTo(this.array[this.actual], 0.6, {
	                        xPercent: 0,
	                        alpha: 1,
	                        scale: 1,
	                        zIndex: 2
	                    }, {
	                        alpha: 0,
	                        scale: 0,
	                        xPercent: -100,
	                        zIndex: 2,
	                        ease: Power2.easeOut
	                    }, 0).fromTo(this.array[n], 0.6, { alpha: 0, scale: 0, xPercent: 100, zIndex: 4 }, {
	                        alpha: 1,
	                        scale: 1,
	                        xPercent: 0,
	                        zIndex: 4,
	                        ease: Back.easeOut,
	                        onStart: function () {
	                            this.actual = n;
	                        }.bind(this)
	                    }, 0);
	                },
	                prev: function prev() {
	                    var tween = new TimelineMax(),
	                        n = this.actual > 0 ? this.actual - 1 : this.length - 1;

	                    tween.fromTo(this.array[this.actual], 0.6, {
	                        xPercent: 0,
	                        alpha: 1,
	                        scale: 1,
	                        zIndex: 2
	                    }, {
	                        alpha: 0,
	                        scale: 0,
	                        xPercent: 100,
	                        zIndex: 2,
	                        ease: Power2.easeOut
	                    }, 0).fromTo(this.array[n], 0.6, { alpha: 0, scale: 0, xPercent: -100, zIndex: 4 }, {
	                        alpha: 1,
	                        scale: 1,
	                        xPercent: 0,
	                        zIndex: 4,
	                        ease: Back.easeOut,
	                        onStart: function () {
	                            this.actual = n;
	                        }.bind(this)
	                    }, 0);
	                }
	            };

	            $scope.testimontialCarousel.build();

	            if (!window.IS_MOBILE) {
	                animatedBackgrounds = document.getElementsByClassName('animated-bg');
	                len = animatedBackgrounds.length;
	                for (i = 0; i < len; i++) {
	                    var tween = TM.fromTo(animatedBackgrounds[i], 1, {
	                        yPercent: 0
	                    }, {
	                        yPercent: -50,
	                        ease: Power0.easeNone
	                    });
	                    new ScrollMagic.Scene({
	                        triggerElement: animatedBackgrounds[i],
	                        triggerHook: 'onEnter',
	                        duration: "200%"
	                    }).setTween(tween).addTo(SMController);
	                }

	                offerRows = document.getElementsByClassName('offer-row');
	                len = offerRows.length;
	                for (i = 0; i < len; i++) {
	                    new ScrollMagic.Scene({
	                        triggerElement: offerRows[i],
	                        triggerHook: 'onCenter',
	                        offset: -150,
	                        reverse: false
	                    }).setClassToggle(offerRows[i], "is-visible").addTo(SMController);
	                }

	                priceRowsHeaders = document.getElementsByClassName('price-row-header');
	                len = priceRowsHeaders.length;
	                for (i = 0; i < len; i++) {
	                    // let tween = TM.from(priceRowsHeaders[i], 0.3, { x: -100, alpha: 0 });
	                    new ScrollMagic.Scene({
	                        triggerElement: priceRowsHeaders[i],
	                        triggerHook: 'onCenter',
	                        offset: -150,
	                        reverse: false
	                    }).setClassToggle(priceRowsHeaders[i], "is-visible").addTo(SMController);
	                }
	            }
	        });
	    }

	    $scope.$on("$destroy", function () {
	        SMController.destroy(true);
	        SMController = null;
	        $timeout.cancel(slider.timeout);
	    });
	}]).controller("TetsimontialPanelController", ["$mdPanel", "data", function ($mdPanel, data) {
	    "ngInject";

	    var vm = this;
	    vm.img = data.img;
	}]);

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	angular.module("webApp").controller("GalleryController", ["$timeout", "$mdDialog", "Factory", "images", function ($timeout, $mdDialog, Factory, images) {
	    "ngInject";

	    console.log(images);

	    var vm = this,
	        imageBoxes = void 0;

	    vm.gallery = images.data;
	    vm.pagination = images.pages;
	    vm.selectedPage = 0;

	    vm.show = show;
	    vm.getPage = getPage;
	    vm.prevPage = prevPage;
	    vm.nextPage = nextPage;

	    activate();

	    function activate() {
	        $timeout(function () {
	            imageBoxes = document.getElementsByClassName("img-container");
	            TweenMax.staggerTo(imageBoxes, 0.2, { scale: 1 }, 0.02);
	        });
	    }

	    function getPage(page) {
	        if (vm.selectedPage === page) {
	            return;
	        }
	        imageBoxes = document.getElementsByClassName("img-container");
	        TweenMax.staggerTo(imageBoxes, 0.2, {
	            scale: 0
	        }, 0.02, function () {
	            Factory.GetImages(page).then(function (res) {
	                console.log(res);
	                vm.gallery = res.data;
	                vm.selectedPage = page;
	                $timeout(function () {
	                    imageBoxes = document.getElementsByClassName("img-container");
	                    TweenMax.staggerFromTo(imageBoxes, 0.2, { scale: 0 }, { scale: 1 }, 0.02);
	                });
	            });
	        });
	    }

	    function prevPage() {
	        if (vm.selectedPage === 0) {
	            return;
	        } else {
	            var page = vm.selectedPage - 1;
	            getPage(page);
	        }
	    }

	    function nextPage() {
	        if (vm.selectedPage === vm.pagination[vm.pagination.length - 1]) {
	            return;
	        } else {
	            var page = vm.selectedPage + 1;
	            getPage(page);
	        }
	    }

	    function show(ev, position) {
	        $mdDialog.show({
	            controller: "GalleryDialogController",
	            controllerAs: "vm",
	            templateUrl: "/templates/application/gallery.tmpl.html",
	            parent: angular.element(document.body),
	            targetEvent: ev,
	            clickOutsideToClose: true,
	            locals: {
	                images: vm.gallery,
	                position: position
	            }
	        }).then(function () {}, function () {});
	    }
	}]).controller("GalleryDialogController", ["$timeout", "$mdDialog", "images", "position", function ($timeout, $mdDialog, images, position) {
	    "ngInject";

	    var vm = this,
	        TM = TweenMax,
	        len = images.length - 1;
	    var IMAGE_EL = void 0;

	    var index = position,
	        image = void 0;

	    vm.images = images;

	    vm.close = close;
	    vm.next = next;
	    vm.prev = prev;

	    activate();

	    function activate() {
	        $timeout(function () {
	            IMAGE_EL = document.getElementById("gallery-img");
	            image = new Image();
	            image.onload = function () {
	                var hI = image.height,
	                    wI = image.width;

	                var _calculateDimensions = calculateDimensions(wI, hI),
	                    w = _calculateDimensions.w,
	                    h = _calculateDimensions.h;

	                IMAGE_EL.src = "/media/galery/" + images[index].source;

	                TM.to(IMAGE_EL, 0.225, { width: w });
	                TM.to(IMAGE_EL, 0.225, {
	                    height: h,
	                    delay: 0.05,
	                    onComplete: function onComplete() {
	                        TM.to(IMAGE_EL, 0.225, { autoAlpha: 1 });
	                    }
	                });
	            };
	            image.src = "/media/galery/" + images[index].source;
	        });
	    }

	    function close() {
	        $mdDialog.cancel();
	    }

	    function changeSrc() {
	        image.src = "/media/galery/" + images[index].source;
	    }

	    function getNext(diff) {
	        index += diff;
	        if (index < 0) {
	            index = len;
	        } else if (index > len) {
	            index = 0;
	        }
	    }

	    function next() {
	        getNext(1);
	        TM.to(IMAGE_EL, 0.225, {
	            autoAlpha: 0,
	            onComplete: function onComplete() {
	                changeSrc();
	            }
	        });
	    }

	    function prev() {
	        getNext(-1);
	        TM.to(IMAGE_EL, 0.225, {
	            autoAlpha: 0,
	            onComplete: function onComplete() {
	                changeSrc();
	            }
	        });
	    }

	    function calculateDimensions(w, h) {
	        var wW = Math.floor(window.innerWidth * 0.9),
	            hW = Math.floor(window.innerHeight * 0.9),
	            fixW = void 0,
	            fixH = void 0;

	        if (w > wW) {
	            fixW = wW / w;
	        }
	        if (h > hW) {
	            fixH = hW / h;
	        }

	        if (!fixW && !fixH) {
	            return { w: w, h: h };
	        }
	        if (fixW && fixH) {
	            if (fixW < fixH) {
	                return { w: wW, h: h * fixW };
	            } else {
	                return { w: w * fixH, h: hW };
	            }
	        }
	        if (fixW) {
	            return { w: wW, h: h * fixW };
	        } else {
	            return { w: w * fixH, h: hW };
	        }
	    }
	}]);

/***/ }
/******/ ]);
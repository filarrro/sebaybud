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

	__webpack_require__(1);

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./admin.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./admin.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "div,\nheader,\nfooter,\nmain,\nsection {\n  box-sizing: border-box; }\n\nbody {\n  box-sizing: border-box;\n  height: 100%;\n  padding: 60px 0 0;\n  margin: 0; }\n\n::-webkit-scrollbar {\n  width: 12px;\n  height: 12px; }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.6); }\n\n::-webkit-scrollbar-thumb:active {\n  background: rgba(0, 0, 0, 0.7); }\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.3); }\n\nform {\n  margin: 0; }\n\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 40; }\n  .header-link {\n    height: 100%;\n    line-height: 64px;\n    min-width: 150px; }\n    .header-link.active {\n      background-color: rgba(0, 0, 0, 0.3) !important; }\n\n.viewWrapper {\n  position: relative;\n  background-color: #EEE;\n  padding: 25px;\n  height: 100%;\n  overflow-y: scroll; }\n\n.page-loader {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #F5F5F5;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.225s ease-in-out;\n  z-index: 30; }\n  .page-loader.is-visible {\n    opacity: 1;\n    pointer-events: auto; }\n\n.form-bg {\n  background-color: #EEEEEE;\n  margin: 10px 10px 30px;\n  padding: 5px 10px; }\n\n.price-row {\n  margin: 5px 10px 5px 50px;\n  padding: 3px 3px 3px 15px;\n  background-color: #EEE;\n  border-radius: 4px;\n  margin-left: 70px; }\n\n.price-list-item-container .price-row:last-of-type {\n  margin-bottom: 20px; }\n\n.price-row .md-icon-button {\n  margin: 0; }\n\n.category-row {\n  margin: 5px 10px;\n  padding: 5px 10px 5px 15px;\n  background-color: #F5F5F5; }\n\nmd-input-container.no-errors .md-errors-spacer {\n  display: none; }\n\n.md-icon-button md-icon {\n  color: inherit; }\n\n.warn-text {\n  color: #F44336; }\n\n.primary-text {\n  color: #2196f3; }\n\n.bold {\n  font-weight: bold !important; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.testimontial-card {\n  position: relative;\n  margin: 10px;\n  width: 200px; }\n  .testimontial-card img {\n    max-height: 100%;\n    max-width: 100%; }\n  .testimontial-card .author {\n    padding: 0 10px; }\n  .testimontial-card .caption {\n    padding: 0 10px 5px;\n    font-size: 12px;\n    color: rgba(0, 0, 0, 0.55); }\n\n.gallery-item {\n  position: relative;\n  margin: 10px;\n  height: 150px; }\n  .gallery-item img {\n    height: 100%; }\n  .gallery-item .md-button.md-fab {\n    position: absolute;\n    right: 5px;\n    bottom: 5px; }\n\n.mgb-30 {\n  margin-bottom: 30px; }\n\n.md-table {\n  background-color: #f5f5f5; }\n  .md-table .md-table-header {\n    position: relative;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 0.9em; }\n    .md-table .md-table-header .md-table-row {\n      padding-left: 115px; }\n      .md-table .md-table-header .md-table-row::hover {\n        background-color: initial; }\n      .md-table .md-table-header .md-table-row .md-fab {\n        margin: 0;\n        position: absolute;\n        bottom: 18px;\n        left: 25px; }\n  .md-table .md-table-row {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n    padding: 10px 30px 10px 15px;\n    min-height: 45px;\n    transition: background-color 0.225s ease-in-out; }\n    .md-table .md-table-row:hover {\n      background-color: #EEE; }\n  .md-table .md-table-cell.actions .md-icon-button {\n    margin: 0; }\n", ""]);

	// exports


/***/ },
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
/* 5 */
/***/ function(module, exports) {

	'use strict';

	angular.module('app', ['ngAria', 'ngAnimate', 'ui.router', 'ngResource', 'ngMaterial']).config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$mdThemingProvider", function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
	    $mdThemingProvider.theme('default').primaryPalette('blue');

	    $urlRouterProvider.otherwise('/category');

	    $stateProvider.state({
	        name: "category",
	        url: "/category",
	        controller: "CategoryController",
	        templateUrl: "modules/admin/price/category.html",
	        resolve: {
	            list: ["PriceCategoryFactory", function list(PriceCategoryFactory) {
	                return PriceCategoryFactory.query().$promise;
	            }]
	        }
	    }).state({
	        name: "categoryedit",
	        url: "/category/edit/:id",
	        controller: "CatPriceController",
	        controllerAs: "vm",
	        templateUrl: "modules/admin/price/price.html",
	        resolve: {
	            category: ["PriceCategoryFactory", "$stateParams", function category(PriceCategoryFactory, $stateParams) {
	                return PriceCategoryFactory.get({ id: $stateParams.id }).$promise;
	            }]
	        }
	    }).state({
	        name: "testimontials",
	        url: "/testimontials",
	        controller: 'TestimontialsController',
	        templateUrl: 'modules/admin/testimontials/testimontials.html',
	        resolve: {
	            list: ["TestimontialFactory", function list(TestimontialFactory) {
	                return TestimontialFactory.query().$promise;
	            }]
	        }
	    }).state({
	        name: "gallery",
	        url: "/gallery",
	        controller: 'GalleryController',
	        templateUrl: 'modules/admin/gallery/gallery.html',
	        resolve: {
	            list: ["FileFactory", function list(FileFactory) {
	                return FileFactory.query().$promise;
	            }]
	        }
	    });
	}]).run(["$rootScope", "$state", "$timeout", function ($rootScope, $state, $timeout) {
	    var PAGELOADER = document.getElementById("page-loader");
	    var forceState = false;

	    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
	        if (!forceState && $state.current.name !== toState.name) {
	            event.preventDefault();
	            forceState = true;
	            PAGELOADER.classList.add("is-visible");
	            $timeout(function () {
	                $state.go(toState, toParams);
	            }, 225);
	        } else {
	            forceState = false;
	        }
	    });

	    $rootScope.$on('$stateChangeSuccess', function () {
	        PAGELOADER.classList.remove("is-visible");
	    });

	    $rootScope.$on('$stateChangeError', function () {
	        PAGELOADER.classList.remove("is-visible");
	    });
	}]).controller("TestimontialsController", ["$scope", "$state", "$mdDialog", "TestimontialFactory", "list", function ($scope, $state, $mdDialog, TestimontialFactory, list) {
	    $scope.list = list;
	    $scope.testimontial = {};

	    $scope.add = function (ev) {
	        $mdDialog.show({
	            controller: 'TestimontialDialogController',
	            templateUrl: 'modules/admin/testimontials/testimontials.tmpl.html',
	            targetEvent: ev,
	            clickOutsideToClose: true
	        }).then(function (data) {
	            var item = new TestimontialFactory(data);
	            item.$save(function (res) {
	                console.log(res);
	                $state.reload();
	            });
	        });
	    };
	    $scope.delete = function (item, index) {
	        console.log(item);
	        item.$delete(function (response) {
	            console.log(response);
	            $scope.list.splice(index, 1);
	        });
	    };
	}]).controller("TestimontialDialogController", ["$scope", "$mdDialog", function ($scope, $mdDialog) {
	    $scope.data = {};
	    $scope.cropperOptions = {
	        aspectRatio: "a" / 2,
	        height: 600,
	        fillColor: "#FFF",
	        imgType: "image/jpeg"
	    };
	    $scope.save = function () {
	        var img = $scope.sendToServer();
	        $scope.data.image = img.image;
	        $mdDialog.hide($scope.data);
	    };
	    $scope.cancel = function () {
	        $mdDialog.cancel();
	    };
	}]).controller("GalleryController", ["$scope", "$state", "$mdDialog", "FileFactory", "list", function ($scope, $state, $mdDialog, FileFactory, list) {
	    $scope.list = list;

	    $scope.add = function (ev) {
	        $mdDialog.show({
	            controller: 'GalleryDialogController',
	            templateUrl: 'modules/admin/gallery/gallery.tmpl.html',
	            targetEvent: ev,
	            clickOutsideToClose: true
	        }).then(function (data) {
	            var item = new FileFactory({
	                image: data.image,
	                thumb: data.thumb,
	                desc: '',
	                type: 1
	            });
	            item.$save(function (res) {
	                console.log(res);
	                $state.reload();
	            });
	        });
	    };
	    $scope.delete = function (item, index) {
	        console.log(item);
	        item.$delete(function (response) {
	            console.log(response);
	            $scope.list.splice(index, 1);
	        });
	    };
	}]).controller("GalleryDialogController", ["$scope", "$mdDialog", function ($scope, $mdDialog) {
	    $scope.data = {};
	    $scope.cropperOptions = {
	        aspectRatio: "a" / 2,
	        height: 800,
	        fillColor: "#FFF",
	        imgType: "image/jpeg"
	    };
	    $scope.save = function () {
	        var img = $scope.sendToServer();
	        $scope.data.image = img.image;
	        $scope.data.thumb = img.thumb;
	        $mdDialog.hide($scope.data);
	    };
	    $scope.cancel = function () {
	        $mdDialog.cancel();
	    };
	}]).controller("CategoryController", ["$scope", "$state", "$mdDialog", "PriceFactory", "PriceCategoryFactory", "list", function ($scope, $state, $mdDialog, PriceFactory, PriceCategoryFactory, list) {
	    DialogController.$inject = ["$mdDialog", "item"];
	    $scope.categories = list;
	    console.log("categories", $scope.categories);

	    $scope.add = add;
	    $scope.edit = edit;

	    function add(ev) {
	        $mdDialog.show({
	            controller: DialogController,
	            controllerAs: "vm",
	            templateUrl: 'modules/admin/price/category.tmpl.html',
	            parent: angular.element(document.body),
	            targetEvent: ev,
	            clickOutsideToClose: true,
	            locals: {
	                item: undefined
	            }
	        }).then(function (data) {
	            console.log(data);
	            $state.reload();
	        });
	    }

	    function edit(item, ev) {
	        console.log(item);
	        $state.go('categoryedit', { id: item.id });
	    }

	    $scope.save = function (valid) {
	        if (valid) {
	            var price = new PriceFactory($scope.newPrice);
	            price.$save(function (response) {
	                console.log(response);
	                $state.reload();
	            });
	        }
	    };
	    $scope.delete = function (price) {
	        console.log(price);
	        for (var i = 0; i < $scope.priceList.length; i++) {
	            if ($scope.priceList[i].id === price.id) {
	                $scope.priceList[i].$delete(function (response) {
	                    console.log(response);
	                    $state.reload();
	                });
	                break;
	            }
	        }
	    };

	    $scope.saveCategory = function (valid) {
	        if (valid) {
	            var priceCat = new PriceCategoryFactory({
	                name: $scope.categoryName
	            });
	            priceCat.$save(function (response) {
	                $state.reload();
	            });
	        }
	    };

	    $scope.deleteCategory = function (category, ev) {
	        var confirm = $mdDialog.confirm().title('Usunąć element?').textContent('Nie będzie możliwości jego późniejszego przywrócenia.').ariaLabel('Usuwanie').targetEvent(ev).ok('Tak').cancel('Nie');
	        $mdDialog.show(confirm).then(function (result) {
	            for (var i = 0; i < $scope.categories.length; i++) {
	                if ($scope.categories[i].id === category.id) {
	                    $scope.categories[i].$delete(function (response) {
	                        console.log(response);
	                        $state.reload();
	                    });
	                    break;
	                }
	            }
	        });
	    };

	    function DialogController($mdDialog, item) {
	        var vm = this;

	        vm.data = {};

	        vm.hide = hide;
	        vm.cancel = cancel;

	        if (item) {
	            vm.data = item;
	        }

	        function hide(valid) {
	            if (valid) {
	                if (item) {
	                    PriceCategoryFactory.update({ id: item.id }, item, function (response) {
	                        console.log(response);
	                        $mdDialog.hide(response);
	                    });
	                } else {
	                    var priceCat = new PriceCategoryFactory(vm.data);
	                    priceCat.$save(function (response) {
	                        console.log(response);
	                        $mdDialog.hide(response);
	                    });
	                }
	            }
	        }

	        function cancel() {
	            $mdDialog.cancel();
	        }
	    }
	}]).factory("PriceFactory", ["$resource", function ($resource) {
	    return $resource('/api/prices/:id', { id: "@id" }, {
	        'update': { method: 'PUT' }
	    });
	}]).factory("PriceCategoryFactory", ["$resource", function ($resource) {
	    return $resource('/api/priceCategory/:id', { id: "@id" }, {
	        'update': { method: 'PUT' }
	    });
	}]).factory("FileFactory", ["$resource", function ($resource) {
	    return $resource('/api/files/:id', { id: "@id" });
	}]).factory("TestimontialFactory", ["$resource", function ($resource) {
	    return $resource('/api/testimontials/:id', { id: "@id" });
	}]).factory("Factory", ["$http", "$q", function ($http, $q) {
	    var service = {};
	    service.GetData = function () {
	        var defered = $q.defer();
	        $http.get("/api/main-page").then(function (data) {
	            defered.resolve(data);
	        }).catch(function (err) {
	            console.log("error", err);
	            defered.resolve(err);
	        });
	        return defered.promise;
	    };
	    return service;
	}]);

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	angular.module('app').directive("imageCropper", ["$timeout", function ($timeout) {
	    return {
	        restrict: 'E',
	        templateUrl: 'modules/cropper/cropper.html',
	        link: function link($scope) {
	            $timeout(function () {
	                var Cropper = window.Cropper;
	                var console = window.console || {
	                    log: function log() {}
	                };
	                var container = document.querySelector('.img-container');
	                var image = container.getElementsByTagName('img').item(0);
	                var actions = document.getElementById('actions');
	                var inputImage = document.getElementById('inputImage');

	                function set(width, height) {
	                    $scope.$apply(function () {
	                        $scope.croppWidth = Math.round(width);
	                        $scope.croppHeight = Math.round(height);
	                    });
	                }

	                var options = {
	                    aspectRatio: $scope.cropperOptions.aspectRatio,
	                    autoCropArea: 1,
	                    zoomOnWheel: false,
	                    preview: '.img-preview',
	                    crop: function crop(e) {
	                        set(e.width, e.height);
	                    }
	                };
	                var cropper = new Cropper(image, options);

	                $scope.imgbase = {};
	                $scope.sendToServer = function () {
	                    var dimensions = {};
	                    if ($scope.cropperOptions.width) dimensions.width = $scope.cropperOptions.width;
	                    if ($scope.cropperOptions.height) dimensions.height = $scope.cropperOptions.height;
	                    if ($scope.cropperOptions.fillColor) dimensions.fillColor = $scope.cropperOptions.fillColor;

	                    $scope.imgbase.image = cropper.getCroppedCanvas(dimensions).toDataURL($scope.cropperOptions.imgType);
	                    $scope.imgbase.thumb = cropper.getCroppedCanvas({ width: 250, fillColor: '#FFF' }).toDataURL($scope.cropperOptions.imgType);

	                    cropper = null;
	                    return $scope.imgbase;
	                };

	                $scope.destroyInstance = function () {
	                    cropper = null;
	                };

	                $scope.scaleToFit = function () {
	                    cropper('setCanvasData', cropper('getCropBoxData'));
	                };

	                // Methods
	                actions.querySelector('.docs-buttons').onclick = function (event) {
	                    var e = event || window.event;
	                    var target = e.target || e.srcElement;
	                    var result;
	                    var input;
	                    var data;

	                    if (!cropper) {
	                        return;
	                    }

	                    while (target !== this) {
	                        if (target.getAttribute('data-method')) {
	                            break;
	                        }
	                        target = target.parentNode;
	                    }

	                    if (target === this || target.disabled || target.className.indexOf('disabled') > -1) {
	                        return;
	                    }

	                    data = {
	                        method: target.getAttribute('data-method'),
	                        target: target.getAttribute('data-target'),
	                        option: target.getAttribute('data-option'),
	                        secondOption: target.getAttribute('data-second-option')
	                    };

	                    if (data.method) {
	                        if (typeof data.target !== 'undefined') {
	                            input = document.querySelector(data.target);

	                            if (!target.hasAttribute('data-option') && data.target && input) {
	                                try {
	                                    data.option = JSON.parse(input.value);
	                                } catch (e) {
	                                    console.log(e.message);
	                                }
	                            }
	                        }

	                        if (data.method === 'getCroppedCanvas') {
	                            data.option = JSON.parse(data.option);
	                        }

	                        result = cropper[data.method](data.option, data.secondOption);

	                        switch (data.method) {
	                            case 'scaleX':
	                            case 'scaleY':
	                                target.setAttribute('data-option', -data.option);
	                                break;

	                            case 'getCroppedCanvas':
	                                if (result) {
	                                    $scope.sendToServer();
	                                }
	                                break;

	                            case 'destroy':
	                                cropper = null;
	                                break;
	                        }

	                        if ((typeof result === "undefined" ? "undefined" : _typeof(result)) === 'object' && result !== cropper && input) {
	                            try {
	                                input.value = JSON.stringify(result);
	                            } catch (e) {
	                                console.log(e.message);
	                            }
	                        }
	                    }
	                };

	                // Import image
	                var inputImage = document.getElementById('inputImage');
	                var URL = window.URL || window.webkitURL;
	                var blobURL;

	                if (URL) {
	                    inputImage.onchange = function () {
	                        var files = this.files;
	                        var file;

	                        if (cropper && files && files.length) {
	                            file = files[0];

	                            if (/^image\/\w+/.test(file.type)) {
	                                blobURL = URL.createObjectURL(file);
	                                cropper.reset().replace(blobURL);
	                                inputImage.value = null;
	                            } else {
	                                window.alert('Please choose an image file.');
	                            }
	                        }
	                    };
	                } else {
	                    inputImage.disabled = true;
	                    inputImage.parentNode.className += ' disabled';
	                }

	                $scope.uploadFile = function () {
	                    inputImage.click();
	                };
	            });
	        }
	    };
	}]);

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	angular.module('app').controller("CatPriceController", ["$mdDialog", "$state", "PriceFactory", "PriceCategoryFactory", "category", function ($mdDialog, $state, PriceFactory, PriceCategoryFactory, category) {
	    DialogController.$inject = ["$mdDialog", "item"];
	    var vm = this;
	    console.log(category);
	    vm.category = category.data;
	    vm.list = category.priceList;

	    vm.editCategory = editCategory;
	    vm.deleteCategory = deleteCategory;
	    vm.add = add;
	    vm.edit = edit;
	    vm.deleteItem = deleteItem;

	    function editCategory(ev) {
	        $mdDialog.show({
	            controller: DialogController,
	            controllerAs: "vm",
	            templateUrl: 'modules/admin/price/category.tmpl.html',
	            parent: angular.element(document.body),
	            targetEvent: ev,
	            clickOutsideToClose: true,
	            locals: {
	                item: angular.copy(vm.category)
	            }
	        }).then(function (item) {
	            console.log(item);
	            PriceCategoryFactory.update({ id: item.id }, item, function (response) {
	                console.log(response);
	                $state.reload();
	            });
	        });
	    }

	    function deleteCategory(ev) {
	        var confirm = $mdDialog.confirm().title('Usunąć element?').textContent('Nie będzie możliwości jego późniejszego przywrócenia.').ariaLabel('Usuwanie').targetEvent(ev).ok('Tak').cancel('Nie');
	        $mdDialog.show(confirm).then(function (result) {
	            PriceCategoryFactory.delete({ id: vm.category.id }, null, function (response) {
	                console.log(response);
	                if (response && response.message) {
	                    $state.go('category');
	                }
	            });
	        });
	    }

	    function add(ev) {
	        $mdDialog.show({
	            controller: DialogController,
	            controllerAs: "vm",
	            templateUrl: 'modules/admin/price/price.tmpl.html',
	            parent: angular.element(document.body),
	            targetEvent: ev,
	            clickOutsideToClose: true,
	            locals: {
	                item: undefined
	            }
	        }).then(function (data) {
	            console.log(data);
	            data.categoryId = vm.category.id;
	            var item = new PriceFactory(data);
	            item.$save(function (response) {
	                console.log(response);
	                $state.reload();
	            });
	        });
	    }

	    function edit(item, ev) {
	        console.log(item);
	        $mdDialog.show({
	            controller: DialogController,
	            controllerAs: "vm",
	            templateUrl: 'modules/admin/price/price.tmpl.html',
	            parent: angular.element(document.body),
	            targetEvent: ev,
	            clickOutsideToClose: true,
	            locals: {
	                item: item
	            }
	        }).then(function (data) {
	            console.log(data);
	            PriceFactory.update({ id: data.id }, data, function (response) {
	                console.log(response);
	                $state.reload();
	            });
	        });
	    }

	    function deleteItem(item, ev) {
	        var confirm = $mdDialog.confirm().title('Usunąć element?').textContent('Nie będzie możliwości jego późniejszego przywrócenia.').ariaLabel('Usuwanie').targetEvent(ev).ok('Tak').cancel('Nie');
	        $mdDialog.show(confirm).then(function (result) {
	            PriceFactory.delete({ id: item.id }, null, function (response) {
	                console.log(response);
	                $state.reload();
	            });
	        });
	    }

	    function DialogController($mdDialog, item) {
	        var vm = this;

	        vm.data = {};

	        vm.hide = hide;
	        vm.cancel = cancel;

	        if (item) {
	            vm.data = item;
	        }

	        function hide(valid) {
	            if (valid) {
	                $mdDialog.hide(vm.data);
	            }
	        }

	        function cancel() {
	            $mdDialog.cancel();
	        }
	    }
	}]);

/***/ }
/******/ ]);
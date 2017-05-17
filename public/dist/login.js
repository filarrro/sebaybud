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
/***/ function(module, exports) {

	"use strict";

	angular.module("webApp", ["ngMaterial"]).config(["$mdThemingProvider", function ($mdThemingProvider) {
	    "ngInject";

	    $mdThemingProvider.theme("default").primaryPalette("blue").dark();
	}]).run(["$rootScope", "$timeout", "$mdToast", "LoginService", function ($rootScope, $timeout, $mdToast, LoginService) {
	    "ngInject";

	    $rootScope.data = {};

	    $rootScope.login = function (valid) {
	        if (valid) {
	            document.getElementById('loginForm').action = "/login";
	            document.getElementById("loginForm").submit();
	        } else {
	            $mdToast.show($mdToast.simple().textContent('Wypełnij formularz').position("top right").hideDelay(3500));
	        }
	    };
	}]).factory("LoginService", ["$http", "$q", "$httpParamSerializer", function ($http, $q, $httpParamSerializer) {
	    "ngInject";

	    var service = {
	        Login: Login
	    };
	    return service;

	    function Login(data) {
	        var defered = $q.defer();
	        $http.post("/login", data).then(function (data) {
	            console.log(data);
	            defered.resolve(data.data);
	        }, function (err) {
	            console.log("error", err);
	            defered.resolve(err);
	        });
	        return defered.promise;
	    }
	}]);

/***/ }
/******/ ]);
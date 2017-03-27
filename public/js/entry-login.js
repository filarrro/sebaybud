"use strict";

import 'normalize-css';
import 'material-css';

import 'angular';
import 'angular-aria';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-material';

angular.module("webApp", ["ngMaterial"])
    .config(function($mdThemingProvider) {
        "ngInject";

        $mdThemingProvider.theme("default").primaryPalette("indigo");

    })
    .run(function($rootScope, $timeout, LoginService) {
        "ngInject";

        $rootScope.data = {};

        $rootScope.login = function(valid) {
            if (valid) {
                document.getElementById('loginForm').action = "/login";
                document.getElementById("loginForm").submit();
                // LoginService.Login($rootScope.data).then(function(res) {
                //     console.log(res);
                //     $rootScope.data = {};
                // });
            } else {
                alert("wypełnij formularz");
            }
        }

    })
    .factory("LoginService", function($http, $q, $httpParamSerializer) {
        "ngInject";

        var service = {
            Login: Login
        };
        return service;

        function Login(data) {
            var defered = $q.defer();
            $http.post("/login", data).then(function(data) {
                console.log(data);
                defered.resolve(data.data);
            }, function(err) {
                console.log("error", err);
                defered.resolve(err);
            });
            return defered.promise;
        }
    });
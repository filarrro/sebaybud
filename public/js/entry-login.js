"use strict";

angular.module("webApp", ["ngMaterial"])
    .config(function($mdThemingProvider) {
        "ngInject";

        $mdThemingProvider.theme("default").primaryPalette("blue").dark();

    })
    .run(function($rootScope, $timeout, $mdToast, LoginService) {
        "ngInject";

        $rootScope.data = {};

        $rootScope.login = function(valid) {
            if (valid) {
                document.getElementById('loginForm').action = "/login";
                document.getElementById("loginForm").submit();
            } else {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Wypełnij formularz')
                    .position("top right")
                    .hideDelay(3500)
                );
            }
        };
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
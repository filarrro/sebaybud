"use strict";

angular
    .module("webApp")
    .factory("Factory", function($http, $q) {
        "ngInject";

        var service = {
            GetData: getData
        };
        return service;

        function getData() {
            var defered = $q.defer();
            $http.get("/api/main-page")
            .then (function(data) {
                    console.log(data);
                    defered.resolve(data.data);
                }, function(err) {
                    console.log("error");
                    console.log(err);
                    defered.resolve(err);
                });
            return defered.promise;
        }
    });
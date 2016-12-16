"use strict";

angular
    .module("webApp")
    .factory("Factory", function($http, $q) {
        var service = {
            GetData: getData
        };
        return service;

        function getData() {
            var defered = $q.defer();
            $http.get("/api/main-page")
                .success(function(data) {
                    console.log(data);
                    defered.resolve(data);
                })
                .error(function(err) {
                    console.log("error");
                    console.log(err);
                    defered.resolve(err);
                });
            return defered.promise;
        };
    });
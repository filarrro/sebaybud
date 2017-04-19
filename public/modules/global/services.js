"use strict";

angular
    .module("webApp")
    .factory("Factory", function($http, $q) {
        "ngInject";

        var service = {
            GetData: getData,
            GetImages: getImages,
            sendMail: sendMail
        };
        return service;

        function getData() {
            var defered = $q.defer();
            $http.get("/api/main-page")
                .then(function(data) {
                    console.log(data);
                    defered.resolve(data.data);
                }, function(err) {
                    console.log("error");
                    console.log(err);
                    defered.resolve(err);
                });
            return defered.promise;
        }

        function getImages(page = 0, size = 20) {
            var defered = $q.defer();
            $http.get(`/api/galerry-files/${size}/${page}`)
                .then(function(data) {
                    console.log(data);
                    defered.resolve(data.data);
                }, function(err) {
                    console.log("error");
                    console.log(err);
                    defered.resolve(err);
                });
            return defered.promise;
        }

        function sendMail(data) {
            var defered = $q.defer();
            $http.post('/contact-mail', data).then(function(success) {
                defered.resolve(success.data);
            }, function(error) {
                console.log("error", error);
                defered.resolve(error);
            });
            return defered.promise;
        }
    });
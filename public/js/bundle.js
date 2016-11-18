angular.module('app', ['ngAria', 'ngAnimate', 'ngMessages', 'ngRoute', 'ngResource', 'ngMaterial'])
        .config(["$routeProvider", "$mdThemingProvider", function ($routeProvider, $mdThemingProvider) {
                $mdThemingProvider.theme('default');

                $routeProvider
                        .when('/price', {
                            controller: 'PriceController',
                            templateUrl: 'templates/price.html',
                            resolve: {
                                list: function (Factory) {
                                    return Factory.GetData();
                                },
                                priceList: function (PriceFactory) {
                                    return PriceFactory.query().$promise
                                },
                                priceCategories: function (PriceCategoryFactory) {
                                    return PriceCategoryFactory.query().$promise
                                }
                            }
                        })
                        .when('/testimontials', {
                            controller: 'TestimontialsController',
                            templateUrl: 'templates/testimontials.html',
                            resolve: {
                                list: function (TestimontialFactory) {
                                    return TestimontialFactory.query().$promise
                                }
                            }
                        })
                        .when('/gallery', {
                            controller: 'GalleryController',
                            templateUrl: 'templates/gallery.html',
                            resolve: {
                                list: function (FileFactory) {
                                    return FileFactory.query().$promise
                                }
                            }
                        })
                        .otherwise({
                            redirectTo: '/price'
                        });
            }])
        .run([function () {
                console.log("run");
            }])
        .controller("TestimontialsController", ["$scope", "$route", "$mdDialog", "TestimontialFactory", "list", function ($scope, $route, $mdDialog, TestimontialFactory, list) {
                $scope.list = list;
                $scope.testimontial = {};

                $scope.add = function () {
                    $mdDialog.show({
                        controller: 'TestimontialDialogController',
                        templateUrl: 'templates/testimontials.tmpl.html',
                        clickOutsideToClose: true
                    }).then(function (data) {
                        var item = new TestimontialFactory(data);
                        item.$save(function (res) {
                            console.log(res);
                            $route.reload();
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
            }])
        .controller("TestimontialDialogController", ["$scope", "$mdDialog", function ($scope, $mdDialog) {
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
            }])
        .controller("GalleryController", ["$scope", "$route", "$mdDialog", "FileFactory", "list", function ($scope, $route, $mdDialog, FileFactory, list) {
                $scope.list = list;

                $scope.add = function () {
                    $mdDialog.show({
                        controller: 'GalleryDialogController',
                        templateUrl: 'templates/gallery.tmpl.html',
                        clickOutsideToClose: true
                    }).then(function (data) {
                        var item = new FileFactory({
                            image: data.image,
                            desc: '',
                            type: 1
                        });
                        item.$save(function (res) {
                            console.log(res);
                            $route.reload();
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
            }])
        .controller("GalleryDialogController", ["$scope", "$mdDialog", function ($scope, $mdDialog) {
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
            }])
        .controller("PriceController", ["$scope", "$route", "PriceFactory", "PriceCategoryFactory", "list", "priceList", "priceCategories", function ($scope, $route, PriceFactory, PriceCategoryFactory, list, priceList, priceCategories) {
                $scope.list = list.categories;
                $scope.priceList = priceList;
                $scope.categories = priceCategories;

                $scope.save = function (valid) {
                    if (valid) {
                        var price = new PriceFactory($scope.newPrice);
                        price.$save(function (response) {
                            console.log(response);
                            $route.reload();
                        });
                    }
                };
                $scope.delete = function (price) {
                    console.log(price);
                    for (var i = 0; i < $scope.priceList.length; i++) {
                        if ($scope.priceList[i].id === price.id) {
                            $scope.priceList[i].$delete(function (response) {
                                console.log(response);
                                $route.reload();
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
                            $route.reload();
                        });
                    }
                };
                $scope.deleteCategory = function (category) {
                    for (var i = 0; i < $scope.categories.length; i++) {
                        if ($scope.categories[i].id === category.id) {
                            $scope.categories[i].$delete(function (response) {
                                console.log(response);
                                $route.reload();
                            });
                            break;
                        }
                    }
                };
            }])
        .factory("PriceFactory", ["$resource", function ($resource) {
                return $resource('/api/prices/:id', {id: "@id"});
            }])
        .factory("PriceCategoryFactory", ["$resource", function ($resource) {
                return $resource('/api/priceCategory/:id', {id: "@id"});
            }])
        .factory("FileFactory", ["$resource", function ($resource) {
                return $resource('/api/files/:id', {id: "@id"});
            }])
        .factory("TestimontialFactory", ["$resource", function ($resource) {
                return $resource('/api/testimontials/:id', {id: "@id"});
            }])
        .factory("Factory", ["$http", "$q", function ($http, $q) {
                var service = {};
                service.GetData = function () {
                    var defered = $q.defer();
                    $http.get("/api/main-page")
                            .success(function (data) {
                                console.log(data);
                                defered.resolve(data);
                            })
                            .error(function (err) {
                                console.log("error");
                                console.log(err);
                                defered.resolve(err);
                            });
                    return defered.promise;
                };
                return service;
            }])
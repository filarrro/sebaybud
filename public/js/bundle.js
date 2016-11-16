angular.module('app', ['ngAria', 'ngAnimate', 'ngMessages', 'ngRoute', 'ngResource', 'ngMaterial'])
        .config(["$routeProvider", "$mdThemingProvider", function ($routeProvider, $mdThemingProvider) {
                $mdThemingProvider.theme('default');

                $routeProvider
                        .when('/price', {
                            controller: 'PriceController',
                            templateUrl: 'templates/price.html',
                            resolve: {
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
                        controller: 'cropperController',
                        templateUrl: 'modules/cropper/cropper.tmpl.html',
                        clickOutsideToClose: true
                    }).then(function (image) {
                        $scope.testimontial.image = image;
                    });
                };
                $scope.save = function () {
                    var item = new TestimontialFactory($scope.testimontial);
                    item.$save(function (res) {
                        console.log(res);
                        $route.reload();
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
        .controller("GalleryController", ["$scope", "$route", "$mdDialog", "FileFactory", "list", function ($scope, $route, $mdDialog, FileFactory, list) {
                $scope.list = list;

                $scope.add = function () {
                    $mdDialog.show({
                        controller: 'cropperController',
                        templateUrl: 'modules/cropper/cropper.tmpl.html',
                        clickOutsideToClose: true
                    }).then(function (image) {
                        var item = new FileFactory({
                            image: image,
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
        .controller("PriceController", ["$scope", "$route", "PriceFactory", "PriceCategoryFactory", "priceList", "priceCategories", function ($scope, $route, PriceFactory, PriceCategoryFactory, priceList, priceCategories) {
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
                $scope.delete = function (price, index) {
                    console.log(price);
                    price.$delete(function (response) {
                        console.log(response);
                        $scope.priceList.splice(index, 1);
                    });
                };

                $scope.saveCategory = function (valid) {
                    if (valid) {
                        var priceCat = new PriceCategoryFactory({
                            name: $scope.categoryName
                        });
                        priceCat.$save(function (response) {
                            $scope.categories.push(response);
                            $scope.categoryName = '';
                            $scope.categoryForm.$setPristine();
                            $scope.categoryForm.$setUntouched();
                        });
                    }
                };
                $scope.deleteCategory = function (category, index) {
                    category.$delete(function (response) {
                        console.log(response);
                        $route.reload();
                    });
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
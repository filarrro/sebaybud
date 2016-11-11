angular.module('app', ['ngAria', 'ngAnimate', 'ngMessages', 'ngRoute', 'ngResource', 'ngMaterial'])
        .config(["$routeProvider", "$mdThemingProvider", function ($routeProvider, $mdThemingProvider) {
                $mdThemingProvider.theme('default');

                $routeProvider
                        .when('/', {
                            controller: 'MainController',
                            templateUrl: 'templates/main.html'
                        })
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
                            }
                        })
                        .when('/gallery', {
                            controller: 'GalleryController',
                            templateUrl: 'templates/gallery.html',
                            resolve: {
                            }
                        })
                        .otherwise({
                            redirectTo: '/'
                        });
            }])
        .run([function () {
                console.log("run");
            }])
        .controller("MainController", ["$scope", function ($scope) {
                $scope.txt = "lalalalal";
            }])
        .controller("TestimontialsController", ["$scope", "$route", function ($scope, $route) {
                $scope.list = [];
            }])
        .controller("GalleryController", ["$scope", "$route", "$mdDialog", "FileFactory", function ($scope, $route, $mdDialog, FileFactory) {
                $scope.add = function () {
                    $mdDialog.show({
                        controller: 'cropperController',
                        templateUrl: 'modules/cropper/cropper.tmpl.html',
                        clickOutsideToClose: true
                    }).then(function (image) {
                        console.log(image);
                        var item = new FileFactory({
                            image: image,
                            desc: 'desc',
                            type: 1
                        });
                        item.$save(function(res) {
                            console.log(res);
                        })
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
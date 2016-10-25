angular.module('app', ['ngAria', 'ngAnimate', 'ngMessages', 'ngRoute', 'ngResource', 'ngMaterial'])
        .config(["$routeProvider", "$mdThemingProvider", function ($routeProvider, $mdThemingProvider) {
                $mdThemingProvider.theme('default').dark();
                
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
                                    return PriceFactory.query()
                                }
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
        .controller("PriceController", ["$scope", "PriceFactory", function ($scope, PriceFactory) {
                PriceFactory.query(function (data) {
                    console.log(data);
                    $scope.priceList = data;
                });

                $scope.save = function () {
                    var price = new PriceFactory({
                        name: $scope.newPriceName,
                        price: $scope.newPricePrice
                    });

                    price.$save(function (response) {
                        console.log(response);
                        $scope.priceList.push(response);
                    });
                };

                $scope.delete = function (price, index) {
                    console.log(price);
                    price.$delete(function (response) {
                        console.log(response);
                        $scope.priceList.splice(index, 1);
                    });
                };
            }])
        .factory("PriceFactory", ["$resource", function ($resource) {
                return $resource('/api/prices/:id',{id: "@id"});
            }]);
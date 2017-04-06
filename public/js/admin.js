angular.module('app', ['ngAria', 'ngAnimate', 'ngMessages', 'ui.router', 'ngResource', 'ngMaterial'])
    .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$mdThemingProvider", function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
        $mdThemingProvider.theme('default').primaryPalette('blue');

        $urlRouterProvider.otherwise('/price');

        $stateProvider
            .state({
                name: "category",
                url: "/category",
                controller: "PriceController",
                templateUrl: 'templates/admin/category.html',
                resolve: {
                    list: function(Factory) {
                        return Factory.GetData();
                    },
                    priceList: function(PriceFactory) {
                        return PriceFactory.query().$promise;
                    },
                    priceCategories: function(PriceCategoryFactory) {
                        return PriceCategoryFactory.query().$promise;
                    }
                }
            })
            .state({
                name: "categoryedit",
                url: "/category/edit/:id",
                controller: "CatPriceController",
                controllerAs: "vm",
                templateUrl: "modules/admin/price/price.html",
                resolve: {
                    category: function(PriceCategoryFactory, $stateParams) {
                        return PriceCategoryFactory.get({ id: $stateParams.id }).$promise;
                    }
                }
            })
            .state({
                name: "price",
                url: "/price",
                controller: "PriceController",
                templateUrl: 'templates/price.html',
                resolve: {
                    list: function(Factory) {
                        return Factory.GetData();
                    },
                    priceList: function(PriceFactory) {
                        return PriceFactory.query().$promise;
                    },
                    priceCategories: function(PriceCategoryFactory) {
                        return PriceCategoryFactory.query().$promise;
                    }
                }
            })
            .state({
                name: "testimontials",
                url: "/testimontials",
                controller: 'TestimontialsController',
                templateUrl: 'templates/testimontials.html',
                resolve: {
                    list: function(TestimontialFactory) {
                        return TestimontialFactory.query().$promise;
                    }
                }
            })
            .state({
                name: "gallery",
                url: "/gallery",
                controller: 'GalleryController',
                templateUrl: 'templates/gallery.html',
                resolve: {
                    list: function(FileFactory) {
                        return FileFactory.query().$promise;
                    }
                }
            });

    }])
    .run([function() {
        console.log("run");
    }])
    .controller("TestimontialsController", ["$scope", "$state", "$mdDialog", "TestimontialFactory", "list", function($scope, $state, $mdDialog, TestimontialFactory, list) {
        $scope.list = list;
        $scope.testimontial = {};

        $scope.add = function() {
            $mdDialog.show({
                controller: 'TestimontialDialogController',
                templateUrl: 'templates/testimontials.tmpl.html',
                clickOutsideToClose: true
            }).then(function(data) {
                var item = new TestimontialFactory(data);
                item.$save(function(res) {
                    console.log(res);
                    $state.reload();
                });
            });
        };
        $scope.delete = function(item, index) {
            console.log(item);
            item.$delete(function(response) {
                console.log(response);
                $scope.list.splice(index, 1);
            });
        };
    }])
    .controller("TestimontialDialogController", ["$scope", "$mdDialog", function($scope, $mdDialog) {
        $scope.data = {};
        $scope.cropperOptions = {
            aspectRatio: "a" / 2,
            height: 600,
            fillColor: "#FFF",
            imgType: "image/jpeg"
        };
        $scope.save = function() {
            var img = $scope.sendToServer();
            $scope.data.image = img.image;
            $mdDialog.hide($scope.data);
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }])
    .controller("GalleryController", ["$scope", "$state", "$mdDialog", "FileFactory", "list", function($scope, $state, $mdDialog, FileFactory, list) {
        $scope.list = list;

        $scope.add = function() {
            $mdDialog.show({
                controller: 'GalleryDialogController',
                templateUrl: 'templates/gallery.tmpl.html',
                clickOutsideToClose: true
            }).then(function(data) {
                var item = new FileFactory({
                    image: data.image,
                    thumb: data.thumb,
                    desc: '',
                    type: 1
                });
                item.$save(function(res) {
                    console.log(res);
                    $state.reload();
                });
            });
        };
        $scope.delete = function(item, index) {
            console.log(item);
            item.$delete(function(response) {
                console.log(response);
                $scope.list.splice(index, 1);
            });
        };
    }])
    .controller("GalleryDialogController", ["$scope", "$mdDialog", function($scope, $mdDialog) {
        $scope.data = {};
        $scope.cropperOptions = {
            aspectRatio: "a" / 2,
            height: 800,
            fillColor: "#FFF",
            imgType: "image/jpeg"
        };
        $scope.save = function() {
            var img = $scope.sendToServer();
            $scope.data.image = img.image;
            $scope.data.thumb = img.thumb;
            $mdDialog.hide($scope.data);
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }])
    .controller("PriceController", ["$scope", "$state", "$mdDialog", "PriceFactory", "PriceCategoryFactory", "list", "priceList", "priceCategories", function($scope, $state, $mdDialog, PriceFactory, PriceCategoryFactory, list, priceList, priceCategories) {
        $scope.list = list.categories;
        $scope.priceList = priceList;
        $scope.categories = priceCategories;
        console.log("categories", $scope.categories);

        $scope.add = add;
        $scope.edit = edit;

        function add(ev) {
            $mdDialog.show({
                controller: DialogController,
                controllerAs: "vm",
                templateUrl: 'templates/admin/category.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    item: undefined
                }
            }).then(function(data) {
                console.log(data);
                $state.reload();
            });
        }

        function edit(item, ev) {
            console.log(item);
            $state.go('categoryedit', { id: item.id });
            // $mdDialog.show({
            //     controller: DialogController,
            //     controllerAs: "vm",
            //     templateUrl: 'templates/admin/category.tmpl.html',
            //     parent: angular.element(document.body),
            //     targetEvent: ev,
            //     clickOutsideToClose: true,
            //     locals: {
            //         item: item
            //     }
            // }).then(function(data) {
            //     console.log(data);
            //     $state.reload();
            // });
        }

        $scope.save = function(valid) {
            if (valid) {
                var price = new PriceFactory($scope.newPrice);
                price.$save(function(response) {
                    console.log(response);
                    $state.reload();
                });
            }
        };
        $scope.delete = function(price) {
            console.log(price);
            for (var i = 0; i < $scope.priceList.length; i++) {
                if ($scope.priceList[i].id === price.id) {
                    $scope.priceList[i].$delete(function(response) {
                        console.log(response);
                        $state.reload();
                    });
                    break;
                }
            }
        };

        $scope.saveCategory = function(valid) {
            if (valid) {
                var priceCat = new PriceCategoryFactory({
                    name: $scope.categoryName
                });
                priceCat.$save(function(response) {
                    $state.reload();
                });
            }
        };

        $scope.deleteCategory = function(category, ev) {
            var confirm = $mdDialog.confirm()
                .title('Usunąć element?')
                .textContent('Nie będzie możliwości jego późniejszego przywrócenia.')
                .ariaLabel('Usuwanie')
                .targetEvent(ev)
                .ok('Tak')
                .cancel('Nie');
            $mdDialog.show(confirm).then(function(result) {
                for (var i = 0; i < $scope.categories.length; i++) {
                    if ($scope.categories[i].id === category.id) {
                        $scope.categories[i].$delete(function(response) {
                            console.log(response);
                            $state.reload();
                        });
                        break;
                    }
                }
            });
        };

        function DialogController($mdDialog, item) {
            var vm = this;

            vm.data = {};

            vm.hide = hide;
            vm.cancel = cancel;

            if (item) {
                vm.data = item;
            }

            function hide(valid) {
                if (valid) {
                    if (item) {
                        PriceCategoryFactory.update({ id: item.id }, item, function(response) {
                            console.log(response);
                            $mdDialog.hide(response);
                        });
                    } else {
                        var priceCat = new PriceCategoryFactory(vm.data);
                        priceCat.$save(function(response) {
                            console.log(response);
                            $mdDialog.hide(response);
                        });
                    }
                }
            }

            function cancel() {
                $mdDialog.cancel();
            }
        }
    }])
    .factory("PriceFactory", ["$resource", function($resource) {
        return $resource('/api/prices/:id', { id: "@id" }, {
            'update': { method: 'PUT' }
        });
    }])
    .factory("PriceCategoryFactory", ["$resource", function($resource) {
        return $resource('/api/priceCategory/:id', { id: "@id" }, {
            'update': { method: 'PUT' }
        });
    }])
    .factory("FileFactory", ["$resource", function($resource) {
        return $resource('/api/files/:id', { id: "@id" });
    }])
    .factory("TestimontialFactory", ["$resource", function($resource) {
        return $resource('/api/testimontials/:id', { id: "@id" });
    }])
    .factory("Factory", ["$http", "$q", function($http, $q) {
        var service = {};
        service.GetData = function() {
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
        return service;
    }])
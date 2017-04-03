"use strict";

angular.module('app')
    .controller("CatPriceController", ["$mdDialog", "$state", "PriceFactory", "category", function($mdDialog, $state, PriceFactory, category) {
        var vm = this;
        console.log(category);
        vm.category = category.data;
        vm.list = category.priceList;

        vm.editCategory = editCategory;
        vm.add = add;
        vm.edit = edit;
        vm.deleteItem = deleteItem;

        function editCategory(ev) {
            // TODO
        }

        function add(ev) {
            $mdDialog.show({
                controller: DialogController,
                controllerAs: "vm",
                templateUrl: 'modules/admin/price/price.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    item: undefined
                }
            }).then(function(data) {
                console.log(data);
                data.categoryId = vm.category.id;
                var item = new PriceFactory(data);
                item.$save(function(response) {
                    console.log(response);
                    $state.reload();
                });
            });
        }

        function edit(item, ev) {
            console.log(item);
            $mdDialog.show({
                controller: DialogController,
                controllerAs: "vm",
                templateUrl: 'modules/admin/price/price.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    item: item
                }
            }).then(function(data) {
                console.log(data);
                PriceFactory.update({ id: data.id }, data, function(response) {
                    console.log(response);
                    $state.reload();
                });
            });
        }

        function deleteItem(item, ev) {
            var confirm = $mdDialog.confirm()
                .title('Usunąć element?')
                .textContent('Nie będzie możliwości jego późniejszego przywrócenia.')
                .ariaLabel('Usuwanie')
                .targetEvent(ev)
                .ok('Tak')
                .cancel('Nie');
            $mdDialog.show(confirm).then(function(result) {
                PriceFactory.delete({ id: item.id }, null, function(response) {
                    console.log(response);
                    $state.reload();
                });
            });
        }

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
                    $mdDialog.hide(vm.data);
                    // if (item) {
                    //     PriceCategoryFactory.update({ id: item.id }, item, function(response) {
                    //         console.log(response);
                    //         $mdDialog.hide(response);
                    //     });
                    // } else {
                    //     var priceCat = new PriceCategoryFactory(vm.data);
                    //     priceCat.$save(function(response) {
                    //         console.log(response);
                    //         $mdDialog.hide(response);
                    //     });
                    // }
                }
            }

            function cancel() {
                $mdDialog.cancel();
            }
        }

    }]);
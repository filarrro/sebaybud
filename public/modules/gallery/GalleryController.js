"use strict";

import { TweenMax } from 'gsap';

angular
    .module("webApp")
    .controller("GalleryController", function($timeout, $mdDialog, Factory, images) {
        "ngInject";

        console.log(images);

        let vm = this;

        vm.gallery = images.data;
        vm.pagination = images.pages;
        vm.selectedPage = 0;

        vm.show = show;
        vm.getPage = getPage;
        
        function getPage(page) {
            Factory.GetImages(page).then(function(res) {
                console.log(res);
                vm.gallery = res.data;
                vm.selectedPage = page;
            });
        }

        function show(ev) {
            $mdDialog.show({
                controller: "GalleryDialogController",
                controllerAs: "vm",
                templateUrl: "/templates/application/gallery.tmpl.html",
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                locals: {
                    images: vm.gallery
                }
            }).then(() => {}, () => {});
        }

    })
    .controller("GalleryDialogController", function($timeout, $mdDialog, images) {
        "ngInject";

        const vm = this,
              TM = TweenMax,
              len = images.length - 1;

        let index = 0;

        vm.images = images;
        vm.actual = images[index].source;

        vm.close = close;
        vm.next = next;
        vm.prev = prev;

        function close() {
            $mdDialog.cancel();
        }

        function getNext(diff) {
            index += diff;
            if (index < 0) {
                index = len;
            } else if (index > len) {
                index = 0;
            }
        }

        function next() {
            getNext(1);
            vm.future = vm.images[index].source;
            $timeout(() => {
                TM.to(document.getElementById("actual"), 0.5, {alpha: 0});
                TM.to(document.getElementById("future"), 0.5, {alpha: 1});
                $timeout(() => {
                    vm.actual = vm.images[index].source;
                    TM.set(document.getElementById("actual"), {alpha: 1});
                    TM.set(document.getElementById("future"), {alpha: 0});
                }, 510);
            });
        }

        function prev() {
            getNext(-1);
            vm.future = vm.images[index].source;
            $timeout(() => {
                TM.to(document.getElementById("actual"), 0.5, {alpha: 0});
                TM.to(document.getElementById("future"), 0.5, {alpha: 1});
                $timeout(() => {
                    vm.actual = vm.images[index].source;
                    TM.set(document.getElementById("actual"), {alpha: 1});
                    TM.set(document.getElementById("future"), {alpha: 0});
                }, 510);
            });
        }

    });
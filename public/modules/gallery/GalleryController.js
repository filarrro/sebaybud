"use strict";

import { TweenMax } from 'gsap';

angular
    .module("webApp")
    .controller("GalleryController", function($timeout, $mdDialog, Factory, images) {
        "ngInject";

        console.log(images);

        let vm = this,
            imageBoxes;

        vm.gallery = images.data;
        vm.pagination = images.pages;
        vm.selectedPage = 0;

        vm.show = show;
        vm.getPage = getPage;
        vm.prevPage = prevPage;
        vm.nextPage = nextPage;

        function getPage(page) {
            if (vm.selectedPage === page) {
                return;
            }
            imageBoxes = document.getElementsByClassName("img-container");
            TweenMax.staggerTo(imageBoxes, 0.2, {
                scale: 0
            }, 0.02, function() {
                Factory.GetImages(page).then(function(res) {
                    console.log(res);
                    vm.gallery = res.data;
                    vm.selectedPage = page;
                    $timeout(() => {
                        imageBoxes = document.getElementsByClassName("img-container");
                        TweenMax.staggerFromTo(imageBoxes, 0.2, { scale: 0 }, { scale: 1 }, 0.02);
                    });
                });
            });
        }

        function prevPage() {
            if (vm.selectedPage === 0) {
                return;
            } else {
                let page = vm.selectedPage - 1;
                getPage(page);
            }
        }

        function nextPage() {
            if (vm.selectedPage === vm.pagination[vm.pagination.length - 1]) {
                return;
            } else {
                let page = vm.selectedPage + 1;
                getPage(page);
            }
        }

        function show(ev, position) {
            $mdDialog.show({
                controller: "GalleryDialogController",
                controllerAs: "vm",
                templateUrl: "/templates/application/gallery.tmpl.html",
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    images: vm.gallery,
                    position
                }
            }).then(() => {}, () => {});
        }

    })
    .controller("GalleryDialogController", function($timeout, $mdDialog, images, position) {
        "ngInject";

        const vm = this,
            TM = TweenMax,
            len = images.length - 1;

        let index = position;

        vm.images = images;
        vm.actualStyle = getStyle(images[index].source);

        vm.close = close;
        vm.next = next;
        vm.prev = prev;

        function close() {
            $mdDialog.cancel();
        }

        function getStyle(src) {
            return {
                background: `url(/media/galery/${src}) no-repeat center`,
                backgroundSize: "cover"
            };
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
            vm.futureStyle = getStyle(images[index].source);
            $timeout(() => {
                TM.to(document.getElementById("actual"), 0.5, { alpha: 0 });
                TM.to(document.getElementById("future"), 0.5, { alpha: 1 });
                $timeout(() => {
                    vm.actualStyle = getStyle(images[index].source);
                    TM.set(document.getElementById("actual"), { alpha: 1 });
                    TM.set(document.getElementById("future"), { alpha: 0 });
                }, 510);
            });
        }

        function prev() {
            getNext(-1);
            vm.futureStyle = getStyle(images[index].source);
            $timeout(() => {
                TM.to(document.getElementById("actual"), 0.5, { alpha: 0 });
                TM.to(document.getElementById("future"), 0.5, { alpha: 1 });
                $timeout(() => {
                    vm.actualStyle = getStyle(images[index].source);
                    TM.set(document.getElementById("actual"), { alpha: 1 });
                    TM.set(document.getElementById("future"), { alpha: 0 });
                }, 510);
            });
        }

    });
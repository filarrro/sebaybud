"use strict";

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

        activate();

        function activate() {
            $timeout(() => {
                imageBoxes = document.getElementsByClassName("img-container");
                TweenMax.staggerTo(imageBoxes, 0.2, { scale: 1 }, 0.02);
            });
        }

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
        let IMAGE_EL;


        let index = position,
            image;

        vm.images = images;

        vm.close = close;
        vm.next = next;
        vm.prev = prev;

        activate();

        function activate() {
            $timeout(() => {
                IMAGE_EL = document.getElementById("gallery-img");
                image = new Image();
                image.onload = function() {
                    let hI = image.height,
                        wI = image.width;

                    let { w, h } = calculateDimensions(wI, hI);

                    IMAGE_EL.src = `/media/galery/${images[index].source}`;

                    TM.to(IMAGE_EL, 0.225, { width: w });
                    TM.to(IMAGE_EL, 0.225, {
                        height: h,
                        delay: 0.05,
                        onComplete: function() {
                            TM.to(IMAGE_EL, 0.225, { autoAlpha: 1 });
                        }
                    });
                };
                image.src = `/media/galery/${images[index].source}`;
            });
        }

        function close() {
            $mdDialog.cancel();
        }

        function changeSrc() {
            image.src = `/media/galery/${images[index].source}`;
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
            TM.to(IMAGE_EL, 0.225, {
                autoAlpha: 0,
                onComplete: function() {
                    changeSrc();
                }
            });
        }

        function prev() {
            getNext(-1);
            TM.to(IMAGE_EL, 0.225, {
                autoAlpha: 0,
                onComplete: function() {
                    changeSrc();
                }
            });
        }

        function calculateDimensions(w, h) {
            let wW = Math.floor(window.innerWidth * 0.9),
                hW = Math.floor(window.innerHeight * 0.9),
                fixW, fixH;

            if (w > wW) {
                fixW = wW / w;
            }
            if (h > hW) {
                fixH = hW / h;
            }

            if (!fixW && !fixH) { return { w, h }; }
            if (fixW && fixH) {
                if (fixW < fixH) {
                    return { w: wW, h: h * fixW };
                } else {
                    return { w: w * fixH, h: hW };
                }
            }
            if (fixW) {
                return { w: wW, h: h * fixW };
            } else {
                return { w: w * fixH, h: hW };
            }
        }

    });
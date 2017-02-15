"use strict";

import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic';

angular
    .module("webApp")
    .controller("MainController", function($rootScope, $scope, $timeout, Factory) {
        "ngInject";

        let TM = TweenMax,
            SMController = new ScrollMagic.Controller({container: "#page-content"}),
            i,
            len;

        let body = angular.element(document.querySelector('body')),
            innerMenu = angular.element(document.querySelector('#menuInner')),
            menuButtons = document.getElementsByClassName('menuInnerButton');

        // animation vars
        let bannerParallaxTween, litery, animatedBackgrounds, offerRows, priceRowsHeaders, priceRows;

        $scope.priceCategories = undefined;
        $scope.testimontials = undefined;

        $scope.showReference = showReference;
        $scope.hidePopup = hidePopup;

        $scope.togglePriceDetails = togglePriceDetails;


        Factory.GetData().then(handleData);

        function showReference(item) {
            console.log(item);
            $scope.modalData = item;
            $timeout(function() {
                let tween = new TimelineMax();
                tween
                    .fromTo(document.getElementById("popup-overlay"), 0.5, {
                        autoAlpha: 0,
                        zIndex: 70
                    }, {
                        autoAlpha: 1,
                        zIndex: 70
                    })
                    .fromTo(document.getElementById("popup-dialog"), 1, {
                        scale: 0, opacity: 0
                    }, {
                        scale: 1, opacity: 1, ease: Elastic.easeOut
                    }, "-= 0.2");
            });
        }

        function hidePopup() {
            let tween = new TimelineMax();
            tween
                .fromTo(document.getElementById("popup-dialog"), 0.5, {
                    scale: 1, opacity: 1
                }, {
                    scale: 0, opacity: 0, ease: Back.easeIn
                })
                .fromTo(document.getElementById("popup-overlay"), 0.3, {
                    autoAlpha: 1, zIndex: 70
                }, {
                    autoAlpha: 1, zIndex: 70
                }, "-= 0.3")
                .set(document.getElementById("popup-overlay"), { zIndex: -1 });
        }

        function togglePriceDetails(ind) {
            console.log(ind);
            let target = document.getElementById(`price-details-${ind}`);
            const height = target.offsetHeight;

            if (height === 0) {
                TM.set(target, {height: "auto"});
                TM.from(target, 0.6, {height: 0, ease: Power1.easeInOut});
            } else {
                TM.to(target, 0.5, {height: 0});
            }
        }

        bannerParallaxTween = new TimelineMax();
        litery = document.getElementById('firmName').getElementsByTagName('span');

        bannerParallaxTween.to(document.getElementById('banerContent'), 2, { yPercent: 40, ease: Power0.easeNone }, 0)
            .to(document.getElementById('banerText'), 0.7, { alpha: 0 }, 1.3)
            .staggerTo(litery, 0.8, { rotationZ: "60deg", ease: Back.easeOut }, 0.1, 1)
            .staggerTo(litery, 0.4, { y: 200, ease: Power2.easeIn }, 0.1, 1.2);

        new ScrollMagic.Scene({
            triggerElement: document.getElementById('about'),
            triggerHook: 'onEnter',
            duration: '100%'
        }).setTween(bannerParallaxTween).addTo(SMController);

        animatedBackgrounds = document.getElementsByClassName('animated-bg');
        len = animatedBackgrounds.length;
        for (i = 0; i < len; i++) {
            let tween = TM.fromTo(animatedBackgrounds[i], 1, { yPercent: 0 }, { yPercent: -50, ease: Power0.easeNone });
            new ScrollMagic.Scene({
                triggerElement: animatedBackgrounds[i],
                triggerHook: 'onEnter',
                duration: "200%"
            }).setTween(tween).addTo(SMController);
        }

        function handleData(response) {
            $scope.priceCategories = response.categories;
            $scope.testimontials = response.testimontials;

            $scope.testimontialSelect = function(next) {
                if (next) {
                    $scope.testimontialCarousel.next();
                } else {
                    $scope.testimontialCarousel.prev();
                }
            };

            $timeout(function() {
                let slider = {
                    actual: 0,
                    before: null,
                    slides: document.getElementsByClassName("slide"),
                    length: document.getElementsByClassName("slide").length,
                    start: function() {
                        TM.to(this.slides[0], 2, {
                            alpha: 1,
                            onComplete: function() {
                                this.actual = 1;
                                this.before = 0;
                                this.next();
                            }.bind(this)
                        });
                    },
                    next: function() {
                        let tween = new TimelineMax({ delay: 4 });
                        tween
                            .to(this.slides[this.actual], 1.5, { alpha: 1, ease: Power0.easeNone }, 0)
                            .to(this.slides[this.before], 1.5, {
                                alpha: 0,
                                ease: Power0.easeNone,
                                onComplete: function() {
                                    this.before = this.actual;
                                    this.actual = (this.actual + 1) < this.length && (this.actual + 1) || 0;
                                    this.next();
                                }.bind(this)
                            }, 0);
                    }
                };

                slider.start();

                $scope.testimontialCarousel = {
                    actual: 0,
                    array: document.getElementById("testimontials").getElementsByClassName("ref-slide"),
                    length: document.getElementById("testimontials").getElementsByClassName("ref-slide").length,
                    build: function() {
                        TM.set(this.array[0], { alpha: 1, scale: 1, zIndex: 4 });
                    },
                    next: function() {
                        let tween = new TimelineMax(),
                            n = (this.actual + 1) < this.length && (this.actual + 1) || 0;
                        tween
                            .fromTo(this.array[this.actual], 0.6, {
                                xPercent: 0, alpha: 1, scale: 1, zIndex: 2
                            }, {
                                alpha: 0, scale: 0, xPercent: -100, zIndex: 2, ease: Power2.easeOut
                            }, 0)
                            .fromTo(this.array[n], 0.6, { alpha: 0, scale: 0, xPercent: 100, zIndex: 4 }, {
                                alpha: 1,
                                scale: 1,
                                xPercent: 0,
                                zIndex: 4,
                                ease: Back.easeOut,
                                onStart: function() {
                                    this.actual = n;
                                }.bind(this)
                            }, 0);
                    },
                    prev: function() {
                        let tween = new TimelineMax(),
                            n = this.actual > 0 ? (this.actual - 1) : (this.length - 1);

                        tween
                            .fromTo(this.array[this.actual], 0.6, {
                                xPercent: 0, alpha: 1, scale: 1, zIndex: 2
                            }, {
                                alpha: 0, scale: 0, xPercent: 100, zIndex: 2, ease: Power2.easeOut
                            }, 0)
                            .fromTo(this.array[n], 0.6, { alpha: 0, scale: 0, xPercent: -100, zIndex: 4 }, {
                                alpha: 1,
                                scale: 1,
                                xPercent: 0,
                                zIndex: 4,
                                ease: Back.easeOut,
                                onStart: function() {
                                    this.actual = n;
                                }.bind(this)
                            }, 0);
                    }
                };

                $scope.testimontialCarousel.build();

                offerRows = document.getElementsByClassName('offer-row');
                len = offerRows.length;
                for (i = 0; i < len; i++) {
                    let tween = TM.from(offerRows[i], 0.5, { alpha: 0, scale: 0, ease: Back.easeOut });
                    new ScrollMagic.Scene({
                            triggerElement: offerRows[i],
                            triggerHook: 'onCenter',
                            offset: -150,
                            reverse: false
                        })
                        .setTween(tween)
                        .addTo(SMController);
                }

                priceRowsHeaders = document.getElementsByClassName('price-row-header');
                len = priceRowsHeaders.length;
                for (i = 0; i < len; i++) {
                    let tween = TM.from(priceRowsHeaders[i], 0.3, { x: -100, alpha: 0 });
                    new ScrollMagic.Scene({
                            triggerElement: priceRowsHeaders[i],
                            triggerHook: 'onCenter',
                            offset: -150,
                            reverse: false
                        })
                        .setTween(tween)
                        .addTo(SMController);
                }

            });
        }

        $scope.$on("$destroy", () => {
            SMController.destroy(true);
			SMController = null;
        });
    });
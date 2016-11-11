angular.module("webApp", ["ngMaterial"])
        .config(["$mdThemingProvider", function ($mdThemingProvider) {
                $mdThemingProvider.theme('default').primaryPalette('blue', {
                    // 'default': '900'
                });
            }])
        .run(["$rootScope", "$timeout", "Factory", function ($rootScope, $timeout, Factory) {
                Factory.GetData().then(function (response) {
                    $rootScope.priceCategories = response.categories;
                });
                var TM = TweenMax, SMController = new ScrollMagic.Controller(), i, len;

                var menuContainer = angular.element(document.querySelector('#menuContent')),
                        body = angular.element(document.querySelector('body')),
                        innerMenu = angular.element(document.querySelector('#menuInner')),
                        menuButtons = document.getElementsByClassName('menuInnerButton'),
                        MenuTL = new TimelineMax({paused: true});

                MenuTL
                        .to(menuContainer, .3, {autoAlpha: 1})
                        .fromTo(innerMenu, .4, {width: 0, height: 0}, {width: "60%", height: "85%"}, "-=.1")
                        .staggerFrom(menuButtons, .3, {cycle: {xPercent: [-100, 100]}, alpha: 0, scale: .5}, 0.1, "-=.2");

                $rootScope.toggleMenu = function () {
                    var visible = menuContainer.css("opacity");
                    console.log(visible)
                    if (visible == 0) {
                        MenuTL.play();
                        body.css("overflow", "hidden");
                    } else {
                        MenuTL.reverse();
                        body.css("overflow", "auto");
                    }
                };

                var bannerParallaxTween = new TimelineMax(), litery = document.getElementById('firmName').getElementsByTagName('span');
                bannerParallaxTween.to(document.getElementById('banerContent'), 2, {yPercent: 40, ease: Power0.easeNone}, 0)
                        .to(document.getElementById('banerText'), .7, {alpha: 0}, 1.3)
                        .staggerTo(litery, .8, {rotationZ: "60deg", ease: Back.easeOut}, .1, 1)
                        .staggerTo(litery, .4, {y: 200, ease: Power2.easeIn}, .1, 1.2);
                new ScrollMagic.Scene({
                    triggerElement: document.getElementById('about'),
                    triggerHook: 'onEnter',
                    duration: '100%'
                })
                        .setTween(bannerParallaxTween)
                        .addTo(SMController);

                var offerRows = document.getElementsByClassName('offer-row');
                len = offerRows.length;
                for (i = 0; i < len; i++) {
                    var tween = new TimelineMax();
                    tween
                            .from(offerRows[i].children[0], .5, {x: -200, alpha: 0})
                            .from(offerRows[i].children[1], .5, {x: 200, alpha: 0}, 0);
                    new ScrollMagic.Scene({
                        triggerElement: offerRows[i],
                        triggerHook: 'onCenter',
                        offset: -150
                    })
                            .setTween(tween)
                            .addTo(SMController);
                }
                $timeout(function () {
                    var priceRows = document.getElementsByClassName('price-row');
                    len = priceRows.length;
                    for (i = 0; i < len; i++) {
                        var tween = TM.from(priceRows[i], .5, {rotationX: "90deg", alpha: 0})
                        new ScrollMagic.Scene({
                            triggerElement: priceRows[i],
                            triggerHook: 'onCenter',
                            offset: -150
                        })
                                .setTween(tween)
                                .addTo(SMController);
                    }
                });

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
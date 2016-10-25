angular.module("webApp", ["ngMaterial"])
        .config(["$mdThemingProvider", function ($mdThemingProvider) {
                $mdThemingProvider.theme('default').dark().primaryPalette('amber', {
                    // 'default': '900'
                });
            }])
        .run(["$rootScope", "$mdSidenav", function ($rootScope, $mdSidenav) {
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

                var bannerParallaxTween = new TimelineMax();
                bannerParallaxTween.to(document.getElementById('baner'), 1, {yPercent: 60})
                        .to(document.getElementById('banerText'), .7, {alpha: 0}, .3);
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

            }]);
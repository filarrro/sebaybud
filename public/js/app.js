"use strict";

angular.module("webApp", ["ui.router", "ngMaterial"])
    .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        "ngInject";

        var primary = $mdThemingProvider.extendPalette("grey", {
            "600": "#333333"
        });

        $mdThemingProvider.definePalette("primary", primary);

        $mdThemingProvider.theme("default").primaryPalette("primary", {
            'default': '900'
        });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state({
                name: "home",
                url: "/",
                controller: `MainController`,
                controllerAs: `vm`,
                templateUrl: `templates/application/main.html`
            })
            .state({
                name: "gallery",
                url: "/gallery",
                controller: `GalleryController`,
                controllerAs: `vm`,
                templateUrl: `templates/application/gallery.html`,
                resolve: {
                    images: function(Factory) {
                        return Factory.GetImages();
                    }
                }
            });
    })
    .run(function($rootScope, $state, $location, $anchorScroll, $timeout) {
        "ngInject";

        const PAGE_LOADER_DURATION_MS = 200,
            PAGE_LOADER_DURATION_S = 0.2;

        let TM = TweenMax,
            menuOpened = false,
            pageLoaderVisible = false,
            menuContainer = angular.element(document.querySelector('#menuContent'));

        $anchorScroll.yOffset = 64;

        $rootScope.toggleMenu = toggleMenu;
        $rootScope.go = go;
        $rootScope.scrollTo = scrollTo;

        function go(state, params) {
            if (state === $state.current.name) {
                TM.to(menuContainer, 0.3, { x: "0%" });
                menuOpened = false;
                if (state === "home") {
                    scrollTo(params.anchor);
                }
                return;
            } else {
                TM.killAll();
                TM.to(menuContainer, 0.3, { x: "0%" });
                menuOpened = false;
                showPageLoader();
                $timeout(() => {
                    if (params && params.anchor) {
                        $rootScope.anchor = params.anchor;
                    }
                    $state.go(state, params);
                }, PAGE_LOADER_DURATION_MS);
            }
        }

        function toggleMenu() {
            if (!menuOpened) {
                TM.to(menuContainer, 0.3, { x: "100%" });
            } else {
                TM.to(menuContainer, 0.3, { x: "0%" });
            }
            menuOpened = !menuOpened;
        }

        function scrollTo(id) {
            let el = document.getElementById(id),
                page = document.getElementsByTagName("body");
            TM.to(page, 0.6, { scrollTo: { y: el, offsetY: 60 } });
        }

        function showPageLoader() {
            pageLoaderVisible = true;
            let loader = document.getElementById("page-loader");
            TM.to(loader, PAGE_LOADER_DURATION_S, { autoAlpha: 1 });
        }

        function hidePageLoader() {
            pageLoaderVisible = false;
            let loader = document.getElementById("page-loader");
            TM.to(loader, PAGE_LOADER_DURATION_S, { autoAlpha: 0 });
        }

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            if ($rootScope.anchor) {
                $location.hash($rootScope.anchor);
                $timeout(() => {
                    $anchorScroll();
                    $rootScope.anchor = undefined;
                }, 180);
            }
            if (pageLoaderVisible) {
                $timeout(() => {
                    hidePageLoader();
                }, 200);
            }
        });
    });
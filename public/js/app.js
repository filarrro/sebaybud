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
    .run(function($rootScope, $state) {
        "ngInject";

        let TM = TweenMax,
            menuOpened = false,
            menuContainer = angular.element(document.querySelector('#menuContent'));

        $rootScope.toggleMenu = toggleMenu;
        $rootScope.go = go;
        $rootScope.scrollTo = scrollTo;

        function go(state, params) {
            if (state === $state.current.name) {
                if (state === "home") {
                    scrollTo("baner");
                } else {
                    TM.to(menuContainer, 0.3, { x: "0%" });
                    menuOpened = false;
                }
                return;
            }
            TM.killAll();
            TM.to(menuContainer, 0.3, { x: "0%" });
            menuOpened = false;
            $state.go(state, params);
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
                page = document.getElementById("page-content");
            TM.to(page, 0.6, { scrollTo: { y: el, offsetY: 60 } });
            TM.to(menuContainer, 0.3, { x: "0%" });
            menuOpened = false;
        }
    });
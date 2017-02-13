"use strict";

angular.module("webApp", ["ui.router", "ngMaterial"])
    .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        "ngInject";

        $mdThemingProvider.theme("default").primaryPalette("amber", {
            // 'default': '900'
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

        function go(state, params) {
            TM.killAll();
            TM.fromTo(menuContainer, 0.3, { x: "100%" }, { x: "0%" });
            menuOpened = false;
            $state.go( state, params );
        }

        function toggleMenu() {
            if (!menuOpened) {
                TM.fromTo(menuContainer, 0.3, { x: "0%" }, { x: "100%" });
            } else {
                TM.fromTo(menuContainer, 0.3, { x: "100%" }, { x: "0%" });
            }
            menuOpened = !menuOpened;
        }
    });
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
                templateUrl: `templates/application/gallery.html`
            });
    })
    .run(function($rootScope) {
        "ngInject";

        let menuOpened = false,
            menuContainer = angular.element(document.querySelector('#menuContent')),
            MenuTL = new TimelineMax({ paused: true });

        $rootScope.toggleMenu = toggleMenu;
        MenuTL.fromTo(menuContainer, 0.3, { x: "0%" }, { x: "100%" });

        function toggleMenu() {
            if (!menuOpened) {
                MenuTL.play();
            } else {
                MenuTL.reverse();
            }
            menuOpened = !menuOpened;
        }
    });
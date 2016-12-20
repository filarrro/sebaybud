"use strict";

angular.module("webApp", ["ngMaterial"])
    .config(function($mdThemingProvider) {
        "ngInject";

        $mdThemingProvider.theme('default').primaryPalette('amber', {
            // 'default': '900'
        });
    })
    .run(function($rootScope) {
        "ngInject";

        let menuOpened = false,
            menuContainer = angular.element(document.querySelector('#menuContent')),
            MenuTL = new TimelineMax({ paused: true });

        $rootScope.toggleMenu = toggleMenu;

        MenuTL.fromTo(menuContainer, 0.3, { left: "-100%" }, { left: "0%" });

        function toggleMenu() {
            if (!menuOpened) {
                MenuTL.play();
            } else {
                MenuTL.reverse();
            }
            menuOpened = !menuOpened;
        }
    });
"use strict";

angular
    .module("webApp")
    .controller("DialogController", function DialogController($mdDialog, $scope, item) {
        $scope.item = item;

        $scope.hide = hide;
        $scope.cancel = cancel;

        function hide() {
            $mdDialog.hide();
        }

        function cancel() {
            $mdDialog.cancel();
        }
    });
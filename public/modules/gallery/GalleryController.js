"use strict";

import jQuery from 'jquery';
import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
var $ = jQuery;

angular
    .module("webApp")
    .controller("GalleryController", function($scope, $timeout, Factory, images) {
        "ngInject";

        console.log(images);

        let vm = this,
            page = 1;

        vm.pageLimit = images.pageLimit;
        vm.gallery = images.data;

        let ctrl = new ScrollMagic.Controller();

        let scene = new ScrollMagic.Scene({ triggerElement: "#loader", triggerHook: "onEnter" })
            .addTo(ctrl)
            .on("enter", function(e) {
                if (page >= vm.pageLimit) {
                    return;
                }
                if (!$("#loader").hasClass("active")) {
                    $("#loader").addClass("active");

                    Factory.GetImages(page).then(function(res) {
                        console.log(res);
                        page++;
                        vm.gallery.push(...res.data);
                        vm.pageLimit = res.pageLimit;
                        scene.update(); // make sure the scene gets the new start position
                        $("#loader").removeClass("active");
                    });
                }
            });

    });
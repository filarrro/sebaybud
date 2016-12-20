"use strict";

import jQuery from 'jquery';
import TweenMax from 'gsap/src/uncompressed/TweenMax';
import ScrollMagic from 'scrollmagic';
import 'imports?define=>false!ScrollMagicGSAP';

window.$ = window.jQuery = jQuery;
window.ScrollMagic = ScrollMagic;
window.TweenMax = TweenMax;

import 'angular';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';

import "./app.js";

import "./../modules/global/services.js";

import "./../modules/main/DialogController.js";
import "./../modules/main/MainController.js";
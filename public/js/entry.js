"use strict";

import 'normalize-css';
import 'material-css';

import "./../sass/style.scss";
import "./../sass/style-large.scss";

import jQuery from 'jquery';
import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports?define=>false!gsapScrollToPlugin';
import 'imports?define=>false!ScrollMagicGSAP';

import 'angular';
import 'angular-aria';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-material';

import "./app.js";

import "./../modules/global/services.js";

import "./../modules/main/DialogController.js";
import "./../modules/main/MainController.js";

import "./../modules/gallery/GalleryController.js";
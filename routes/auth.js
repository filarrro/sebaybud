var express = require('express'),
    passport = require('passport'),
    models = require('../models'),
    User = models.User;

var router = express.Router();

router.route('/login')
    .post(function(req, res) {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        })
    });

module.exports = router;
var express = require('express');
var models = require('../models');
var User = models.User;
var Price = models.Price;
var File = models.File;

var router = express.Router();

router.route('/users')
        .get(function (req, res) {
            User.all().then(function (users) {
                res.json(users);
            });
        })
        .post(function (req, res) {
            User.create({
                name: req.body.name,
                age: req.body.age
            }).then(function (err) {
                if (err)
                    res.send(err);
                res.json({message: 'User created!'});
            });
        });
router.route('/users/:id')
        .get(function (req, res) {
            User.findById(req.params.id).then(function (user) {
                res.json({
                    user: user
                });
            });
        })
        .put(function (req, res) {
            User.findById(req.params.id).then(function (user) {
                user.update({
                    name: req.body.name,
                    age: req.body.age
                }).then(function () {
                    res.json({message: 'updated'});
                });
            });
        })
        .delete(function (req, res) {
            User.findById(req.params.id).then(function (user) {
                user.destroy().then(function () {
                    res.json({message: "deleted"});
                });
            });
        });
        
router.route('/prices')
        .get(function (req, res) {
            Price.all().then(function (data) {
                res.json(data);
            });
        })
        .post(function (req, res) {
            Price.create({
                name: req.body.name,
                price: req.body.price
            }).then(function (err) {
                if (err)
                    res.send(err);
                res.json({message: 'Created'});
            });
        });
router.route('/prices/:id')
        .get(function (req, res) {
            Price.findById(req.params.id).then(function (data) {
                res.json({
                    data: data
                });
            });
        })
        .put(function (req, res) {
            Price.findById(req.params.id).then(function (data) {
                data.update({
                    name: req.body.name,
                    price: req.body.price
                }).then(function () {
                    res.json({message: 'updated'});
                });
            });
        })
        .delete(function (req, res) {
            Price.findById(req.params.id).then(function (data) {
                data.destroy().then(function () {
                    res.json({message: "deleted"});
                });
            });
        });

router.route('/files')
        .get(function (req, res) {
            File.all().then(function (data) {
                res.json(data);
            });
        })
        .post(function (req, res) {
            File.create({
                source: req.body.source,
                desc: req.body.desc,
                type: req.body.type
            }).then(function (err) {
                if (err)
                    res.send(err);
                res.json({message: 'Created'});
            });
        });
router.route('/prices/:id')
        .get(function (req, res) {
            File.findById(req.params.id).then(function (data) {
                res.json({
                    data: data
                });
            });
        })
        .put(function (req, res) {
            File.findById(req.params.id).then(function (data) {
                data.update({
                    source: req.body.source,
                    desc: req.body.desc,
                    type: req.body.type
                }).then(function () {
                    res.json({message: 'updated'});
                });
            });
        })
        .delete(function (req, res) {
            File.findById(req.params.id).then(function (data) {
                data.destroy().then(function () {
                    res.json({message: "deleted"});
                });
            });
        });

module.exports = router;
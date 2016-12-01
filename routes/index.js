var express = require('express'),
        fs = require('fs'),
        shortid = require('shortid'),
        models = require('../models'),
        User = models.User,
        Price = models.Price,
        PriceCategory = models.PriceCategory,
        File = models.File,
        Testimontial = models.Testimontial;

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

router.route('/priceCategory')
        .get(function (req, res) {
            PriceCategory.all().then(function (data) {
                res.json(data);
            });
        })
        .post(function (req, res) {
            PriceCategory.create({
                name: req.body.name
            }).then(function (err) {
                if (err)
                    res.send(err);
                res.json({message: 'Created'});
            });
        });
router.route('/priceCategory/:id')
        .get(function (req, res) {
            PriceCategory.findById(req.params.id).then(function (data) {
                res.json({
                    data: data
                });
            });
        })
        .put(function (req, res) {
            PriceCategory.findById(req.params.id).then(function (data) {
                data.update({
                    name: req.body.name
                }).then(function () {
                    res.json({message: 'updated'});
                });
            });
        })
        .delete(function (req, res) {
            PriceCategory.findById(req.params.id).then(function (data) {
                data.destroy().then(function () {
                    res.json({message: "deleted"});
                });
            });
        });

router.route('/prices')
        .get(function (req, res) {
            Price.all({order: 'categoryId ASC'}).then(function (data) {
                res.json(data);
            });
        })
        .post(function (req, res) {
            Price.create({
                name: req.body.name,
                price: req.body.price,
                categoryId: req.body.categoryId
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
            var base64 = new Buffer(req.body.image.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
            var hash = shortid.generate() + '.jpg';
            fs.writeFile("public/media/galery/" + hash, base64, 'base64', function (err) {
                console.log(err);
                if (err)
                    res.send(err);

                File.create({
                    source: hash,
                    desc: req.body.desc || '',
                    type: req.body.type
                }).then(function (err) {
                    if (err)
                        res.send(err);
                    res.json({message: 'Created'});
                });
            });
        });
router.route('/files/:id')
        .delete(function (req, res) {
            File.findById(req.params.id).then(function (data) {
                var filePath = "public/media/galery/" + data.source;
                fs.unlinkSync(filePath);
                data.destroy().then(function () {
                    res.json({message: "deleted"});
                });
            });
        });

router.route('/testimontials')
        .get(function (req, res) {
            Testimontial.all().then(function (data) {
                res.json(data);
            });
        })
        .post(function (req, res) {
            var base64 = new Buffer(req.body.image.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
            var hash = shortid.generate() + '.jpg';
            fs.writeFile("public/media/testimontials/" + hash, base64, 'base64', function (err) {
                if (err)
                    res.send(err);

                Testimontial.create({
                    img: hash,
                    user: req.body.user,
                    text: req.body.text
                }).then(function (err) {
                    if (err)
                        res.send(err);
                    res.json({message: 'Created'});
                });
            });
        });
router.route('/testimontials/:id')
        .delete(function (req, res) {
            Testimontial.findById(req.params.id).then(function (data) {
                var filePath = "public/media/testimontials/" + data.img;
                fs.unlinkSync(filePath);
                data.destroy().then(function () {
                    res.json({message: "deleted"});
                });
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

function filterPrices(elem) {
    return elem.categoryId == this;
}

router.route('/main-page')
        .get(function (req, res) {
            Price.all({order: 'categoryId ASC'}).then(function (prices) {
                PriceCategory.all().then(function (categories) {
                    var cat = categories;
                    var arr = [];
                    for (var i = 0; i < cat.length; i++) {
                        var obj = {
                            category: cat[i]
                        };
                        obj.priceList = prices.filter(filterPrices, cat[i].id);
                        arr.push(obj);
                    }
                    Testimontial.all().then(function (testimontials) {
                        res.json({
                            categories: arr,
                            testimontials: testimontials
                        });
                    });
                });
            });
        });

module.exports = router;
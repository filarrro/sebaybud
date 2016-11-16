var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

var models = require('./models/index');
var sequelize = models.sequelize;
var router = require('./routes/index');

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/admin', function (req, res) {
    res.render('admin');
});

app.use('/api', router);

sequelize.sync({force: true}).then(function () {
    app.listen(port);
    console.log('Magic happens on port ' + port);
});

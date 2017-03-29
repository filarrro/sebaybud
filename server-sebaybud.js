var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('./passport');

var models = require('./models/index');
var sequelize = models.sequelize;
var router = require('./routes/index');

var app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'mySuperSecretSessionKey',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/login', function(req, res) {
    res.render('login');
});
app.get('/admin', function(req, res) {
    if (req.isAuthenticated()) {
        res.render('admin');
    } else {
        res.redirect("/login");
    }
});

app.use('/api', router);

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/admin');
    });

app.get('/logout',
    function(req, res) {
        req.logout();
        res.redirect('/login');
    });

app.get('*', function(req, res) {
    res.render('index');
});

sequelize.sync().then(function() {
    app.listen(port);
    console.log('Magic happens on port ' + port);
});
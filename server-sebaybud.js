var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var session = require('express-session');
var validator = require('express-validator');
var helmet = require('helmet');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var passport = require('./passport');

var Config = require('./config');
var models = require('./models/index');
var sequelize = models.sequelize;
var router = require('./routes/index');

var app = express();

// Add content compression middleware
app.use(compression());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//never allow in frames
app.use(helmet.frameguard({ action: 'deny' }));

// sanitize user input for all requests
app.use(validator());

app.set('views', __dirname + '/views');

// Add static middleware
var oneMonth = 2592000000;
app.use(express.static(__dirname + '/public', { maxAge: oneMonth }));

app.set('view engine', 'ejs');

app.use(session({
    secret: 'mySuperSecretSessionKey',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 2592000000 }, // 30 days
    httpOnly: true
}));

app.use(passport.initialize());
app.use(passport.session());

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

app.post('/contact-mail', function(req, res) {
    // escape special characters
    for (var item in req.body) {
        req.sanitize(item).escape();
    }

    var mailAccountUser = 'sebaybud.kontakt@gmail.com';
    var mailAccountPassword = 'zaq1@WSX';

    var fromEmailAddress = 'sebaybud.kontakt@gmail.com';
    var toEmailAddress = Config.CONTACT_MAIL;

    var transport = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
            user: mailAccountUser,
            pass: mailAccountPassword
        },
        tls: { rejectUnauthorized: false }
    }));

    var mail = {
        from: fromEmailAddress,
        to: toEmailAddress,
        subject: req.body.title,
        text: "Hello!",
        html: `
        <h3 style="color:rgba(0,0,0,0.87);">
            <small style="color:rgba(0,0,0,0.54);">Od:</small> ${req.body.name}
        </h3>
        <h3 style="color:rgba(0,0,0,0.87);">
            <small style="color:rgba(0,0,0,0.54);">E-mail:</small> ${req.body.email}
        </h3>
        <p style="text-align:justify;font-style:italic;color:rgba(0,0,0,0.87);">${req.body.content}</p>
        `
    };

    transport.sendMail(mail, function(error, response) {
        if (error) {
            console.log("error", error);
            res.json({
                error: "Wystąpił błąd przy wysyłaniu wiadomości"
            });
        } else {
            console.log("Message sent: " + response);
            res.json({
                message: "Wiadomość wysłana"
            });
        }

        transport.close();
    });
});

app.get('*', function(req, res) {
    res.redirect("/");
});

sequelize.sync().then(function() {
    app.listen(Config.PROCESS_PORT);
    console.log('Working hard on port ' + Config.PROCESS_PORT);
});
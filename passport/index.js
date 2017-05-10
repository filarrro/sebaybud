var MD5 = require("crypto-js/md5"),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../models').User;

function validPassword(user, password) {
    var hash = MD5(password).toString();
    return user.password === hash;
}

passport.serializeUser(function(user, done) {
    done(null, { "id": user.id });
});

passport.deserializeUser(function(user, done) {
    User.findById(user.id).then(function(user) {
        done(null, user);
    }).catch(function(err) {
        done(err, null);
    });
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log("-- Try log in: ", username, password);
        User.findOne({
            where: {
                username: username
            }
        }).then(function(user) {
            if (!user) {
                return done(null, false, { message: 'Incorrect username or password.' });
            }
            if (!validPassword(user, password)) {
                return done(null, false, { message: 'Incorrect username or password.' });
            }
            return done(null, user);
        }).catch(function(err) {
            return done(err);
        });
    }
));

module.exports = passport;
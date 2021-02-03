'use strict';

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const { config } = require('../../../config');

passport.use(new FacebookStrategy({
    clientID: config.auth.facebook.id,
    clientSecret: config.auth.facebook.secret,
    callbackURL: 'https://www.example.com/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken, refreshToken, profile);
    done(null);
}
));

module.exports = passport;

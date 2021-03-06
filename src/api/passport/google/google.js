'use strict';

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { config } = require('../../../config');

passport.use(new GoogleStrategy({
    clientID: config.auth.google.id,
    clientSecret: config.auth.google.secret,
    callbackURL: 'https://sample-server-auth.herokuapp.com/api/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken, refreshToken, profile);
    done(null);
}));

module.exports = passport;

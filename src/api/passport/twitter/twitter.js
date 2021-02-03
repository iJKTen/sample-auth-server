'use strict';

const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const { config } = require('../../../config');

passport.use(new TwitterStrategy({
    consumerKey: config.auth.twitter.key,
    consumerSecret: config.auth.twitter.secret,
    callbackURL: ''
}, (token, tokenSecret, profile, done) => {
    console.log(token, tokenSecret, profile);
    done(null);
}));

module.exports = passport;

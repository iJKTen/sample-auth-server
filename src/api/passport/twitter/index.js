/* eslint-disable new-cap */
'use strict';

const router = require('express').Router();
const passport = require('./twitter');

router.get('/', passport.authenticate('twitter'))
    .get('/callback', passport.authenticate('twitter'));

module.exports = router;

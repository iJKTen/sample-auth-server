/* eslint-disable new-cap */
'use strict';

const router = require('express').Router();
const passport = require('./facebook');

router.get('/', passport.authenticate('facebook'))
    .get('/callback', passport.authenticate('facebook'));

module.exports = router;

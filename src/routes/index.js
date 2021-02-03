/* eslint-disable new-cap */
'use strict';

const router = require('express').Router();
const twitterRoutes = require('../api/passport/twitter');
const googleRoutes = require('../api/passport/google');

router.use('/auth/twitter', twitterRoutes);
router.use('/auth/google', googleRoutes);

module.exports = router;

/* eslint-disable new-cap */
'use strict';

const router = require('express').Router();
const googleRoutes = require('../api/passport/google');
const facebookRoutes = require('../api/passport/facebook');

router.use('/auth/google', googleRoutes);
router.use('/auth/facebook', facebookRoutes);

module.exports = router;

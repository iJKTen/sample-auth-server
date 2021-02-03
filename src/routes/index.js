/* eslint-disable new-cap */
'use strict';

const router = require('express').Router();
const googleRoutes = require('../api/passport/google');

router.use('/auth/google', googleRoutes);

module.exports = router;

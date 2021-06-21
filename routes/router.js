const express = require('express');
const AuthRouter = require('./AuthRouter');
const ProfileRouter = require('./ProfileRouter');

const router = express.Router();

//only  /api endpoint

/**
 * @route /api/auth
 * @desc Route for Auth
 *
 *
 */
router.use('/auth', AuthRouter);
router.use('/profile', ProfileRouter);

module.exports = router;

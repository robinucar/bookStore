const express = require('express');
const AuthRouter = require('./AuthRouter');

const router = express.Router();

//only  /api endpoint

/**
 * @route /api/auth
 * @desc Route for Auth
 *
 *
 */
router.use('/auth', AuthRouter);

module.exports = router;

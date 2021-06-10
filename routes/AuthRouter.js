const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');
//routes for /api/auth

/**
 * @route POST /api/auth/register
 * @desc Register endpoint
 * @access Public
 */

router.post('/register', authController.auth_register);

/**
 * @route POST /api/auth/login
 * @desc Login endpoint
 * @access Private
 */

router.post('/login', authController.authLogin);

module.exports = router;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');
const { check } = require('express-validator');
//routes for /api/auth

/**
 * @route POST /api/auth/register
 * @desc Register endpoint
 * @access Public
 */

router.post(
  '/register',
  [
    //validate
    check('password', 'Password cannot be shorter than 6 characters').isLength({
      min: 6,
    }),
    check('email', 'Please enter a valid email!').isEmail(),
  ],
  authController.auth_register
);

/**
 * @route POST /api/auth/login
 * @desc Login endpoint
 * @access Private
 */

router.post('/login', authController.authLogin);

module.exports = router;

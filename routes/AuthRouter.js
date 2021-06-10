const express = require('express');
const router = express.Router();

//routes for /api/auth

/**
 * @route POST /api/auth/register
 * @desc Register endpoint
 * @access Public
 */

router.post('/register', (req, res) => {
  //TODO: Register function
  res.send('register completed');
});

/**
 * @route POST /api/auth/login
 * @desc Login endpoint
 * @access Private
 */

router.post('/login', (req, res) => {
  //TODO: Authentication
  //TODO: Login function

  res.send('Login Completed');
});

module.exports = router;

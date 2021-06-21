const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
//base url: /api/profile

/**
 * @route GET /api/profile
 * @description Profile endpoint
 * @access Private
 */

router.get('/', authMiddleware, (req, res) => {
  res.send(req.decodedUser);
});

module.exports = router;

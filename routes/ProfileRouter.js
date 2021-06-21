const express = require('express');
const router = express.Router();
//base url: /api/profile

/**
 * @route GET /api/profile
 * @description Profile endpoint
 * @access Private
 */

router.get('/', (req, res) => {
  res.send('Private Profile Page');
});

module.exports = router;

const express = require('express');

const router = express.Router();

//only  /api endpoint
router.get('/', (req, res) => {
  console.log('Api Page');
  res.send('Api Page');
});

module.exports = router;

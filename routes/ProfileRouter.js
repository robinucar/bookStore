const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
const ProfileController = require('../controllers/ProfileController');
//base url: /api/profile

/**
 * @route GET /api/profile
 * @description Profile endpoint
 * @access Private
 */

router.get('/', authMiddleware, ProfileController.getProfileInfo);

/**
 * @route PUT/api/profile/update
 * @desc Update Profile Endpoint
 * @access Private
 */

router.get('/update', authMiddleware, ProfileController.updatedProfileInfo);
module.exports = router;

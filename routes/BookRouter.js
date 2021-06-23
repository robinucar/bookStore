const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');

/**
 * @route Get/api/books
 * @desc Book Listing Endpoint
 * @access Public
 */

router.get('/', BookController.getBookList);

/**
 * @route GET/api/books/details/:id
 * @desc Books Details endpoint
 * @access Public
 */

router.get('/details/:id', BookController.getBookDetails);

module.exports = router;

const express = require('express');
const router = express.Router({mergeParams: true});
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware')
const wrapAsync = require('../utils/wrapAsync')
const reviews = require('../controllers/reviews');






router.post('/',isLoggedIn, validateReview , wrapAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn,isReviewAuthor,wrapAsync(reviews.deleteReview))




module.exports = router;
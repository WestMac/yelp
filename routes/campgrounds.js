const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync')
const { isLoggedIn ,isAuthor, validateCampground } = require('../middleware')
const campgrounds = require('../controllers/campgrounds');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/new', isLoggedIn, campgrounds.renderNewForm)
router.get('/:id/edit', isLoggedIn, isAuthor, wrapAsync(campgrounds.renderEditForm))

router.route('/')
    .get(wrapAsync(campgrounds.index))
    // .post(isLoggedIn, validateCampground, wrapAsync(campgrounds.createCampground))
    .post( upload.single('image'),(req,res) => {
       
    })
router.route('/:id')
    .get(wrapAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, validateCampground, wrapAsync(campgrounds.updateCampground))
    .delete(isLoggedIn,isAuthor,wrapAsync(campgrounds.deleteCampground))









module.exports = router;
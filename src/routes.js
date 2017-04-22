const express = require('express');
const auth = require('./middlewares/auth');
const controllerRestaurants = require('./controllers/restaurants');
const controllerReviews = require('./controllers/reviews');

const router = express.Router();

//router.use(auth);

// Restaurants
router.get('/restaurant', controllerRestaurants.search);

// Reviews
router.post('/review', controllerReviews.create);

module.exports = router;

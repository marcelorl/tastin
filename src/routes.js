const express = require('express');
const auth = require('./middlewares/auth');
const controllerRestaurants = require('./controllers/restaurants');
const controllerReviews = require('./controllers/reviews');

const router = express.Router();

//router.use(auth);

// Restaurants
router.get('/restaurants', controllerRestaurants.search);
router.get('/restaurants/:place_id/reviews', controllerReviews.findReviews);

// Reviews
router.post('/reviews', controllerReviews.create);

module.exports = router;

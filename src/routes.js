const express = require('express');
const auth = require('./middlewares/auth');
const controllerRestaurants = require('./controllers/restaurants');
const controllerReviews = require('./controllers/reviews');

const routes = express.Router();

// Restaurants
routes.get('/restaurants', controllerRestaurants.search);
routes.get('/restaurants/:place_id/reviews', controllerReviews.findReviews);

// Reviews
routes.post('/reviews', controllerReviews.create);

module.exports = routes;

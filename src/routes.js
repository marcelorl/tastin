const express = require('express');
const auth = require('./middlewares/auth');
const controllerRestaurants = require('./controllers/restaurants');

const router = express.Router();

//router.use(auth);

router.get('/restaurant', controllerRestaurants.search);

router.post('/review', (req, res) => {
  res.json({test: 'test'});
});

module.exports = router;

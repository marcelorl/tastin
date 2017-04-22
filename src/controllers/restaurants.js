const axios = require('../utils/Request');
const pick = require('lodash/pick');

exports.search = (req, res) => {
  const searchRestaurants = response => {
    const fullRestaurantsDetails = response.data.results;

    let restaurants = fullRestaurantsDetails.map(location => {
      return pick(location, ['place_id', 'name', 'rating', 'vicinity', 'geometry.location', 'opening_hours.open_now']);
    });

    res.json(restaurants);
  };

  axios.get(
    '/place/nearbysearch/json',
    {
      params: {
        location:'-33.8670522,151.1957362',
        radius: 500,
        type: 'restaurant',
        keyword: 'cruise'
      }
    }
  )
    .then(searchRestaurants);
};

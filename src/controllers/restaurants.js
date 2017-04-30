const axios = require('../utils/Request');
const get = require('lodash/get');
const pick = require('lodash/pick');

exports.search = (req, res) => {
  const location = `${req.query.lat},${req.query.lng}`;

  const searchRestaurants = response => {
    const fullRestaurantsDetails = response.data.results;

    const restaurants =
      fullRestaurantsDetails
        .sort((a, b) => b.rating - a.rating)
        .map(location => {
          let extractLocation = pick(location, ['place_id', 'name', 'rating', 'vicinity']);

          return Object.assign(extractLocation, {
            location: location.geometry.location,
            open_now: get(location, 'opening_hours.open_now', false)
          });
        });

    res.json(restaurants);
  };

  axios.get(
    '/place/nearbysearch/json',
    {
      params: {
        location,
        radius: req.query.radius || 500,
        type: 'restaurant'
      }
    }
  )
    .then(searchRestaurants);
};

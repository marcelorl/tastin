const models = require('../../models');

exports.create = (req, res) =>
  models.Review.create({
    user_name: req.body.user_name,
    user_email: req.body.user_email,
    place_id: req.body.place_id,
    message: req.body.message
  }).then(response => {
    res.json(response);
  });

exports.findReviews = (req, res) =>
  models.Review.findAll({
    where: {
      place_id: req.params.place_id
    }
  })
    .then(review => {
      if (review.length) {
        return res.json(review);
      }

      return res.json([]);
    });

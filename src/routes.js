const express = require('express');
const auth = require('./middlewares/auth');

const router = express.Router();

//router.use(auth);

router.post('/review', (req, res) => {
  res.json({test: 'test'});
});

module.exports = router;

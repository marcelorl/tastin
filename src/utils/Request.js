const axios = require('axios');

if (process.env.NODE_ENV === 'development') {
  require('dotenv-safe').config();
}

const instance = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
  params: { key: process.env.GOOGLE_PLACES_KEY }
});

module.exports = instance;

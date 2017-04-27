require('dotenv-safe').config();
const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
  params: { key: process.env.GOOGLE_PLACES_KEY }
});

module.exports = instance;

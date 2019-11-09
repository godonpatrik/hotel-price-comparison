const axios = require('axios');
require('dotenv').config();

module.exports = function cityToGeoCode(city) {
  const url = `http://open.mapquestapi.com/geocoding/v1/address?key=${process.env.MAPQUEST_API_KEY}&location=${city}`;
  return axios.get(url);
};

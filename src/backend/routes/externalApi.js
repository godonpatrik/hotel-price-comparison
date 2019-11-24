const express = require('express');
const router = express.Router();
const axios = require('axios');
const moment = require('moment');
require('dotenv').config();

const weatherApiKey = process.env.WEATHER_API_KEY;
const fourSquareClientId = process.env.FOURSQUARE_CLIENT_ID;
const fourSquareClientSecret = process.env.FOURSQUARE_CLIENT_SECRET;

router.get('/:city/:days/weather', (req, res) => {
  const city = req.params.city;
  const days = req.params.days;
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&days=${days}&key=${weatherApiKey}`;
  axios.get(url)
    .then(apiResponse => {
      res.send(apiResponse.data);
    })
    .catch(error => {
      res.send({status: error.response.status, text: error.response.statusText});
    })
});

router.get('/:city/getPlaces', (req, res) => {
  const city = req.params.city;
  const date = moment(Date.now()).format('YYYYMMDD');
  const url = `https://api.foursquare.com/v2/venues/explore?near=${city}&client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&v=${date}`;
  axios.get(url)
    .then(apiResponse => {
      res.send(apiResponse.data);
    })
    .catch(error => {
      console.log(error);
      res.send({status: error.response.status, text: error.response.statusText});
    })
});

router.get('/:id/getPlaceDetails', (req, res) => {
  const placeId = req.params.id;
  const date = moment(Date.now()).format('YYYYMMDD');
  const url = `https://api.foursquare.com/v2/venues/${placeId}?&client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&v=${date}`;
  axios.get(url)
    .then(apiResponse => {
      res.send(apiResponse.data);
    })
    .catch(error => {
      res.send({status: error.response.status, text: error.response.statusText});
    })
});

router.get('/getExchangeRate', (req, res) => {
  const url = 'https://api.ratesapi.io/api/latest?base=USD';
  axios.get(url)
    .then(apiResponse => {
      res.send(apiResponse.data);
    })
    .catch(error => {
      res.send({status: error.response.status, text: error.response.statusText});
    })
});

module.exports = router;

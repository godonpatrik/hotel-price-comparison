const express = require('express');
const router = express.Router();
const models = require('../database/models/index');

router.post('/:username/addWeatherSearch', (req, res) => {
  const body = req.body;
  const username = req.params['username'];
  models['user']
    .findOne({
      where: {
        username: username
      }
    })
    .then(user => {
      body.userId = user.id;
      models['weatherSearch']
        .create(body)
        .then(weatherSearch => {
          res.send(weatherSearch);
          console.log('WeatherSearch successfully added to database, data: ', weatherSearch.toJSON());
        })
    })
});

router.get('/:username/getAllByUser', (req, res) => {
  const username = req.params['username'];
  models['user']
    .findOne({
      where: {
        username: username
      }
    })
    .then(user => {
      models['weatherSearch']
        .findAll({
          where: {
            userId: user.id
          },
          include: [{
            all: true, nested: true
          }]
        })
        .then(weatherSearches => {
          res.send(weatherSearches);
        })
    })
});

module.exports = router;

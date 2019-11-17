const express = require('express');
const router = express.Router();
const models = require('../database/models/index');

router.post('/:username/addPlaceSearch', (req, res) => {
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
      models['placeSearch']
        .create(body)
        .then(placeSearch => {
          res.send(placeSearch);
          console.log('PlaceSearch successfully added to database, data: ', placeSearch.toJSON());
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
      models['placeSearch']
        .findAll({
          where: {
            userId: user.id
          },
          include: [{
            all: true, nested: true
          }]
        })
        .then(placeSearches => {
          res.send(placeSearches);
        })
    })
});

module.exports = router;

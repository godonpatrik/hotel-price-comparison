const express = require('express');
const router = express.Router();
const models = require('../database/models/index');
const token = require('jsonwebtoken');
const hotelSearchController = require('../controllers/hotelSearchController');

router.post('/:username/addHotelSearch', ensureToken, (req, res) => {
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
      models['hotelSearch']
        .create(body)
        .then(hotelSearch => {
          res.send(hotelSearch);
          console.log('HotelSearch successfully added to database, data: ', hotelSearch.toJSON());
        })
    })
});

router.get('/:city/:checkin_date/:checkout_date/:peopleNum/getHotels', ensureToken, (req, res) => {
  const city = req.params.city;
  const checkin_date = req.params.checkin_date;
  const checkout_date = req.params.checkout_date;
  const adults = req.params.peopleNum;
  hotelSearchController.getHotelData(city, checkin_date,checkout_date,adults)
    .then(data => {
      res.send(data);
    });
});

router.get('/:username/getAllByUser', ensureToken, (req, res) => {
  const username = req.params['username'];
  models['user']
    .findOne({
      where: {
        username: username
      }
    })
    .then(user => {
      models['hotelSearch']
        .findAll({
          where: {
            userId: user.id
          },
          include: [{
            all: true, nested: true
          }]
        })
        .then(hotelSearches => {
          res.send(hotelSearches);
        })
    })
});

function ensureToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    if (bearerToken) {
      token.verify(bearerToken, 'jsonWebTokenSecret', (error, data) => {
        if (error) {
          console.log('Error occurred: ' + error);
          res.sendStatus(403);
        } else {
          req.data = data;
          next();
        }
      })
    }
  } else {
    console.log('No authorization header');
    res.sendStatus(403);
  }
}

module.exports = router;

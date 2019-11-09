const express = require('express');
const router = express.Router();
const models = require('../database/models/index');
const token = require('jsonwebtoken');
const hotelSearchController = require('../controllers/hotelSearchController');

router.post('/:userName/addUserSearch', ensureToken, (req, res) => {
  const body = req.body;
  const userName = req.params['userName'];
  models['user']
    .findOne({
      where: {
        username: userName
      }
    })
    .then(user => {
      body.userId = user.id;
      models['userSearch']
        .create(body)
        .then(userSearch => {
          res.send(userSearch);
          console.log('UserSearch successfully added to database, data: ', userSearch.toJSON());
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

router.get('/:userName/getAllByUser', ensureToken, (req, res) => {
  const userName = req.params['userName'];
  models['user']
    .findOne({
      where: {
        username: userName
      }
    })
    .then(user => {
      models['userSearch']
        .findAll({
          where: {
            userId: user.id
          },
          include: [{
            all: true, nested: true
          }]
        })
        .then(userSearches => {
          res.send(userSearches);
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

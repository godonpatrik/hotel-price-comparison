const express = require('express');
const router = express.Router();
const auth = require('./auth');
const userRoutes = require('./userRoutes');
const hotelSearchRoutes = require('./hotelSearchRoutes');
const weatherSearchRoutes = require('./weatherSearchRoutes');
const placeSearchRoutes = require('./placeSearchRoutes');
const externalApi = require('./externalApi');
const token = require('jsonwebtoken');

router.use('/auth', auth);
router.use('/user', ensureToken, userRoutes);
router.use('/hotelSearch', ensureToken, hotelSearchRoutes);
router.use('/weatherSearch', ensureToken, weatherSearchRoutes);
router.use('/placeSearch', ensureToken, placeSearchRoutes);
router.use('/externalApi', externalApi);

function ensureToken (req, res, next) {
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

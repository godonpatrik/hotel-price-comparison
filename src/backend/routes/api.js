const express = require('express');
const router = express.Router();
const auth = require('./auth');
const userRoutes = require('./userRoutes');
const hotelSearchRoutes = require('./hotelSearchRoutes');
const weatherSearchRoutes = require('./weatherSearchRoutes');
const placeSearchRoutes = require('./placeSearchRoutes');
const externalApi = require('./externalApi');

router.use('/auth', auth);
router.use('/user', userRoutes);
router.use('/hotelSearch', hotelSearchRoutes);
router.use('/weatherSearch', weatherSearchRoutes);
router.use('/placeSearch', placeSearchRoutes);
router.use('/externalApi', externalApi);

module.exports = router;

const express = require('express');
const router = express.Router();
const auth = require('./auth');
const userRoutes = require('./userRoutes');
const userSearchRoutes = require('./userSearchRoutes');
const externalApi = require('./externalApi');

router.use('/auth', auth);
router.use('/user', userRoutes);
router.use('/userSearch', userSearchRoutes);
router.use('/externalApi', externalApi);

module.exports = router;

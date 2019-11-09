const express = require('express');
const router = express.Router();
const models = require('../database/models/index');
const bcrypt = require('bcrypt');

router.post('/register', (req, res) => {
  const body = req.body;
  body.password = bcrypt.hashSync(req.body.password, 10);
  models['user']
    .create(body)
    .then((user) => {
      console.log('User successfully added to database, data: ', user.toJSON());
      res.send(user);
    })
    .catch(function (err) {
      console.log(err, req.body);
    });
});

module.exports = router;

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

router.post('/update', (req, res) => {
  const prevUserName = req.body.prevUserName;
  delete req.body.prevUserName;
  const body = req.body;
  body.password = bcrypt.hashSync(req.body.password, 10);
  models['user']
    .findOne({
      where: {
        username: prevUserName
      }
    })
    .then(user => {
      const userId = user.id;
      models['user']
        .update(body, {
          where: {
            id: userId
          }
        })
        .then(updatedUser => {
          res.send(updatedUser);
          console.log('User successfully updated!')
        })
    })
});

router.get('/:username/getUser', (req, res) => {
  const username = req.params.username;
  models['user']
    .findOne({
        where: {
          username: username
        }
      }
    )
    .then(user => {
      res.send(user);
    })

});

module.exports = router;

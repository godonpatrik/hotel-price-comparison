const models = require('../database/models/index');
const token = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = (req, res) => {
  const username = req.body.username;
  models['user']
    .findOne({
      where: {
        username: username
      }
    })
    .then(foundUser => {
      if (foundUser !== null) {
        const password = req.body.password;
        if (bcrypt.compareSync(password, foundUser.password)) {
          const authUserInfo = {
            username: foundUser.username,
            email: foundUser.email,
            token: tokenizer(foundUser)
          };
          res.send(authUserInfo)
        } else {
          throw new Error('Password mismatch');
        }
      } else {
        throw new Error('User not found');
      }
    })
    .catch(error => {
      console.log('authController: ' + error.message);
      res.send({message: error.message});
    })
};

function tokenizer(user) {
  return token.sign(user.toJSON(), 'jsonWebTokenSecret', {
    expiresIn: '1 day'
  })
}



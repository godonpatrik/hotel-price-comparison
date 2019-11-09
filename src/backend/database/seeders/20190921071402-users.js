'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: '8d13c379-2968-4350-970a-10ec28146428',
        username: 'admin',
        password: bcrypt.hashSync('admin', 10),
        email: 'admin@admin.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1525147f-224d-4356-87c1-d82040ffea15',
        username: 'user',
        password: bcrypt.hashSync('user', 10),
        email: 'user@user.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};

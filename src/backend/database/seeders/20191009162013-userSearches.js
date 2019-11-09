'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userSearches', [
      {
        id: '6b662dcd-78b3-4201-b4c0-f68db5149bef',
        location: 'Budapest',
        startDate: '2019-12-12',
        endDate: '2019-12-20',
        peopleNum: 2,
        userId: '8d13c379-2968-4350-970a-10ec28146428',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userSearches', null, {})
  }
};

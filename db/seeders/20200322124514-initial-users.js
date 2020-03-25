'use strict';
const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = {
  up: async(queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [{
        name: 'John',
        email: 'admin@mail.cl',
        password: await bcrypt.hash('password', saltRounds),
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true
      },{
        name: 'John',
        email: 'user@mail.cl',
        password: await bcrypt.hash('password', saltRounds),
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Users', null, {});
  }
};

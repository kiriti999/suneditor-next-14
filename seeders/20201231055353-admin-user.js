'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: '1340065c-d716-4673-a87c-6f70e2ee5f1d',
      name: 'Whatsnxt',
      /* 
      * The encrypted password is "Whatsnxt" 
      * If you want to change the default password then go to the website https://www.devglan.com/online-tools/bcrypt-hash-generator
      * Then encrypt your string by 9 Rounds and paste here
      */
      password: '$2y$10$PJgqTXZbExafNH7nl3uAru9DF75VHaBjxTWm/u2GLFjs0R.WvNn9u', 
      email: 'info@whatsnxt.in',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

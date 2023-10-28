'use strict';
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid'); // Import the UUID library

/** @type {import('sequelize-cli').Migration} */

const hashPassword = (str) => {
  return crypto.createHash('sha256').update(str).digest('hex');
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    const userId = uuidv4(); // Generate a UUID
    return queryInterface.bulkInsert('Users', [
      {
        id: userId, // Include the generated UUID as id
        username: 'John Doe',
        email: 'admin@gmail.com',
        password: hashPassword('password123'),
        roleId: 'ad48a343-08f5-4ee4-ac28-c160d4dca5fa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};

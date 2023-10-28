'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, Sequelize) => {
    const adminRoleId = '8f34ea1c-414c-46d8-a212-927ddfdb5d96'; // Generate a UUID for ADMIN role
    const userRoleId = 'ad48a343-08f5-4ee4-ac28-c160d4dca5fa'; // Generate a UUID for USER role

    return queryInterface.bulkInsert('Roles', [
      {
        id: adminRoleId, // Use the generated UUID for ADMIN role
        name: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: userRoleId, // Use the generated UUID for USER role
        name: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  },
};

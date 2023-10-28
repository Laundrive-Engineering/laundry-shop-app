'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    static associate(models) {
      // Define the association with the User model
      Shop.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'owner',
      });
    }
  }

  Shop.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Shop',
    }
  );

  return Shop;
};

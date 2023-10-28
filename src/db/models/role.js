'strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // Define an association with the User model
      Role.hasMany(models.User, {
        foreignKey: 'roleId',
        as: 'usersWithRole',
      });
    }
  }

  Role.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Role',
    }
  );

  return Role;
};

'use strict';

module.exports = (sequelize, DataTypes) => {
  const placeSearch = sequelize.define('placeSearch', {
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID
    }
  }, {});

  placeSearch.associate = function (models) {
    placeSearch.belongsTo(models.user);
  };

  return placeSearch;
};

'use strict';

module.exports = (sequelize, DataTypes) => {
  const weatherSearch = sequelize.define('weatherSearch', {
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
    days: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID
    }
  }, {});

  weatherSearch.associate = function (models) {
    weatherSearch.belongsTo(models.user);
  };

  return weatherSearch;
};

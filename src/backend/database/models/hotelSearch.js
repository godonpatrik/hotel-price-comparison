'use strict';

module.exports = (sequelize, DataTypes) => {
  const hotelSearch = sequelize.define('hotelSearch', {
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
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    peopleNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID
    }
  }, {});

  hotelSearch.associate = function (models) {
    hotelSearch.belongsTo(models.user);
  };

  return hotelSearch;
};

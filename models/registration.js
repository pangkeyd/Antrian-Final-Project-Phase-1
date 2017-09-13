'use strict';
module.exports = function(sequelize, DataTypes) {
  var Registration = sequelize.define('Registration', {
    customerID: DataTypes.INTEGER,
    clinicID: DataTypes.INTEGER,
    no_antrian: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Registration;
};
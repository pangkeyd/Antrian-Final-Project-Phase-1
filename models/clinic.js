'use strict';
module.exports = function(sequelize, DataTypes) {
  var Clinic = sequelize.define('Clinic', {
    poli_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Clinic;
};
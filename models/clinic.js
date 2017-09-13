'use strict';
module.exports = function(sequelize, DataTypes) {
  var Clinic = sequelize.define('Clinic', {
    poli_name: DataTypes.STRING
  });

  Clinic.associate = function(models){
    Clinic.hasMany(models.Registration, {foreignKey: 'clinicID'})
    Clinic.hasMany(models.Customer, {foreignKey: 'poliID'})
  }

  return Clinic;
};

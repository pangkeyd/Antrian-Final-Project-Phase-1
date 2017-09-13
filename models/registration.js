'use strict';
module.exports = function(sequelize, DataTypes) {
  var Registration = sequelize.define('Registration', {
    customerID: DataTypes.INTEGER,
    clinicID: DataTypes.INTEGER,
    no_antrian: DataTypes.INTEGER
  });

  Registration.associate = function(models){
    Registration.belongsTo(models.Customer, {foreignKey: 'customerID'})
  }

  return Registration;
};

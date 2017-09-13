'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    full_name: DataTypes.STRING,
    poliID: DataTypes.INTEGER
  });

  Customer.associate = function(models){
    Customer.hasMany(models.Registration, {foreignKey: 'customerID'})
    Customer.belongsTo(models.Clinic, {foreignKey: 'poliID'})
  }
  return Customer;
};

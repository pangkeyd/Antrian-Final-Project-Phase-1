const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', function(req, res){
  models.Customer.findAll()
  .then(function(customers){
    // res.send(customers)
    res.render('customer', {data: customers, title: 'Customer'})
  })
  .catch(function(err){
    res.send(err)
  })
})

routers.get('/add', function(req, res){
  res.render('customerAdd', {title: 'Add Customer'})
})

routers.post('/add', function(req, res){
  models.Customer.build({
    first_name: req.body.fn,
    last_name: req.body.ln,
    createdAt: new Date()
  })
  .save().then(function(customers){
    res.redirect('/customer')
  })
  .catch(function(err){
    res.send(err)
  })
})

routers.get('/edit/:id', function(req, res){
  models.Customer.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(function(customers){
    // res.send(customers[0])
    res.render('customerEdit', {data: customers[0], title: 'Edit Customer'})
  })
  .catch(function(err){
    res.send(err)
  })
})

routers.post('/edit/:id', function(req, res){
  models.Customer.update({
    first_name: req.body.fn,
    last_name: req.body.ln,
    updatedAt: new Date()
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(function(customers){
    res.redirect('/customer')
  })
  .catch(function(err){
    res.send(err)
  })
})

routers.get('/delete/:id', function(req, res){
  models.Customer.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(customers){
    res.redirect('/customer')
  })
  .catch(function(err){
    res.send(err)
  })
})

// ========== VIEW POLI ==========

routers.get('/add-poli/:id', function(req, res){
  models.Customer.findById(req.params.id)
  .then(function(customers){
    models.Clinic.findAll()
    .then(function(clinic){
      res.render('addPoli', {dataCus: customers, dataClin: clinic, title: 'Add Poli Customer'})
    })
  })
})

routers.post('/add-poli/:id', function(req, res){
  models.Customer.update({
    first_name: req.body.fn,
    last_name: req.body.ln,
    poliID: req.params.poliName
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(function(customers){
    res.redirect('/customer')
  })
})

routers.get('/view-poli/:id', function(req, res){
  models.Customer.findAll({
    include: [{
      model: models.Clinic
    }]
  })
  .then(function(customers){
    res.render('viewPoli', {data: customers, title: 'Poli Customer'})
  })
})

module.exports = routers

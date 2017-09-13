const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', function(req, res){
  models.Clinic.findAll()
  .then(function(clinic){
    res.render('clinic', {data: clinic, title: 'Clinic'})
  })
})

routers.get('/add', function(req, res){
  res.render('clinicAdd', {title: 'Add Poli'})
})

routers.post('/add', function(req, res){
  models.Clinic.build({
    poli_name: req.body.pn,
    createdAt: new Date()
  })
  .save().then(function(clinic){
    res.redirect('/clinic')
  })
})

routers.get('/edit/:id', function(req, res){
  models.Clinic.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(function(clinic){
    res.render('clinicEdit', {data: clinic[0], title: 'Edit Clinic'})
  })
})

routers.post('/edit/:id', function(req, res){
  models.Clinic.update({
    poli_name: req.body.pn,
    updatedAt: new Date()
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(function(clinic){
    res.redirect('/clinic')
  })
})

routers.get('/delete/:id', function(req, res){
  models.Clinic.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(clinic){
    res.redirect('/clinic')
  })
})

module.exports = routers

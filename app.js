const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const index = require('./routes/index')
const customer = require('./routes/customer')
const clinic = require('./routes/clinic')

app.use('/', index)
app.use('/customer', customer)
app.use('/clinic', clinic)

app.listen(3000, function(req, res){
  console.log(`AYO JALAN`);
})

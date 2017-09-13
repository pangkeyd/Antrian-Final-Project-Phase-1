const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const index = require('./routes/index')

app.use('/', index)

app.listen(3000, function(req, res){
  console.log(`AYO JALAN`);
})

const express = require('express');
const ENV = require('../config/config');
const route = require('./route/route')
const path = require('path');
const bodyParser = require('body-parser');
require('../db/connection')

//Setting express app
const app = express()

//Setting port
const PORT = process.env.PORT || ENV.PORT;

//setting middleware assets
const assets = path.join(__dirname,'../asset')
app.use(express.static(assets));

//Setring body-parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


route(app)

app.listen(PORT,() => console.log(`Server is running on http://localhost:${PORT}`))
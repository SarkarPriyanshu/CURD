"use strict";

var express = require('express');

var ENV = require('../config/config');

var route = require('./route/route');

var path = require('path');

require('../db/connection'); //Setting express app


var app = express(); //Setting port

var PORT = process.env.PORT || ENV.PORT; //setting middleware assets

var assets = path.join(__dirname, '../asset');
app.use(express["static"](assets));
route(app);
app.listen(PORT, function () {
  return console.log("Server is running on http://localhost:".concat(PORT));
});
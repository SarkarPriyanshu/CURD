"use strict";

var mongoose = require('mongoose');

var ENV = require('../config/config');

mongoose.connect(ENV.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("Connected Congrats...");
})["catch"](function (err) {
  return console.log("Not Connected !!: ".concat(err));
});
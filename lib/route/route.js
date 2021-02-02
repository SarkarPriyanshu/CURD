"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var route = function route(app) {
  app.get('/', function (req, res) {
    res.send('Hello World!!!');
  });
};

var _default = route;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./db");

_app["default"].listen(_app["default"].get("port"));

console.log("App is runnig on port: ".concat(_app["default"].get("port")));
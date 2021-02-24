"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _appoinments_router = _interopRequireDefault(require("./routes/appoinments_router"));

var app = (0, _express["default"])(); // custom cors

var whitelist = ["http://localhost:3000"];
var corsOptions = {
  origin: function origin(_origin, callback) {
    // console.log(origin);
    var exists = whitelist.some(function (dominio) {
      return dominio === _origin;
    });

    if (exists) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by custom cors"));
    }
  }
};
app.set("port", process.env.PORT || 4000);
app.get("/", function (req, res) {
  res.json({
    message: "Home"
  });
});
app.get("/api/v1", function (req, res) {
  res.json({
    message: "Login"
  });
});
app.use((0, _morgan["default"])("dev"));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
})); // app.use( cors(corsOptions) );

app.use((0, _cors["default"])());
app.use("/api/v1/appoinments", _appoinments_router["default"]);
var _default = app;
exports["default"] = _default;
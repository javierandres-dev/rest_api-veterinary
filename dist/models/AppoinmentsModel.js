"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

var appoinment = new _mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  owner: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: String,
    trim: true,
    required: true
  },
  phone: {
    type: String,
    trim: true,
    required: true
  },
  time: {
    type: String,
    trim: true,
    required: true
  },
  symptom: {
    type: String,
    trim: true,
    required: true
  },
  discharged: false
}, {
  versionKey: false,
  timestamps: true
});
appoinment.plugin(_mongoosePaginateV["default"]);

var _default = (0, _mongoose.model)("Appoinment", appoinment);

exports["default"] = _default;
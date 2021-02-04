"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAnAppoinment = exports.updateAnAppoinment = exports.readAllDischarged = exports.readAllCurrent = exports.readAnAppoinment = exports.readAllAppoinments = exports.createAppoinment = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _AppoinmentsModel = _interopRequireDefault(require("../models/AppoinmentsModel"));

var _getPagination2 = require("../libs/getPagination");

var createAppoinment = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, owner, date, phone, time, symptom, discharged, newAppoinment, appoinmentCreated;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, owner = _req$body.owner, date = _req$body.date, phone = _req$body.phone, time = _req$body.time, symptom = _req$body.symptom, discharged = _req$body.discharged;
            newAppoinment = new _AppoinmentsModel["default"]({
              name: name,
              owner: owner,
              date: date,
              phone: phone,
              time: time,
              symptom: symptom,
              discharged: discharged ? discharged : false
            });
            _context.next = 5;
            return newAppoinment.save();

          case 5:
            appoinmentCreated = _context.sent;
            res.json(appoinmentCreated);
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            res.status(400).json({
              message: _context.t0.message || "Something went wrong"
            });
            console.log("Error: ".concat(_context.t0));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function createAppoinment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createAppoinment = createAppoinment;

var readAllAppoinments = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$query, page, size, name, condition, _getPagination, limit, offset, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            //const appoinments = await Appoinment.find();
            //res.json(appoinments);
            _req$query = req.query, page = _req$query.page, size = _req$query.size, name = _req$query.name;
            condition = name ? {
              name: {
                $regex: new RegExp(name),
                $options: "i"
              }
            } : {};
            _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
            _context2.next = 6;
            return _AppoinmentsModel["default"].paginate(condition, {
              offset: offset,
              limit: limit
            });

          case 6:
            data = _context2.sent;
            res.json(data);
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            res.status(400).json({
              message: _context2.t0.message || "Something went wrong"
            });
            console.log("Error: ".concat(_context2.t0));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function readAllAppoinments(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.readAllAppoinments = readAllAppoinments;

var readAnAppoinment = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var appoinment;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _AppoinmentsModel["default"].findById(req.params.id);

          case 3:
            appoinment = _context3.sent;

            if (!appoinment) {
              res.status(404).json({
                message: error.message || "Something went wrong"
              });
            }

            res.json(appoinment);
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(400).json({
              message: _context3.t0.message || "Something went wrong"
            });
            console.log("Error: ".concat(_context3.t0));

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function readAnAppoinment(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.readAnAppoinment = readAnAppoinment;

var readAllCurrent = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var allCurrent;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _AppoinmentsModel["default"].find({
              discharged: false
            });

          case 3:
            allCurrent = _context4.sent;
            res.json(allCurrent);
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(400).json({
              message: _context4.t0.message || "Something went wrong"
            });
            console.log("Error: ".concat(_context4.t0));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function readAllCurrent(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.readAllCurrent = readAllCurrent;

var readAllDischarged = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var allDischarged;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _AppoinmentsModel["default"].find({
              discharged: true
            });

          case 3:
            allDischarged = _context5.sent;
            res.json(allDischarged);
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            res.status(400).json({
              message: _context5.t0.message || "Something went wrong"
            });
            console.log("Error: ".concat(_context5.t0));

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function readAllDischarged(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.readAllDischarged = readAllDischarged;

var updateAnAppoinment = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var appoinment;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _AppoinmentsModel["default"].findByIdAndUpdate(req.params.id, req.body);

          case 3:
            appoinment = _context6.sent;

            if (!appoinment) {
              res.status(404).json({
                message: error.message || "Something went wrong"
              });
            }

            res.json({
              message: "Appoinment ".concat(appoinment.id, " updated successfully")
            });
            _context6.next = 12;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            res.status(400).json({
              message: _context6.t0.message || "Something went wrong"
            });
            console.log("Error: ".concat(_context6.t0));

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));

  return function updateAnAppoinment(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateAnAppoinment = updateAnAppoinment;

var deleteAnAppoinment = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var appoinment;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _AppoinmentsModel["default"].findByIdAndDelete(req.params.id);

          case 3:
            appoinment = _context7.sent;
            res.json({
              message: "Appoinment ".concat(appoinment.id, " deleted")
            });
            _context7.next = 11;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            res.status(400).json({
              message: _context7.t0.message || "Something went wrong"
            });
            console.log("Error: ".concat(_context7.t0));

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function deleteAnAppoinment(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteAnAppoinment = deleteAnAppoinment;
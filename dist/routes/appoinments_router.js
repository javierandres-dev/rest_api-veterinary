"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _AppoinmentsController = require("../controllers/AppoinmentsController");

var router = (0, _express.Router)();
router.post("/", _AppoinmentsController.createAppoinment);
router.get("/", _AppoinmentsController.readAllAppoinments);
router.get("/pending", _AppoinmentsController.readAllPending);
router.get("/done", _AppoinmentsController.readAllDone);
router.get("/:id", _AppoinmentsController.readAnAppoinment);
router.put("/:id", _AppoinmentsController.updateAnAppoinment);
router["delete"]("/:id", _AppoinmentsController.deleteAnAppoinment);
var _default = router;
exports["default"] = _default;
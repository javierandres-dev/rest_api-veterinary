"use strict";
import { Router } from "express";
import {
  createAppoinment,
  readAllAppoinments,
  readAllCurrent,
  readAllDischarged,
  readAnAppoinment,
  updateAnAppoinment,
  deleteAnAppoinment,
} from "../controllers/AppoinmentsController";

const router = Router();

router.post("/", createAppoinment);

router.get("/", readAllAppoinments);

router.get("/current", readAllCurrent);

router.get("/discharged", readAllDischarged);

router.get("/:id", readAnAppoinment);

router.put("/:id", updateAnAppoinment);

router.delete("/:id", deleteAnAppoinment);

export default router;

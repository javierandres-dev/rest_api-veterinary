"use strict";
import { Router } from "express";
import {
  createAppoinment,
  readAllAppoinments,
  readAllPending,
  readAllDone,
  readAnAppoinment,
  updateAnAppoinment,
  deleteAnAppoinment,
} from "../controllers/AppoinmentsController";

const router = Router();

router.post("/", createAppoinment);

router.get("/", readAllAppoinments);

router.get("/pending", readAllPending);

router.get("/done", readAllDone);

router.get("/:id", readAnAppoinment);

router.put("/:id", updateAnAppoinment);

router.delete("/:id", deleteAnAppoinment);

export default router;

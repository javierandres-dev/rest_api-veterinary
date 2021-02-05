"use strict";
import Appoinment from "../models/AppoinmentsModel";
import { getPagination } from "../libs/getPagination";

export const createAppoinment = async (req, res) => {
  try {
    const { date, time, client, patient, reason, done } = req.body;
    const newAppoinment = new Appoinment({
      date,
      time,
      client,
      patient,
      reason,
      done: done ? done : false,
    });
    const appoinmentCreated = await newAppoinment.save();
    res.json(appoinmentCreated);
  } catch (error) {
    res.status(400).json({ message: error.message || "Something went wrong" });
    console.log(`Error: ${error}`);
  }
};

export const readAllAppoinments = async (req, res) => {
  try {
    //const appoinments = await Appoinment.find();
    //res.json(appoinments);
    const { page, size, client } = req.query;
    const condition = client
      ? { name: { $regex: new RegExp(client), $options: "i" } }
      : {};
    const { limit, offset } = getPagination(page, size);
    const data = await Appoinment.paginate(condition, { offset, limit });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message || "Something went wrong" });
    console.log(`Error: ${error}`);
  }
};

export const readAnAppoinment = async (req, res) => {
  try {
    const appoinment = await Appoinment.findById(req.params.id);
    if (!appoinment) {
      res
        .status(404)
        .json({ message: error.message || "Something went wrong" });
    }
    res.json(appoinment);
  } catch (error) {
    res.status(400).json({ message: error.message || "Something went wrong" });
    console.log(`Error: ${error}`);
  }
};

export const readAllPending = async (req, res) => {
  try {
    const allPending = await Appoinment.find({ done: false });
    res.json(allPending);
  } catch (error) {
    res.status(400).json({ message: error.message || "Something went wrong" });
    console.log(`Error: ${error}`);
  }
};

export const readAllDone = async (req, res) => {
  try {
    const allDone = await Appoinment.find({ done: true });
    res.json(allDone);
  } catch (error) {
    res.status(400).json({ message: error.message || "Something went wrong" });
    console.log(`Error: ${error}`);
  }
};

export const updateAnAppoinment = async (req, res) => {
  try {
    const appoinment = await Appoinment.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!appoinment) {
      res
        .status(404)
        .json({ message: error.message || "Something went wrong" });
    }
    res.json({ message: `Appoinment ${appoinment.id} updated successfully` });
  } catch (error) {
    res.status(400).json({ message: error.message || "Something went wrong" });
    console.log(`Error: ${error}`);
  }
};

export const deleteAnAppoinment = async (req, res) => {
  try {
    const appoinment = await Appoinment.findByIdAndDelete(req.params.id);
    res.json({ message: `Appoinment ${appoinment.id} deleted` });
  } catch (error) {
    res.status(400).json({ message: error.message || "Something went wrong" });
    console.log(`Error: ${error}`);
  }
};

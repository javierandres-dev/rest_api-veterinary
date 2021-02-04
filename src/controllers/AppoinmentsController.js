"use strict";
import Appoinment from "../models/AppoinmentsModel";
import { getPagination } from "../libs/getPagination";

export const createAppoinment = async (req, res) => {
  try {
    const { name, owner, date, phone, time, symptom, discharged } = req.body;
    const newAppoinment = new Appoinment({
      name,
      owner,
      date,
      phone,
      time,
      symptom,
      discharged: discharged ? discharged : false,
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
    const { page, size, name } = req.query;
    const condition = name
      ? { name: { $regex: new RegExp(name), $options: "i" } }
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

export const readAllCurrent = async (req, res) => {
  try {
    const allCurrent = await Appoinment.find({ discharged: false });
    res.json(allCurrent);
  } catch (error) {
    res.status(400).json({ message: error.message || "Something went wrong" });
    console.log(`Error: ${error}`);
  }
};

export const readAllDischarged = async (req, res) => {
  try {
    const allDischarged = await Appoinment.find({ discharged: true });
    res.json(allDischarged);
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

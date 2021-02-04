"use strict";
import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";

const appoinment = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    owner: {
      type: String,
      trim: true,
      required: true,
    },
    date: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
    },
    time: {
      type: String,
      trim: true,
      required: true,
    },
    symptom: {
      type: String,
      trim: true,
      required: true,
    },
    discharged: false,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
appoinment.plugin(paginate);
export default model("Appoinment", appoinment);

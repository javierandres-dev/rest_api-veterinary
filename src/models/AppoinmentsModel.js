"use strict";
import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";

const appoinment = new Schema(
  {
    date: {
      type: String,
      trim: true,
      required: true,
    },
    time: {
      type: String,
      trim: true,
      required: true,
    },
    client: {
      type: String,
      trim: true,
      required: true,
    },
    patient: {
      type: String,
      trim: true,
      required: true,
    },
    reason: {
      type: String,
      trim: true,
      required: true,
    },
    done: false,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
appoinment.plugin(paginate);
export default model("Appoinment", appoinment);

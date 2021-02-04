"use strict";
import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    const db = await mongoose.connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`Connect to ${db.connection.name} successfully`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
})();

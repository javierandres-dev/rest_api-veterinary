'use strict';
import { config } from 'dotenv';

config();

export default {
  //mongodbURL: process.env.MONGODB_URI || "mongodb://localhost/veterinary",
  mongodbURL: process.env.MONGODB_URI || 'mongodb://db/veterinary',
};

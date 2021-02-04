"use strict";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import appoinmentsRouter from "./routes/appoinments_router";

const app = express();

// custom cors
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    // console.log(origin);
    const exists = whitelist.some((dominio) => dominio === origin);
    if (exists) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by custom cors"));
    }
  },
};

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use( cors(corsOptions) );
app.use(cors());

app.use("/api/v1/appoinments", appoinmentsRouter);

export default app;

"use strict";
import app from "./app";
import "./db";

app.listen(app.get("port"));
console.log(`App is runnig on port: ${app.get("port")}`);

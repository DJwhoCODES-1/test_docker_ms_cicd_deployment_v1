require("dotenv").config();
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  next(); // pass control to the next middleware
});

app.get("/", (req, res, next) => {
  res.status(200).json({ msg: "service-a" });
});
console.log(process.env.SERVICE_A_PORT);

app.listen(process.env.SERVICE_A_PORT, "0.0.0.0", () => {
  console.log("Server A started!");
});

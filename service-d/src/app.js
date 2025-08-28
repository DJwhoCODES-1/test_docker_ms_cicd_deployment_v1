require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({ msg: "service-d" });
});

app.listen(process.env.SERVICE_D_PORT, () => {
  console.log("Server D started!");
});

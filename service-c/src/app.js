const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({ msg: "service-c" });
});

app.listen(process.env.SERVICE_C_PORT, () => {
  console.log("Server C started!");
});

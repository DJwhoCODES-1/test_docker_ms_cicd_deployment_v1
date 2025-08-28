const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({ msg: "service-e" });
});

app.listen(process.env.SERVICE_E_PORT, () => {
  console.log("Server E started!");
});

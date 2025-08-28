const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({ msg: "service-b" });
});

app.listen(process.env.SERVICE_B_PORT, () => {
  console.log("Server B started!");
});

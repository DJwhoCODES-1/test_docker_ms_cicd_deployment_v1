const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({ msg: "service-a" });
});
console.log(process.env.SERVICE_A_PORT);
app.listen(process.env.SERVICE_A_PORT, () => {
  console.log("Server A started!");
});

const express = require("express");
const setupProxies = require("./proxy");

const app = express();
const PORT = process.env.PORT || 3000;

setupProxies(app);

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  next(); // pass control to the next middleware
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found in gateway" });
});

app.listen(PORT, () => {
  console.log(`🚀 API Gateway running on port ${PORT}`);
});

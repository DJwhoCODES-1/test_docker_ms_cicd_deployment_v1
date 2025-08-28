const express = require("express");
const setupProxies = require("./proxy");

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  next(); // pass control to the next middleware
});

app.get("/health", (req, res) => {
  res.send("okay");
});

setupProxies(app);

// app.use((req, res) => {
//   res.status(404).json({ message: "Route not found in gateway" });
// });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 API Gateway running on port ${PORT}`);
});

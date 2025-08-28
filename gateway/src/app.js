const express = require("express");
const setupProxies = require("./proxy");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

setupProxies(app);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found in gateway" });
});

app.listen(PORT, () => {
  console.log(`🚀 API Gateway running on port ${PORT}`);
});

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ service: "B", message: "Hello from Service B!" });
});

const port = process.env.SERVICE_B_PORT || 4002;
app.listen(port, () => {
  console.log(`✅ Service B running on port ${port}`);
});

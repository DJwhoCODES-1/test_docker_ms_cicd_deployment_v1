const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ service: "A", message: "Hello from CICD Deployed Service A!" });
});

const port = process.env.SERVICE_A_PORT || 4001;
app.listen(port, () => {
  console.log(`✅ Service A running on port ${port}`);
});

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ service: "C", message: "Hello from Service C!" });
});

const port = process.env.SERVICE_C_PORT || 4003;
app.listen(port, () => {
  console.log(`✅ Service C running on port ${port}`);
});

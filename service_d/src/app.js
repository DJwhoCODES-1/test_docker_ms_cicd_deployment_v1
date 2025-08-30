const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ service: "D", message: "Hello from Service D!" });
});

const port = process.env.SERVICE_D_PORT || 4004;
app.listen(port, () => {
  console.log(`✅ Service D running on port ${port}`);
});

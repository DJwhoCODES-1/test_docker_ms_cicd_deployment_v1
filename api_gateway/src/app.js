require("dotenv").config();
const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(cors());
app.set("trust proxy", true);

app.get("/", (req, res) => {
  res.send("API Gateway is working!");
});

routes(app);

app.use((req, res) => {
  res.status(404).json({
    error: true,
    message: "Route not found in API Gateway",
    path: req.originalUrl,
  });
});

const port = process.env.API_GATEWAY_PORT || 8000;
app.listen(port, () =>
  console.log(`🚀 API Gateway running at http://localhost:${port}`)
);

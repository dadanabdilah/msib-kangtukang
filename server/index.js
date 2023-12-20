// setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/route");
const app = express();
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/api/auth", userRoutes);

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// setup
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/route");
const app = express();
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", userRoutes);

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/controllers");

router.post("/register", register);
router.get("/login/:nama", login);
module.exports = router;

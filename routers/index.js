const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");

router.use("/v1", authRoutes);

module.exports = router;

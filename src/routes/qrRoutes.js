const express = require("express");
const { renderHome, generateQR } = require("../controller/qrController");

const router = express.Router();

router.get("/", renderHome);
router.post("/generate", generateQR);

module.exports = router;

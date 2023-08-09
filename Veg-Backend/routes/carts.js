const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", (req, res) => {
    res.json(req.body);
})

router.post("/", (req, res) => {
    const uid = req.body.uid;
    res.json(uid);
})


module.exports = router;
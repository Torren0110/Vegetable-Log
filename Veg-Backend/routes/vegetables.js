const express = require("express");
const joi = require("joi");
const mongoose = require("mongoose");
const Vegetable = require("../models/vagetableModel");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const imageURLBase = "http://localhost:3000/api/vegetables/image/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/imgs');
  },
  filename: (req, file, cb) => {
    const uniqueFilename = uuidv4();
    cb(null, uniqueFilename + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

const validateVeg = (veg) => {
  const schema = joi.object({
    name: joi.string().min(5).required(),
    price: joi.number().positive().required(),
    quantity: joi.number().positive().required(),
  });

  return schema.validate(veg);
};

//create routes

router.get("/", async (req, res) => {
  const searchStr = req.body.search || req.query.search;

  try {
    const result = await Vegetable.find({
      name: {
        $regex: searchStr,
        $options: "i",
      },
    });
    res.json(result);
  } catch {
    res.status(400);
  }
});

router.get("/:id", async (req, res) => {
  const q = req.params.id;

  try {
    const result = await Vegetable.find({_id: q});
    res.json(result);
  }
  catch {
    res.status(400).send("Invalid Key");
  }

});

router.get("/image/:filename", (req, res) => {
  const filename = req.params.filename;
  const imagePath = path.join(__dirname, "../public/imgs", filename);

  res.sendFile(imagePath);
});

router.post("/", upload.single('image') , async (req, res) => {
  const imgFile = req.file;

  const vegData = { name: req.body.name, price: req.body.price, quantity: req.body.quantity };

  const { error } = validateVeg( vegData );
  if (error) return res.status(400).send(error.details[0].message);

  if(imgFile) {
    vegData.image = imageURLBase + imgFile.filename;
  }
  
  try {

    let newVeg = new Vegetable(vegData);
    newVeg = await newVeg.save();
    res.json(newVeg);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

//Export router
module.exports = router;

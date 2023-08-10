const express = require("express");
const joi = require("joi");
const mongoose = require("mongoose");
const Vegetable = require("../models/vagetableModel");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const upload = multer({ dest: "../public/imgs/" });

const vegetables = [
  {
    id: 1,
    name: "item 1",
    image: "",
    price: 10,
    quantity: 12,
  },
  {
    id: 2,
    name: "vegetable 2",
    image: "",
    price: 10,
    quantity: 12,
  },
  {
    id: 3,
    name: "Bhindi 3",
    image: "",
    price: 20,
    quantity: 12,
  },
  {
    id: 4,
    name: "Aaloo 4",
    image: "",
    price: 20,
    quantity: 12,
  },
  {
    id: 5,
    name: "Methi 5",
    image: "",
    price: 20,
    quantity: 12,
  },
  {
    id: 6,
    name: "Muli 6",
    image: "",
    price: 20,
    quantity: 12,
  },
];

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

  // if(searchStr){
  // 	const data = vegetables.filter(veg => {
  // 		return veg.name.toLowerCase().includes(searchStr.toLowerCase());
  // 	});
  // 	res.json(data);
  // }
  // else
  // 	res.json(vegetables);

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
  const imagePath = path.join(__dirname, "../public2/vegetables/imgs", filename);

  res.sendFile(imagePath);

});

router.post("/", upload.single('image') , async (req, res) => {
  const imgFile = req.file;

  const vegData = { name: req.body.name, price: req.body.price, quantity: req.body.quantity };

  const { error } = validateVeg( vegData );
  if (error) return res.status(400).send(error.details[0].message);

  if(imgFile) {
    console.log(imgFile);
    
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

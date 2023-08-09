const express = require("express");
const router = express.Router();
const joi = require("joi");
const mongoose = require("mongoose");

const vegetableSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  price: { type: Number, required: true, min: 1 },
  quantity: { type: Number, required: true, min: 1 },
  image: { type: String, default: "" },
});

const Vegetable = new mongoose.model("Vegetable", vegetableSchema);

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
  const veg = vegetables.find((v) => v.id === q);

  try {
    const result = await Vegetable.find({_id: q});
    res.json(result);
  }
  catch {
    res.status(400).send("Invalid Key");
  }

});

router.post("/", async (req, res) => {
  const { error } = validateVeg(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // const newVeg = { id: vegetables.length + 1, ...req.body, image: "" };
  // vegetables.push(newVeg);

  try {
    let newVeg = new Vegetable(req.body);
    newVeg = await newVeg.save();
    res.json(newVeg);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

//Export router
module.exports = router;

const express = require("express");
const router = express.Router();
const joi = require("joi");

const vegetables = [
  {
    id: 1,
    name: "item 1",
    image: [],
    price: 10,
  },
  {
    id: 2,
    name: "item 2",
    image: [],
  },
  {
    id: 3,
    name: "item 3",
    image: [],
    price: 20,
  },
  {
    id: 4,
    name: "item 4",
    image: [],
    price: 20,
  },
  {
    id: 5,
    name: "item 5",
    image: [],
    price: 20,
  },
  {
    id: 6,
    name: "item 6",
    image: [],
    price: 20,
  },
];


const validateVeg = (veg) => {
  const schema = joi.object({
    name: joi.string().min(5).required(),
    price: joi.number().positive().required(),
    quantity: joi.number().positive().required(),
  });

  return schema.validate(veg);
}

//create routes

router.get("/", (req, res) => {
  const searchStr = req.query.search;

	if(searchStr){
		const data = vegetables.filter(veg => {
			return veg.name.includes(searchStr);
		});
		res.json(data);
	}
	else
  	res.json(vegetables);

});

router.post("/", (req, res) => {
  const { error } = validateVeg(req.body);

  if(error)
    return res.status(400).send(error.details[0].message);

  const newVeg = { id: vegetables.length + 1, ...req.body, image: [] };
  vegetables.push(newVeg);
  res.json(newVeg);
});

//Export router
module.exports = router;

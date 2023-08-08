const express = require("express");
const router = express.Router();
const joi = require("joi");

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
}

//create routes

router.get("/", (req, res) => {
  const searchStr = req.query.search;

	if(searchStr){
		const data = vegetables.filter(veg => {
			return veg.name.toLowerCase().includes(searchStr.toLowerCase());
		});
		res.json(data);
	}
	else
  	res.json(vegetables);

});

router.get("/:id", (req, res) => {
  const q = parseInt(req.params.id);
  const veg = vegetables.find(v => v.id === q);

  if(!veg)
    res.status(400).send("Invalid Key");
  else
    res.json(veg);
})

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

const express = require("express");
const router = express.Router();

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
    price: 20,
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

//Export router
module.exports = router;

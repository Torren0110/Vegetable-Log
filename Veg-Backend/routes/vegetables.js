const express = require("express");
const router = express.Router();

//create routes

router.get('/', (req, res) => {
    res.send("this works");
});


//Export router
module.exports = router;

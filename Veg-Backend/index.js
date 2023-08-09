const express = require("express");
const cors = require("cors");
const vegetables = require("./routes/vegetables");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost/Veg-Logs")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to mongoDB..."));

app.use(cors());
app.use(express.json());
app.use("/api/vegetables", vegetables);

const port = 3000;

app.listen(port, () => {
  console.log(`Listning on ${port}...`);
});

const express = require("express");
const cors = require("cors");
const vegetables = require("./routes/vegetables");
const users = require("./routes/users");
const carts = require("./routes/carts");
const orders = require("./routes/orders")
const sales = require("./routes/sales")
const mongoose = require("mongoose");
const app = express();
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)

mongoose
  .connect("mongodb://0.0.0.0/Veg-Logs")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to mongoDB..."));

app.use(cors());
app.use(express.json());
app.use("/api/vegetables", vegetables);
app.use("/api/users", users);
app.use("/api/carts", carts);
app.use("/api/orders", orders);
app.use("/api/sales", sales);

app.post("/payment", cors(), async (req, res)=>{
  let {amount, id} = req.body
  try{
    console.log("Entered Payment")
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "INR",
      description: "Veggies",
      payment_method: id,
      confirm: true,
    })
    console.log("Payment: ",payment)
    res.json({
      message: "payment successful",
      success: true
    })
  }catch(error){
      res.json({
        message: "payment failed",
        success: false
      })
  }
} )

const port = 3000;

app.listen(port, () => {
  console.log(`Listning on ${port}...`);
});

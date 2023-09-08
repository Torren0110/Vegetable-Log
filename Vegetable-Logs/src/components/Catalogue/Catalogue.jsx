import { useEffect, useState } from "react";
import useVegetable from "../../hooks/useVegetable";
import VegetableGrid from "./VegetableGrid";
import VegetableSearchBar from "./VegetableSearchBar";
import cartService from "../../services/cart-service";
import userService from "../../services/user-service";
import "./style.css"
import Orders from "../Orders/orders";
import orderService from "../../services/order-service";
import Sales from "../Sales/Sales";
import Prediction from "../Prediction/Prediction";

const Catalogue = () => {
  const [ searchString, setSearchString ] = useState("");
  const { vegetables, isLoading } = useVegetable(searchString);

  
  useEffect(() => {
    // cartService.get("64d3c85791bf3bd7cea4af89")
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch(err => console.log(err));

    // cartService.addToCart("64d4b2d56af8180b0bd5c316", "64d3877e0127fc3290df6710", -1)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   })


    // userService.register({ username: "user test1", email: "test2@gmail.com", password1: "12345678", password2: "12345678" })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   })

    // userService.logIn({ username: "user test", password: "12345678" })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   })

    // userService.getInfo("64dc8e2b2782b1cd4d89013e").then((res) => {
    //   console.log(res);
    // }).catch((err) => {
    //   console.log("error", err);
    // })

    // userService.update("64e494c07a7063e1155c3d63", { address: "rtest update address" })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   })

    // orderService.get("temp")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   })

  }, []);


  return (
    <div className="vegetable-div">
      {/* <Orders /> */}
      {/* <Sales /> */}

      {/* <Prediction /> */}
      <h2 className="heading">Listed Items</h2>
      <VegetableSearchBar className="searchbar"  onSearch = {(str) => { setSearchString(str) }} />
      <VegetableGrid isLoading={isLoading} vegetables={vegetables} />
      
    </div>
  );
};

export default Catalogue;

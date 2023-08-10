import { useEffect, useState } from "react";
import useVegetable from "../../hooks/useVegetable";
import VegetableGrid from "./VegetableGrid";
import VegetableSearchBar from "./VegetableSearchBar";
import cartService from "../../services/cart-service";

const Catalogue = () => {
  const [ searchString, setSearchString ] = useState("");
  const { vegetables, isLoading } = useVegetable(searchString);

  // cartService.get("64d3c85791bf3bd7cea4af89")
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch(err => console.log(err));


  return (
    <div onClick={() => {
      cartService.addToCart("64d3c85791bf3bd7cea4af89", "64d3877e0127fc3290df6710", -2)
    .then((res) => {
      console.log("data", res.data);
    })
    .catch(err => console.log(err))
    }}>
      <VegetableSearchBar onSearch = {(str) => { setSearchString(str) }} />
      <VegetableGrid isLoading={isLoading} vegetables={vegetables} />
    </div>
  );
};

export default Catalogue;

import { useState } from "react";
import useVegetable from "../../hooks/useVegetable";
import VegetableGrid from "./VegetableGrid";
import VegetableSearchBar from "./VegetableSearchBar";
import "./style.css"

const Catalogue = () => {
  const [ searchString, setSearchString ] = useState("");
  const { vegetables, isLoading } = useVegetable(searchString);



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

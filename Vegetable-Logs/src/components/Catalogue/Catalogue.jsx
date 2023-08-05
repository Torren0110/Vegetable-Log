import { useState } from "react";
import useVegetable from "../../hooks/useVegetable";
import VegetableGrid from "./VegetableGrid";
import VegetableSearchBar from "./VegetableSearchBar";

const Catalogue = () => {
  const [ searchString, setSearchString ] = useState("");
  const { vegetables, setVegetables } = useVegetable();

  return (
    <div>
      <VegetableSearchBar onSearch = {(str) => { console.log(str) }} />
      <VegetableGrid vegetables={vegetables} />
    </div>
  );
};

export default Catalogue;

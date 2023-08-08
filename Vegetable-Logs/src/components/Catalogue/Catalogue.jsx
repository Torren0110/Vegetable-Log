import { useState } from "react";
import useVegetable from "../../hooks/useVegetable";
import VegetableGrid from "./VegetableGrid";
import VegetableSearchBar from "./VegetableSearchBar";

const Catalogue = () => {
  const [ searchString, setSearchString ] = useState("");
  const { vegetables, setVegetables } = useVegetable(searchString);

  return (
    <div>
      <VegetableSearchBar onSearch = {(str) => { setSearchString(str) }} />
      <VegetableGrid vegetables={vegetables} />
    </div>
  );
};

export default Catalogue;

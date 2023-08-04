import useVegetable from "../../hooks/useVegetable";
import VegetableCard from "./VegetableCard";
import VegetableGrid from "./VegetableGrid";
import VegetableSearchBar from "./VegetableSearchBar";

const Catalogue = () => {
  const { vegetables } = useVegetable();

  return (
    <div>
      <VegetableSearchBar />
      <VegetableGrid vegetables={vegetables} />
    </div>
  );
};

export default Catalogue;

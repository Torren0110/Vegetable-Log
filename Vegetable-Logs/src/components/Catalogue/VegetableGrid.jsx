import VegetableCard from "./VegetableCard";

const VegetableGrid = ({ vegetables }) => {
  return (
    <div className="d-flex w-100 flex-wrap">
      {vegetables.map((veg) => (
        <VegetableCard
          key={veg.id}
          vegetable={veg}
        />
      ))}
    </div>
  );
};

export default VegetableGrid;

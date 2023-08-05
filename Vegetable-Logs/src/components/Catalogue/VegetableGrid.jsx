import VegetableCard from "./VegetableCard";

const VegetableGrid = ({ vegetables }) => {
  return (
    <div className="d-flex w-100 flex-wrap">
      {vegetables.map((veg) => (
        <VegetableCard
          key={veg.id}
          name={veg.name}
          id={veg.id}
          price={veg.price}
          img={veg.image[0]}
        />
      ))}
    </div>
  );
};

export default VegetableGrid;

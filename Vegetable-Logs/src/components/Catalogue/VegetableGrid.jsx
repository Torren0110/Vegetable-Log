import VegetableCard from "./VegetableCard";

const VegetableGrid = ({ isLoading, vegetables }) => {
  return (
    <div className="d-flex w-100 flex-wrap">
      {isLoading && (
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only"></span>
        </div>
      )}

      {!isLoading &&
        vegetables.map((veg) => <VegetableCard key={veg.id} vegetable={veg} />)}
    </div>
  );
};

export default VegetableGrid;

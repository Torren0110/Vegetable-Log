import VegetableCard from "./VegetableCard";
import { Grid } from "@mui/material";

const VegetableGrid = ({ isLoading, vegetables }) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Grid container justifyContent="center" spacing={3}>
      {isLoading && "Loading"}
      {!isLoading &&
        vegetables.map((veg) => <VegetableCard key={veg._id} vegetable={veg} />)}
    </Grid>
  );
};

export default VegetableGrid;

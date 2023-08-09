import VegetableCard from "./VegetableCard";
import { Grid } from "@mui/material";

const VegetableGrid = ({ isLoading, vegetables }) => {
  return (
    <Grid container  spacing={3} >
    {!isLoading &&
        vegetables.map((veg) => <VegetableCard key={veg.id} vegetable={veg} />)}
    </Grid>
  );
};

export default VegetableGrid;

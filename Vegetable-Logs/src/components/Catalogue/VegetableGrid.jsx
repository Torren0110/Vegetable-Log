import VegetableCard from "./VegetableCard";
import { Grid, Card, CardActionArea, CardContent, Skeleton } from "@mui/material";

const VegetableGrid = ({ isLoading, vegetables }) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Grid container justifyContent="center" spacing={3}>
      {isLoading && skeletons.map((val) => (
        <Grid item key={val}>
          <Card sx={{ width: 345 }} >
            <CardActionArea>
              <Skeleton variant="rounded" height={270} width={345}/>
              <CardContent>
                <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              </CardContent>
            </CardActionArea>
        </Card>
       </Grid>
      ))}
      {!isLoading &&
        vegetables.map((veg) => <VegetableCard key={veg._id} vegetable={veg} />)}
    </Grid>
  );
};

export default VegetableGrid;

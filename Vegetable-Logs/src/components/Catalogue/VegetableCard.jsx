import "./style.css";
import logo from "../../assets/logo.webp";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const VegetableCard = ({ vegetable }) => {
  return (
    <Grid item>
      <Card sx={{ minWidth: 345 }}>
        <CardActionArea onClick={() => console.log("hrwe")}>
          <CardMedia
            component="img"
            height="270"
            image={vegetable.image ? vegetable.image : logo}
            alt={vegetable.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {vegetable.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {vegetable.price}
              img: {vegetable.image}
              quantity: {vegetable.quantity}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default VegetableCard;

import "./style.css";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
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
        <Link to={`/itemview/${vegetable._id}`}>
        <Card sx={{ width: 345 }}>
          <CardActionArea>
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
                Price: ₹{vegetable.price} <br />
                Quantity: {vegetable.quantity}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
    </Grid>
  );
};

export default VegetableCard;

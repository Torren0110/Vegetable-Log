import logo from "../../assets/logo.webp";
// import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import "./style.css";

const VegetableCard = ({ vegetable }) => {

  return (
    <>
      {/* <div className="card mx-2 mb-4">
        <img
          src={vegetable.image ? vegetable.image : logo}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{vegetable.name}</h5>
          <p className="card-text">
            Price: {vegetable.price}
            img: {vegetable.image}
          </p>
          <Link to={`/itemview/${vegetable._id}`} className="btn btn-primary">
            View Veggie
          </Link>
        </div>
      </div> */}
      <div className="vegetable-card">
      <Grid item >
        <Card sx={{ width: 330, margin: '5px'}} >
        {/* <Link to={`/itemview/${vegetable._id}`}> */}
          <CardActionArea  onClick={() => { window.location.href = `/itemview/${vegetable._id}` }}>
            <CardMedia
              component="img"
              height="250"
              image={vegetable.image ? vegetable.image : logo}
              alt={vegetable.name}
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
             <p className="vegname">{vegetable.name}</p>   
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ display: 'flex' }}>
              <p className="vegprice">Price: ₹{vegetable.price}</p>   
              <p className="quantity"> Quantity: {vegetable.quantity}</p> 
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* </Link> */}
        </Card>
      </Grid>
      </div>
    </>
  );
};

export default VegetableCard;

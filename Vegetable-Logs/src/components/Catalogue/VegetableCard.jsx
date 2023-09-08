import logo from "../../assets/no-image.webp";
import { Link } from "react-router-dom";
import {
 
  CardActionArea,
  CardMedia,
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
      <div className="cards">
      <div className="vegetable-card">
        <div  className="main-card">
        <Link to={`/itemview/${vegetable._id}`}>
          {/* <CardActionArea  onClick={() => { window.location.href = `/itemview/${vegetable._id}` }}> */}
          <div className="imgbox">
            <CardMedia
              component="img"
              height="200"
              width="240"
              className="imgg"
              image={vegetable.image ? vegetable.image : logo}
              alt={vegetable.name}
            />
            </div>
            <div className="content">
              <Typography gutterBottom variant="h5" component="div">
             <p className="vegname">{vegetable.name}</p>   
              </Typography>
              <Typography variant="body2" color="text.secondary" >
              <p className="vegprice">Price: ₹{vegetable.price} <br/> Quantity: {vegetable.quantity}</p> 
              </Typography>
              <button><Link className="butn" to={`/itemview/${vegetable._id}`}>Buy now</Link></button>
              </div>
          {/* </CardActionArea> */}
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default VegetableCard;

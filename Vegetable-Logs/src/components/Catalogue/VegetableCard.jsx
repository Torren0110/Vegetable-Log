import "./style.css";
import logo from "../../assets/logo.webp";
import {Link} from 'react-router-dom'

const VegetableCard = ({ vegetable }) => {
  return (
<<<<<<< HEAD
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
      
      <Grid item>
        <Card sx={{ width: 345 }}>
        {/* <Link to={`/itemview/${vegetable._id}`}> */}
          <CardActionArea onClick={() => { window.location.href = `/itemview/${vegetable._id}` }}>
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
          {/* </Link> */}
        </Card>
      </Grid>
    </>
=======
    <div className="card mx-2 mb-4" onClick={() => {console.log(vegetable._id)}}>
      <img src={ vegetable.image ? vegetable.image : logo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{vegetable.name}</h5>
        <p className="card-text">
          Price: {vegetable.price}
          {/* img: {vegetable.image} */}
        </p>
        <Link to={`/itemview/${vegetable._id}`} className="btn btn-primary">
          View Veggie
        </Link>
      </div>
    </div>
>>>>>>> dc69de64c291cb0d6861df32cf6ab446441169c8
  );
};
export default VegetableCard;

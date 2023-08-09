import "./style.css";
import logo from "../../assets/logo.webp";
import { Link } from 'react-router-dom';

const VegetableCard = ({ vegetable }) => {
  return (
    <div className="card mx-2 mb-4">
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
  );
};

export default VegetableCard;
import "./style.css";
import logo from "../../assets/logo.webp";

const VegetableCard = ({ vegetable }) => {
  return (
    <div className="card mx-2 mb-4">
      <img src={ vegetable.image[0] ? vegetable.image[0] : logo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{vegetable.name}</h5>
        <p className="card-text">
          Price: {vegetable.price}
          img: {vegetable.image[0]}
        </p>
        <a href="#" className="btn btn-primary">
          View Veggie
        </a>
      </div>
    </div>
  );
};

export default VegetableCard;

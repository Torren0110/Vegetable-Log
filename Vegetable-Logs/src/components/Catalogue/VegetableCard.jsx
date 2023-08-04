import './style.css'

const VegetableCard = ({ name, id, price, img }) => {
  return (
    <div className="card mx-2 mb-4">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <p className="card-text">
          Price: { price }
          img: {img}
        </p>
        <a href="#" className="btn btn-primary">
          View Veggie
        </a>
      </div>
    </div>
  );
};

export default VegetableCard;

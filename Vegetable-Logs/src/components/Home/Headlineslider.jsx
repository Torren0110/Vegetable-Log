import React, { useState, useEffect } from 'react';
import './headline.css'; // Import the CSS file
import {BiSolidLeftArrow,BiSolidRightArrow} from "react-icons/bi"

const Headlineslider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Auto-rotate the images every 3 seconds (adjust the time as needed)
  useEffect(() => {
    const timer = setInterval(nextImage, 3000);

    // Clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='headlineslider'>
    <div className="image-slider">
      <button className='btnarrow' onClick={prevImage}><BiSolidLeftArrow/></button>
      <img src={images[currentImageIndex]} alt="Slider" />
      <button onClick={nextImage}><BiSolidRightArrow/></button>
    </div>
      <div className="pagination">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? 'active' : ''}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
      </div>
  );
};

export default Headlineslider;
import React from 'react';
import './headline.css';
import bg1 from "../../assets/headline1.png"
import bg2 from "../../assets/headline2.png"
import bg3 from "../../assets/headline3.png"
import bg4 from "../../assets/headline4.png"
import Headlineslider from './Headlineslider';
const Headlinebanner = () => {
  const images = [
    bg1,
    bg2,
bg3,
bg4  ];

  return (
    <div className="app">
      <Headlineslider images={images} />
    </div>
  );
};

export default Headlinebanner;
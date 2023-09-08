import React from 'react';
import './banner.css';

import ImageSlider from './Imageslider';
import bg1 from "../../assets/banner1.png"
import bg2 from "../../assets/banner2.png"
import bg3 from "../../assets/banner3.png"
import bg4 from "../../assets/banner4.png"
import bg5 from "../../assets/banner5.png"
const New = () => {
  const images = [
    bg1,
    bg2,
bg3,
bg4,
bg5
  ];

  return (
    <div className="app">
      <ImageSlider images={images} />
    </div>
  );
};

export default New;
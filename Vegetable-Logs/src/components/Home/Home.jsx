import React from 'react';
import Topoffers from './Topoffers';
import Headline from './Headline';
import Slider from './Slider';
import Banner from './Banner';

const Home = () => {
  const divStyle = {
    background: 'linear-gradient(170deg, rgba(49, 57, 73, 0.8) 20%, rgba(49, 57, 73, 0.5) 20%, rgba(49, 57, 73, 0.5) 35%, rgba(41, 48, 61, 0.6) 35%, rgba(41, 48, 61, 0.8) 45%, rgba(31, 36, 46, 0.5) 45%, rgba(31, 36, 46, 0.8) 75%, rgba(49, 57, 73, 0.5) 75%), linear-gradient(45deg, rgba(20, 24, 31, 0.8) 0%, rgba(41, 48, 61, 0.8) 50%, rgba(82, 95, 122, 0.8) 50%, rgba(133, 146, 173, 0.8) 100%) #313949',
    overflow:'hidden',
    marginBottom:'-20px',
    marginTop:'-30px'

  };
  return (
    <>
    <div style={divStyle}>
    <Banner/>
    <Topoffers />
    <Headline />
    <Slider/>
    </div>
    </>
  )
}

export default Home
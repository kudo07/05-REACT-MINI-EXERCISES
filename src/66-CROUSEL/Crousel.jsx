import React from 'react';
import Carousel from './Carousel';

const Crousel = () => {
  const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ];

  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
};

export default Crousel;

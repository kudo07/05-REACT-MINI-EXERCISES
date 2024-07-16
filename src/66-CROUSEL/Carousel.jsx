import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative">
      <div className="flex items-center justify-between">
        <button
          onClick={prevSlide}
          className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 z-10"
        >
          &#9664;
        </button>
        <div className="relative overflow-hidden border border-gray-200 rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-64">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 z-10"
        >
          &#9654;
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? 'bg-black' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

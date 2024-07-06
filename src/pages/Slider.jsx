import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import i1 from '../assets/Rectangle 4.png';
import i2 from '../assets/Rectangle 5.png';
import i3 from '../assets/Rectangle 11.png';

const images = [
  i1, i2, i3, i1, i2
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <Slider {...settings} style={{overflow: "hidden"}} >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} style={{ width: '100%', height: 400 }} alt={`slide-${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;

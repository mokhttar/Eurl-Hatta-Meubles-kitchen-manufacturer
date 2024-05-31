import React from 'react'
import Image from 'next/image';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainImage from "../assets/jason-briscoe-GliaHAJ3_5A-unsplash.jpg";
import TestImage from "../assets/lotus-design-n-print-ik9WP2V8Vas-unsplash.jpg"
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    r
  };
function ImageSlider() {
  return (
    <div>
    <Slider {...settings}>
     <div>
     <Image src={MainImage} alt='Main Image'  layout="responsive"  className="xl:rounded-xl xl:scale-90  border  rounded-md"/>
     </div>
      <div>
      <Image src={TestImage} alt='Main Image'  layout="responsive"  className="xl:rounded-xl xl:scale-90  border  rounded-md"/>
      </div>
     </Slider>
    </div>
  )
}

export default ImageSlider
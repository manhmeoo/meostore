import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import Magnifier from "react-magnifier";

const ProductImgCarousel = ({ Image }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 swiper"
      >
        <div className="swiper-wrapper">
          {Image?.map((item) => (
            <SwiperSlide className="swiper-slide">
              <Magnifier
                key={item.id}
                src={item.src}
                className="zoom"
                alt={item.caption}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs, Navigation]}
        className="mySwiper swiper"
      >
        <div className="swiper-wrapper">
          {Image?.map((item) => (
            <SwiperSlide className="swiper-slide">
              <img
                key={item.id}
                src={item.src}
                className="zoom img-fluid"
                alt={item.caption}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default ProductImgCarousel;

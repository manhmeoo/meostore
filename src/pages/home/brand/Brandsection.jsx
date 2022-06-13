import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import logo1 from "../../../assets/imgs/brands/brand-logo-1-130x130.png";
import logo2 from "../../../assets/imgs/brands/Brand-Logo-2-130x130.png";
import logo3 from "../../../assets/imgs/brands/Brand-Logo-3-130x130.png";
import logo4 from "../../../assets/imgs/brands/Brand-Logo-4-130x130.png";
import logo5 from "../../../assets/imgs/brands/Brand-Logo-5-130x130.png";
import logo6 from "../../../assets/imgs/brands/Brand-Logo-6-130x130.png";
import "./Brandsection.css";

const Brandsection = () => {
  return (
    <>
      <div className="container brands-section">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          freeMode={true}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            500: {
              minWidth: 500,
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              minWidth: 1024,
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper brandSwiper"
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <img src={logo1} alt="logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <img src={logo2} alt="logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <img src={logo3} alt="logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <img src={logo4} alt="logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <img src={logo5} alt="logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <img src={logo6} alt="logo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Brandsection;

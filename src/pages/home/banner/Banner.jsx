import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import Banner5 from "../../../assets/imgs/banner5.jpg";
import Banner2 from "../../../assets/imgs/banner2.jpg";

const Banner = () => {
  return (
    <>
      <Swiper
        speed={1500}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper swiper bannerSwipper"
      >
        <SwiperSlide>
          <div className="swiper-slide">
            <img src={Banner2} />
            <div className="campain-details campain1">
              <div className="campain-text season">New Arrivals</div>
              <div className="campain-text main">New Collection</div>
              <div className="campain-text sub">
                Up to 90% off on Accessories
              </div>
              <button className="campain-text-btn">SHOP NOW</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <img src={Banner5} />
            <div className="campain-details campain1">
              <div className="campain-text season">New Arrivals</div>
              <div className="campain-text main">New Collection</div>
              <div className="campain-text sub">
                Up to 90% off on Accessories
              </div>
              <button className="campain-text-btn">SHOP NOW</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;

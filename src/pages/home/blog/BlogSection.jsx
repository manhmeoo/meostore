import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./BlogSection.css";

const BlogSection = () => {
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
            <img src={Banner2} alt="banner" />
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
            <img src={Banner5} alt="banner" />
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

export default BlogSection;

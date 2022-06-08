import React, { useEffect, useState } from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import Banner5 from "../../../assets/imgs/banner5.jpg";
import Banner2 from "../../../assets/imgs/banner2.jpg";
import axios from "axios";

const Banner = () => {
  const [isLoading, setLoading] = useState(false);
  const [Products, setProducts] = useState();

  useEffect(() => {
    setLoading(true);
    try {
      axios
        .get(`http://localhost:3000/products`)
        .then((res) => setProducts(res.data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  setLoading(false);
  if (isLoading)
    return (
      <>
        <h1>loading...</h1>
      </>
    );
  else
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

export default Banner;

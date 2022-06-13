import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import axios from "axios";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./ProductSection.css";

const BestSellerTab = () => {
  const [isLoading, setLoading] = useState(false);
  const [Products, setProducts] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/products`)
      .then((res) => setProducts(res.data))
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>loading...</h1>
      </>
    );
  }
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            minWidth: 640,
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            minWidth: 768,
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            minWidth: 1024,
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper swiper products-swiper"
      >
        <div className="swiper-wrapper">
          {Products?.map((item) => (
            <SwiperSlide>
              <ProductCard
                key={item.id}
                title={item.title}
                price={item.price}
                image1={item.screenshorts[0].src}
                image2={item.screenshorts[1].src}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default BestSellerTab;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./RelatedProducts.css";
import { Navigation } from "swiper";
import axios from "axios";
import ProductCard from "../../../../components/ProductCard/ProductCard";

const RelatedProducts = () => {
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
      <div className="related-section">
        <div className="container">
          <div className="related-title">Related Products</div>
          <div className="Products__details">
            <div className="products-swiper">
              <Swiper
                slidesPerView={4}
                spaceBetween={40}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <div className="swiper-wrapper">
                  {Products?.map((item, index) => (
                    <SwiperSlide>
                      <ProductCard
                        id={item.id}
                        key={index}
                        title={item.title}
                        price={item.price}
                        image1={item.screenshorts[0].src}
                        image2={item.screenshorts[1].src}
                      />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;

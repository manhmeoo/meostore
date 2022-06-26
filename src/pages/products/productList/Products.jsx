import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./ProductsList.css";

const Products = () => {
  const [isLoading, setLoading] = useState(false);
  const [Products, setProducts] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/productsList`)
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
      <div className="Products__details">
        {Products?.map((item, index) => (
          <div className="swiper-slide">
            <ProductCard
              id={item.id}
              key={index}
              title={item.title}
              price={item.price}
              image1={item.screenshorts[0].src}
              image2={item.screenshorts[1].src}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
<style scoped></style>;

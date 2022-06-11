import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./newArrival.css";
import axios from "axios";

const NewArrival = () => {
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
  console.log(Products);
  return (
    <>
      <div className="newArival-section">
        <div className="container">
          <div className="Products__title">New Arrivals</div>
          <div className="newArival-container Products__details">
            {Products?.map((item, index) => (
              <ProductCard
                key={index}
                title={item.title}
                price={item.price}
                image1={item.screenshorts[0]}
                image2={item.screenshorts[1]}
              />
            ))}
          </div>
          <div className="sell-btn">
            <Link to="productLists.html" className="buyBtn btn2" type="button">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;

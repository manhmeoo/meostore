import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImgCarousel from "./ProductImgCarousel";
import "./PreInfoSection.css";
import ProductInfo from "./ProductInfo";

const PreInfoSection = () => {
  let param = useParams();
  let id = param.ProductId;
  const [isLoading, setLoading] = useState(false);
  const [Products, setProducts] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => setProducts(res.data))
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (isLoading) {
    return (
      <>
        <h1>loading...</h1>
      </>
    );
  }
  return (
    <>
      <div className="pre-infoSection">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ProductImgCarousel Image={Products.screenshorts || []} />
            </div>
            <div className="col-md-6">
              <ProductInfo title={Products.title} price={Products.price} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreInfoSection;

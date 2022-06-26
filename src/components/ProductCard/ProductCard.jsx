import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, image1, image2 }) => {
  return (
    <>
      <div className="swiper-slide">
        <Link to={`/product/${id}`} className="card">
          <div className="products-img-container">
            <img src={image1} className="card-img-top main-img" alt="..." />
            <img src={image2} className="card-img-top second-img" alt="..." />
            <div className="Product-img-buttons">
              <div>
                <i className="bi bi-heart" />
              </div>
              <div>
                <i className="bi bi-cart-plus" />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className="card-text">
              {price}
              <sub>đ</sub>
            </div>
            <div className="card-btn">
              <div className="start-check">
                <span className="bi bi-star-fill checked" />
                <span className="bi bi-star-fill checked" />
                <span className="bi bi-star-fill checked" />
                <span className="bi bi-star-fill checked" />
                <span className="bi bi-star-fill " />
              </div>
              <div className="card-buttons">
                <div>
                  <i className="bi bi-heart-fill" />
                </div>
                <div>
                  <i className="bi bi-cart-plus-fill" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;

import React from "react";
import { useState } from "react";

const ProductInfo = ({ title, price }) => {
  let [quantity, setQuantity] = useState(1);
  let [newPrice, setNewPrice] = useState(...[price]);
  function plusBtn() {
    setQuantity((quantity = quantity + 1));
    setNewPrice((newPrice = quantity * price * 1000));
  }

  function minusBtn() {
    if (quantity > 1) setQuantity((quantity = quantity - 1));
    setNewPrice((newPrice = quantity * price * 1000));
  }

  return (
    <>
      <div className="product-info-rightContents">
        <div className="row main-info">
          <div className="col-md-9">
            <div className="main-info-left">
              <div className="main-info-title">{title}</div>
              <div className="main-info-price">
                <div className="main-info-priceTitle">Price:</div>
                <div className="main-info-firstPrice">
                  {price * 1000 + 200000} VNĐ
                </div>
                <div className="main-info-priceOfferTitle">Offer price:</div>
                <div className="main-info-priceOffer">{price} VNĐ</div>
                <div className="main-info-offer">
                  <i className="fas fa-long-arrow-alt-down" />
                  <span>20%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="main-info-right">
              <div className="main-info-icons">
                <a href="#nav-Question-tab">
                  <i className="far fa-question-circle" />
                </a>
                <a href="#">
                  <i className="far fa-heart" />
                </a>
                <a href="#">
                  <i className="fas fa-share-alt" />
                </a>
              </div>
              <div className="main-info-coupon">
                coupon
                <i className="bi bi-tags" />
              </div>
            </div>
          </div>
        </div>
        <div className="sub-info">
          <div className="sub-info-title">sectors :</div>
          <div className="sub-info-details">bags</div>
          <div className="sub-info-title">delivery fee :</div>
          <div className="sub-info-details">
            Delivery fee 30.000 VNĐ (free over 1,000,000 VNĐ)
          </div>
          <div className="sub-info-title">Shipping Information :</div>
          <div className="sub-info-details">
            Average 2-3 days (including public holidays)
          </div>
          <div className="sub-info-title">Card benefits / interest-free :</div>
          <div className="sub-info-details">
            <a href="#" style={{ textDecoration: "underline" }}>
              View Detail
            </a>
          </div>
          <div className="sub-info-title">Item code :</div>
          <div className="sub-info-details">JHNCHD1BS940IV980</div>
        </div>
        <div className="properties">
          <div className="picker">
            <div className="properties-title">color</div>
            <div className="properties-choices">
              <div className="property-value property-value-color">
                <div className="prop-color red" />
              </div>
              <div className="property-value property-value-color">
                <div className="prop-color pink" />
              </div>
              <div className="property-value property-value-color">
                <div className="prop-color green" />
              </div>
              <div className="property-value property-value-color">
                <div className="prop-color blue" />
              </div>
              <div className="property-value property-value-color property-value-active">
                <div className="prop-color yellow" />
              </div>
              <div className="property-value property-value-color">
                <div className="prop-color gray" />
              </div>
            </div>
          </div>
          <div className="picker">
            <div className="properties-title">size</div>
            <div className="properties-choices">
              <div className="property-value property-value-size">M</div>
              <div className="property-value property-value-size property-value-active">
                L
              </div>
              <div className="property-value property-value-size">XL</div>
              <div className="property-value property-value-size">XXL</div>
              <div className="property-value property-value-size">XXL</div>
            </div>
          </div>
        </div>
        <div className="quantity">
          <div className="productCode">
            <div>Item Code :</div>
            <div>JHNCHD1BS940IV980</div>
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#e7e3dc",
            }}
          />
          <div className="quantity-option">
            <div className="quantity-input">
              <div onClick={minusBtn} className="quantity-minus quantity-btn">
                <i className="bi bi-dash" />
              </div>
              <div>{quantity}</div>
              <div onClick={plusBtn} className="quantity-plus quantity-btn">
                <i className="bi bi-plus" />
              </div>
            </div>
            <div className="price-calculated">
              <span id="price-calculated">{newPrice}</span>
              <span> VNĐ</span>
            </div>
          </div>
        </div>
        <div className="process">
          <a href="#" className="process-btn addToCartBtn">
            Add To Cart
          </a>
          <a href="#" className="process-btn BuyBtn">
            Buy
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;

import React from "react";
import BestSellerTab from "./BestSellerTab";
import FeatureTab from "./FeatureTab";
import TrendyTab from "./TrendyTab";
import "./ProductSection.css";

const ProductSection = () => {
  return (
    <>
      <div className="container products-section">
        <div className="Products__container">
          <div className="Products__title">Our Products</div>
          <div className="Products__details">
            <ul
              className="nav nav-tabs justify-content-center"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  key={Math.random}
                >
                  Feature
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  key={Math.random}
                >
                  Trendy
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  key={Math.random}
                >
                  Best Seller
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <FeatureTab />
              </div>
              <div
                className="tab-pane fade show "
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <TrendyTab />
              </div>
              <div
                className="tab-pane fade show "
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <BestSellerTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;

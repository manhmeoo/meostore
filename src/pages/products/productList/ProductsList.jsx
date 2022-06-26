import React from "react";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Products from "./Products";
import "./ProductsList.css";

const ProductsList = () => {
  return (
    <>
      <Header></Header>
      <BreadCrumb></BreadCrumb>
      <div className="productList-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3">
              <div className="sub-col">
                <div className="categories-filter">
                  <div className="categories-filter-title">Categories</div>
                  <div className="accordion">
                    <div className="accordion-item">
                      <div className="accordion-item-header">Clothes</div>
                      <div className="accordion-item-body">
                        <div className="accordion-item-body-content">
                          <ul>
                            <li>Top</li>
                            <li>Bottom</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-item-header">Accessories</div>
                      <div className="accordion-item-body">
                        <div className="accordion-item-body-content">
                          <ul>
                            <li>Necklace</li>
                            <li>Earrings</li>
                            <li>Rings</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-item-header">Shoes</div>
                      <div className="accordion-item-body">
                        <div className="accordion-item-body-content">
                          <ul>
                            <li>Highheels</li>
                            <li>Boots</li>
                            <li>Sneakers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-item-header">Bags</div>
                      <div className="accordion-item-body">
                        <div className="accordion-item-body-content">
                          <ul>
                            <li>Backpacks</li>
                            <li>Handbag</li>
                            <li>Wallet</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-item-header">Cosmetics</div>
                      <div className="accordion-item-body">
                        <div className="accordion-item-body-content">
                          <ul>
                            <li>Skincare</li>
                            <li>Make up</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bestSeller">
                  <div />
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="products-col">
                <Products />
                <div className="pagination-details">
                  <div className="pagination">
                    <li className="page-item previous-page disabled">
                      <a className="page-link" href="#">
                        Prev
                      </a>
                    </li>
                    <li className="page-item current-page active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item dots">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item current-page">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li className="page-item current-page">
                      <a className="page-link" href="#">
                        6
                      </a>
                    </li>
                    <li className="page-item dots">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item current-page">
                      <a className="page-link" href="#">
                        10
                      </a>
                    </li>
                    <li className="page-item next-page">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductsList;

import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrumb.css";

const BreadCrumb = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="bi bi-house-door-fill" />
            </Link>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            <Link to="productLists.html">Product Lists</Link>
          </li>
          <li
            className="breadcrumb-item breadcrumb-item-active"
            aria-current="page"
          >
            Products Details
          </li>
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumb;

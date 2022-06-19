import React from "react";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import DetailsInfoSection from "./detailsInfoSection/DetailsInfoSection";
import PreInfoSection from "./preInfoSection/PreInfoSection";
import RelatedProducts from "./relatedProducts/RelatedProducts";

const SingleProduct = () => {
  return (
    <>
      <Header></Header>
      <BreadCrumb></BreadCrumb>
      <PreInfoSection></PreInfoSection>
      <DetailsInfoSection></DetailsInfoSection>
      <RelatedProducts></RelatedProducts>
      <Footer></Footer>
    </>
  );
};

export default SingleProduct;

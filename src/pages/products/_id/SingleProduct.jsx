import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import PreInfoSection from "./preInfoSection/PreInfoSection";

const SingleProduct = () => {
  return (
    <>
      <Header></Header>
      <BreadCrumb></BreadCrumb>
      <PreInfoSection></PreInfoSection>
      <Footer></Footer>
    </>
  );
};

export default SingleProduct;

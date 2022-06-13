import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import About from "./about/About";
import Advertise from "./advertise/Advertise";
import Banner from "./banner/Banner";
import Brandsection from "./brand/Brandsection";

import Categories from "./categories/Categories";
import DayDeal from "./daydeal/DayDeal";
import NewArrival from "./newArrival/NewArrival";
import ProductSection from "./products/ProductSection";
import WelcomeSection from "./welcomeSection/WelcomeSection";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <WelcomeSection></WelcomeSection>
      <About></About>
      <NewArrival></NewArrival>
      <DayDeal></DayDeal>
      <ProductSection></ProductSection>
      <Categories></Categories>
      <Advertise></Advertise>
      <Brandsection></Brandsection>
      <Footer></Footer>
    </>
  );
};

export default Home;

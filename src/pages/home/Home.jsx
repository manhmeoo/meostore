import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import About from "./about/About";
import Banner from "./banner/Banner";
import DayDeal from "./daydeal/DayDeal";
import NewArrival from "./newArrival/NewArrival";
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
      <Footer></Footer>
    </>
  );
};

export default Home;

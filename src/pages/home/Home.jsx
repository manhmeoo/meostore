import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import About from "./about/About";
import Banner from "./banner/Banner";
import WelcomeSection from "./welcomeSection/WelcomeSection";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <WelcomeSection></WelcomeSection>
      <About></About>
      <Footer></Footer>
    </>
  );
};

export default Home;

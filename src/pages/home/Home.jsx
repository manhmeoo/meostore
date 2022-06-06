import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Banner from "./banner/Banner";
import WelcomeSection from "./welcomeSection/WelcomeSection";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <WelcomeSection></WelcomeSection>
      <Footer></Footer>
    </>
  );
};

export default Home;

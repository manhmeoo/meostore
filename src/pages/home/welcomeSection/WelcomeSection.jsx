import React from "react";
import "./WelcomeSection.css";
import Welcome15 from "../../../assets/imgs/welcome15.jpg";
import Welcome12 from "../../../assets/imgs/welcome12.jpg";
import Welcome13 from "../../../assets/imgs/welcome13.jpg";
import Authentic from "../../../assets/imgs/authentic.png";
import Elegant from "../../../assets/imgs/elegant.png";
import Luxury from "../../../assets/imgs/luxury.png";
import Glorious from "../../../assets/imgs/glorious.png";

const WelcomeSection = () => {
  return (
    <>
      <div className="container-fluid" style={{ maxWidth: "1920px" }}>
        <div className="welcome-container">
          <div className="welcome-left">
            <img src={Welcome15} alt="welcome" />
            <div className="campain-details campain1">
              <div className="campain-text season">New Arrivals</div>
              <div className="campain-text main">Winter Collection</div>
              <div className="campain-text sub">Up to 80% off on Clothes</div>
              <button className="campain-text-btn">SHOP NOW</button>
            </div>
          </div>
          <div className="welcome-right">
            <div className="welcome-right-top">
              <img src={Welcome12} alt="welcome" />
              <div className="campain-details campain1">
                <div className="campain-text season">Autumn Sale!</div>
                <div className="campain-text main">New Collection</div>
                <div className="campain-text sub">Up to 75% off</div>
                <button className="campain-text-btn">SHOP NOW</button>
              </div>
            </div>
            <div className="welcome-right-bottom">
              <img src={Welcome13} alt="welcome" />
              <div className="campain-details campain1">
                <div className="campain-text season">Autumn Sale!</div>
                <div className="campain-text main">New Collection</div>
                <div className="campain-text sub">Up to 75% off</div>
                <button className="campain-text-btn">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="welcome-slogan container">
          <div className="welcome-slogan-details">
            <img src={Authentic} className="img-fluid" alt="Authentic" />
            <div className="slogan">Authentic</div>
            <div className="slogan-sup">
              Be authentically, beyoutiful, confidently you
            </div>
          </div>
          <div className="welcome-slogan-details">
            <img src={Elegant} className="img-fluid" alt="Elegant" />
            <div className="slogan">Elegant</div>
            <div className="slogan-sup">
              Not being noticed but about being remembered
            </div>
          </div>
          <div className="welcome-slogan-details">
            <img src={Luxury} className="img-fluid" alt="Luxury" />
            <div className="slogan">Luxury</div>
            <div className="slogan-sup">Never going out of fashion</div>
          </div>
          <div className="welcome-slogan-details">
            <img src={Glorious} className="img-fluid" alt="Glorious" />
            <div className="slogan">Glorious</div>
            <div className="slogan-sup">
              Dress like you are going to meet your worst enemy today
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;

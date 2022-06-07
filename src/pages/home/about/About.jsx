import React from "react";
import "./About.css";
import AboutMainImg from "../../../assets/imgs/aboutSectionImg.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container-fluid aboutSection">
        <div className="row aboutSection-container">
          <div className="col-lg-5 aboutSection__leftContents">
            <div className="about-background" />
            <div className="aboutSection__mainImg">
              <img className="img-fluid" src={AboutMainImg} />
            </div>
          </div>
          <div className="col-lg-7 aboutSection__rightContents">
            <h5>About Us</h5>
            <h2>
              We are Meo's Store.We bring fashion to fulfill your imagination.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              laborum nam a dolores, aliquam necessitatibus vitae soluta amet
              praesentium quia fuga dicta voluptate labore eligendi tempore? Et
              quasi repellat sequi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis dolorum nostrum, commodi velit explicabo quasi ipsam
              necessitatibus! Et earum ipsam in optio repellat sapiente quod.
              Officia libero id optio delectus!
            </p>
            <div className="rightContentsBtn">
              <Link to="about.html">view details ...</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

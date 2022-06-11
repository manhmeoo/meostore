import React from "react";
import "./Footer.css";
import Pay1 from "../../assets/imgs/pay1.png";
import Pay2 from "../../assets/imgs/pay2.png";
import Pay3 from "../../assets/imgs/pay3.png";
import Pay4 from "../../assets/imgs/pay4.png";

const Footer = () => {
  return (
    <>
      <div>
        <div className="sendLecter-Section">
          <div className="container">
            <div className="sendLecter-container">
              <div className="sendLecter-content">
                <i className="bi bi-envelope" />
                <span>SIGN UP TO NEWSLETTER</span>
              </div>
              <div>
                <form className="sendLecter-signUp">
                  <input
                    className="signUp-input"
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="yourEmail@gmail.com"
                  />
                  <div className="sendLecter-submitBtn" type="submit">
                    <i className="bi bi-send" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="container">
            <div className="footer-container row">
              <div className="col-md-3">
                <button
                  className="footer-collapse-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#multiCollapseExample1"
                  aria-expanded="true"
                  aria-controls="multiCollapseExample1"
                >
                  <div className="colapse-btn-details">
                    <span>STORE INFORMATION</span>
                    <i className="bi bi-chevron-down" />
                  </div>
                </button>
                <div id="multiCollapseExample1" className="collapse show">
                  <div className="footer-title">STORE INFORMATION</div>
                  <ul className="footer-list">
                    <li>
                      <i className="bi bi-geo-alt-fill" />
                      <span>
                        1<sup>st</sup> Dai Co Viet,Bach Khoa University,Ha Noi
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-phone-vibrate-fill" />
                      <span>Call Us: 0912345678</span>
                    </li>
                    <li>
                      <i className="bi bi-envelope-fill" />
                      <span>Email Us: Example@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <button
                  className="footer-collapse-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#multiCollapseExample2"
                  aria-expanded="true"
                  aria-controls="multiCollapseExample2"
                >
                  <div className="colapse-btn-details">
                    <span>INFORMATION</span>
                    <i className="bi bi-chevron-down" />
                  </div>
                </button>
                <div id="multiCollapseExample2" className="collapse show">
                  <div className="footer-title">INFORMATION</div>
                  <ul className="footer-list" style={{ color: "black" }}>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <button
                  className="footer-collapse-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#multiCollapseExample3"
                  aria-expanded="true"
                  aria-controls="multiCollapseExample3"
                >
                  <div className="colapse-btn-details">
                    <span>EXTRAS</span>
                    <i className="bi bi-chevron-down" />
                  </div>
                </button>
                <div id="multiCollapseExample3" className="collapse show">
                  <div className="footer-title">EXTRAS</div>
                  <ul className="footer-list" style={{ color: "black" }}>
                    <li>
                      <a href="#">Brands</a>
                    </li>
                    <li>
                      <a href="#">Gift Certificates</a>
                    </li>
                    <li>
                      <a href="#">Affiliates</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Site Map</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <button
                  className="footer-collapse-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#multiCollapseExample4"
                  aria-expanded="true"
                  aria-controls="multiCollapseExample4"
                >
                  <div className="colapse-btn-details">
                    <span>MY ACCOUNT</span>
                    <i className="bi bi-chevron-down" />
                  </div>
                </button>
                <div id="multiCollapseExample4" className="collapse show">
                  <div className="footer-title">MY ACCOUNT</div>
                  <ul className="footer-list" style={{ color: "black" }}>
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">Order History</a>
                    </li>
                    <li>
                      <a href="#">Wish List</a>
                    </li>
                    <li>
                      <a href="#">Newsletter</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="container">
              <div className="socialMedia-links">
                <a href="#">
                  <i className="bi bi-facebook" />
                </a>
                <a href="#">
                  <i className="bi bi-instagram" />
                </a>
                <a href="#">
                  <i className="bi bi-twitter" />
                </a>
                <a href="#">
                  <i className="bi bi-discord" />
                </a>
              </div>
              <div>Powered By ManhMeoo © 2022</div>
              <div className="payment-methods">
                <a href="#">
                  <img src={Pay1} />
                </a>
                <a href="#">
                  <img src={Pay2} />
                </a>
                <a href="#">
                  <img src={Pay3} />
                </a>
                <a href="#">
                  <img src={Pay4} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

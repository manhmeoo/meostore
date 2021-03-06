import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import "./DayDeal.css";
import DealImg1 from "../../../assets/imgs/daily.png";
import DealImg2 from "../../../assets/imgs/daily1.png";
import DealImg3 from "../../../assets/imgs/daily2.png";
import { Link } from "react-router-dom";

const DayDeal = () => {
  const countdown = () => {
    const countDate = new Date("Jan 1, 2035 00:00:00").getTime();
    const now = new Date().getTime();
    const remainingTime = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);
    for (
      let i = 0;
      i < document.querySelectorAll(".timeRemainHours").length;
      i++
    ) {
      document.querySelectorAll(".timeRemainHours")[i].innerText =
        textHour > 0 ? textHour : 0;
      document.querySelectorAll(".timeRemainMins")[i].innerText =
        textMinute > 0 ? textMinute : 0;
      document.querySelectorAll(".timeRemainSecs")[i].innerText =
        textSecond > 0 ? textSecond : 0;
    }
  };

  setInterval(countdown, 1000);
  return (
    <>
      <div className="deal-section" id="deal-section">
        <Swiper
          speed={1000}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper swiper DealSwiper container"
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="swiper-slide dealDetails-container row">
                <div className="col-md-4 deal-image-container">
                  <img className="deal-img" src={DealImg1} alt="deal" />
                  <div className="deal-discount">-30%</div>
                </div>
                <div className="col-md-8 deal-content">
                  <h3 className="deal-title">
                    HOT <span>DEALS</span>
                  </h3>
                  <p className="deal-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, inventore harum! Earum quaerat unde quae
                    placeat. Dignissimos vel sed, at quos eveniet, modi
                    doloribus laborum iste nesciunt, consequuntur porro rerum?
                  </p>
                  <div className="deal-countDown">
                    <div className="DetailTime">
                      <div
                        id="timeRemainHours"
                        className="circleTime timeRemainHours"
                      >
                        23
                      </div>
                      <div className="timeSub">Hours</div>
                    </div>
                    <div className="DetailTime">
                      <div
                        id="timeRemainMins"
                        className="circleTime timeRemainMins"
                      >
                        50
                      </div>
                      <div className="timeSub">Minutes</div>
                    </div>
                    <div className="DetailTime">
                      <div
                        id="timeRemainSecs"
                        className="circleTime timeRemainSecs"
                      >
                        23
                      </div>
                      <div className="timeSub">Seconds</div>
                    </div>
                  </div>
                  <div className="sell-btn">
                    <Link
                      to="ProductDetails.html"
                      className="buyBtn btn2"
                      type="button"
                    >
                      <i className="fas fa-cart-plus" />
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide dealDetails-container row">
                <div className="col-md-4 deal-image-container">
                  <img className="deal-img" src={DealImg2} alt="deal" />
                  <div className="deal-discount">-50%</div>
                </div>
                <div className="col-md-8 deal-content">
                  <h3 className="deal-title">
                    HOT <span>DEALS</span>
                  </h3>
                  <p className="deal-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, inventore harum! Earum quaerat unde quae
                    placeat. Dignissimos vel sed, at quos eveniet, modi
                    doloribus laborum iste nesciunt, consequuntur porro rerum?
                  </p>
                  <div className="deal-countDown">
                    <div className="DetailTime">
                      <div
                        id="timeRemainHours"
                        className="circleTime timeRemainHours"
                      >
                        23
                      </div>
                      <div className="timeSub">Hours</div>
                    </div>
                    <div className="DetailTime">
                      <div
                        id="timeRemainMins"
                        className="circleTime timeRemainMins"
                      >
                        50
                      </div>
                      <div className="timeSub">Minutes</div>
                    </div>
                    <div className="DetailTime">
                      <div
                        id="timeRemainSecs"
                        className="circleTime timeRemainSecs"
                      >
                        23
                      </div>
                      <div className="timeSub">Seconds</div>
                    </div>
                  </div>
                  <div className="sell-btn">
                    <Link
                      to="ProductDetails.html"
                      className="buyBtn btn2"
                      type="button"
                    >
                      <i className="fas fa-cart-plus" />
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide dealDetails-container row">
                <div className="col-md-4 deal-image-container">
                  <img className="deal-img" src={DealImg3} alt="deal" />
                  <div className="deal-discount">-50%</div>
                </div>
                <div className="col-md-8 deal-content">
                  <h3 className="deal-title">
                    HOT <span>DEALS</span>
                  </h3>
                  <p className="deal-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, inventore harum! Earum quaerat unde quae
                    placeat. Dignissimos vel sed, at quos eveniet, modi
                    doloribus laborum iste nesciunt, consequuntur porro rerum?
                  </p>
                  <div className="deal-countDown">
                    <div className="DetailTime">
                      <div
                        id="timeRemainHours"
                        className="circleTime timeRemainHours"
                      >
                        23
                      </div>
                      <div className="timeSub">Hours</div>
                    </div>
                    <div className="DetailTime">
                      <div
                        id="timeRemainMins"
                        className="circleTime timeRemainMins"
                      >
                        50
                      </div>
                      <div className="timeSub">Minutes</div>
                    </div>
                    <div className="DetailTime">
                      <div
                        id="timeRemainSecs"
                        className="circleTime timeRemainSecs"
                      >
                        23
                      </div>
                      <div className="timeSub">Seconds</div>
                    </div>
                  </div>
                  <div className="sell-btn">
                    <Link
                      to="ProductDetails.html"
                      className="buyBtn btn2"
                      type="button"
                    >
                      <i className="fas fa-cart-plus" />
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default DayDeal;

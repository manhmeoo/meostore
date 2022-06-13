import React from "react";
import { Link } from "react-router-dom";
import Advertiseimg from "../../../assets/imgs/advertise.jpg";
import DayDeal from "../daydeal/DayDeal";
import "./Advertise.css";

const Advertise = () => {
  return (
    <>
      <div className="advert">
        <img className="advert-img" src={Advertiseimg} alt="advertse" />
        <div className="advert-content">
          <div className="advert-title advert-subTitle">Hurry Up !</div>
          <div className="advert-title advert-mainTitle">
            <span>Hurry Up!</span> Daily Deal Of The Day
          </div>
          <div className="advert-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus porro ducimus harum eos nisi dicta laborum natus
            cupiditate iste animi ad cum corrupti maxime aspernatur fugit,
            dignissimos, temporibus sapiente? Magni. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Sint accusantium temporibus deleniti
            consectetur doloribus, nobis praesentium.
          </div>
          <Link type="button" className="adver-btn" to={DayDeal}>
            DISCOVER NOW
          </Link>
        </div>
      </div>
    </>
  );
};

export default Advertise;

import React from "react";
import cloth from "../../../assets/imgs/categories/cloth.jpeg";
import others from "../../../assets/imgs/categories/others.jpeg";
import bags from "../../../assets/imgs/categories/bags.jpg";
import shoes from "../../../assets/imgs/categories/shoes.jpg";
import assecories from "../../../assets/imgs/categories/assecories.jpg";
import "./Categories.css";

const Categories = () => {
  return (
    <>
      <div className="container categories-section">
        <h2 className="categories-title">Shop By Categories</h2>
        <div className="indexCategories-container">
          <div className="img-leftContent">
            <img className="img-fluid" src={cloth} alt="cloth" />
            <div className="categories-text categories-text-big">
              <a>Clothes</a>
            </div>
          </div>
          <div className="img-rightContent">
            <div className="img-rightContent-each">
              <img className="img-fluid" src={others} alt="others" />
              <div className="categories-text">
                <a>Cosmetics</a>
              </div>
            </div>
            <div className="img-rightContent-each">
              <img className="img-fluid" src={bags} alt="bags" />
              <div className="categories-text">
                <a>Bags</a>
              </div>
            </div>
            <div className="img-rightContent-each">
              <img className="img-fluid" src={shoes} alt="shoes" />
              <div className="categories-text">
                <a>Shoes</a>
              </div>
            </div>
            <div className="img-rightContent-each">
              <img className="img-fluid" src={assecories} alt="assecories" />
              <div className="categories-text">
                <a>Accessories</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;

import React from "react";
import "./DetailsInfoSection.css";
import NoticeSection from "./NoticeSection";
import ProductInfoTab from "./ProductInfoTab";
import QuestionTab from "./QuestionTab";
import TransporttationTab from "./TransporttationTab";

const DetailsInfoSection = () => {
  return (
    <>
      <div className="details-infoSection">
        <div className="container">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-Question-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-Question"
                type="button"
                role="tab"
                aria-controls="nav-Question"
                aria-selected="true"
              >
                Q&amp;A<sup className="QuestQuantity">(2)</sup>
              </button>
              <button
                className="nav-link"
                id="nav-transportation-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-transportation"
                type="button"
                role="tab"
                aria-controls="nav-transportation"
                aria-selected="true"
              >
                Shipping/Return/Exchange
              </button>
              <button
                className="nav-link"
                id="nav-Notice-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-Notice"
                type="button"
                role="tab"
                aria-controls="nav-Notice"
                aria-selected="true"
              >
                Product Notice
              </button>
              <button
                className="nav-link"
                id="nav-ProductInfo-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-ProductInfo"
                type="button"
                role="tab"
                aria-controls="nav-ProductInfo"
                aria-selected="true"
              >
                Product Information
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-Question"
              role="tabpanel"
              aria-labelledby="nav-Question-tab"
            >
              <QuestionTab />
            </div>
            <div
              className="tab-pane fade show"
              id="nav-transportation"
              role="tabpanel"
              aria-labelledby="nav-transportation-tab"
            >
              <TransporttationTab />
            </div>
            <div
              className="tab-pane fade show"
              id="nav-Notice"
              role="tabpanel"
              aria-labelledby="nav-Notice-tab"
            >
              <NoticeSection />
            </div>
            <div
              className="tab-pane fade show "
              id="nav-ProductInfo"
              role="tabpanel"
              aria-labelledby="nav-ProductInfo-tab"
            >
              <ProductInfoTab />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsInfoSection;

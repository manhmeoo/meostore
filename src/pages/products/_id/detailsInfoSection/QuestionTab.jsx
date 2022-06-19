import React from "react";
import DemoReviewImg from "../../../../assets/imgs/product1/demo-review.jpeg";

const QuestionTab = () => {
  return (
    <>
      <div className="Question-tab-container">
        <div className="question-input-container">
          <div className="question-input-title">
            <div className="input-title">Write a product Q&amp;A</div>
            <div className="words-count">
              <span id="wordsCounted">0</span>
              <span> / 500</span>
            </div>
          </div>
          <div className="question-input-place">
            <textarea
              maxLength={500}
              id="wordsQuantity"
              name="wordsQuantity"
              className="question-input"
              defaultValue={""}
            />
          </div>
          <div className="question-input-buttons">
            <button type="button" className="input-btn">
              <i className="far fa-images" />
              <span> images</span>
            </button>
            <button type="button" className="input-btn">
              <i className="far fa-file" />
              <span> files</span>
            </button>
            <button type="button" className="submit-btn input-btn">
              Submit
            </button>
          </div>
        </div>
        <div className="answer-container">
          <div className="answer-title">
            <span>Answered</span>
            <span>
              <sup className="QuestQuantity">(2)</sup>
            </span>
          </div>
          <div className="answer-details-container">
            <div className="row">
              <div className="col-10">
                <div className="answered-topic">Topic Here</div>
                <div className="answered-details">
                  <div className="answered-details-question">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Neque iusto animi ea exercitationem saepe rerum corrupti
                      sed in dolorem deserunt, doloremque, eaque praesentium
                      maxime similique quis, ad quidem nam quo?
                    </p>
                    <img
                      className="answered-question-img"
                      src={DemoReviewImg}
                      alt="a"
                    />
                  </div>
                  <div className="answered-details-contents">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat nesciunt vero odit et. Quos, esse voluptate
                    reprehenderit voluptates necessitatibus maxime ab ipsa
                    blanditiis ipsum, numquam, ad praesentium quis illo
                    doloribus?
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="answered-details-subInfo">
                  <div className="answered-details-subInfo-title">Writer</div>
                  <div className="answered-details-subInfo-info">ManhMeoo</div>
                </div>
                <div className="answered-details-subInfo">
                  <div className="answered-details-subInfo-title">Date</div>
                  <div className="answered-details-subInfo-info">
                    2021/01/20
                  </div>
                </div>
                <div className="answered-details-subInfo">
                  <div className="answered-details-subInfo-title">
                    Answer By
                  </div>
                  <div className="answered-details-subInfo-info">
                    ManhMeooAdmin
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="answer-details-container">
            <div className="row">
              <div className="col-10">
                <div className="answered-topic">Topic Here</div>
                <div className="answered-details">
                  <div className="answered-details-question">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Neque iusto animi ea exercitationem saepe rerum corrupti
                      sed in dolorem deserunt, doloremque, eaque praesentium
                      maxime similique quis, ad quidem nam quo?
                    </p>
                    <img
                      className="answered-question-img"
                      src={DemoReviewImg}
                      alt="a"
                    />
                  </div>
                  <div className="answered-details-contents">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat nesciunt vero odit et. Quos, esse voluptate
                    reprehenderit voluptates necessitatibus maxime ab ipsa
                    blanditiis ipsum, numquam, ad praesentium quis illo
                    doloribus?
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="answered-details-subInfo">
                  <div className="answered-details-subInfo-title">Writer</div>
                  <div className="answered-details-subInfo-info">ManhMeoo</div>
                </div>
                <div className="answered-details-subInfo">
                  <div className="answered-details-subInfo-title">Date</div>
                  <div className="answered-details-subInfo-info">
                    2021/01/20
                  </div>
                </div>
                <div className="answered-details-subInfo">
                  <div className="answered-details-subInfo-title">
                    Answer By
                  </div>
                  <div className="answered-details-subInfo-info">
                    ManhMeooAdmin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionTab;

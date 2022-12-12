import React from "react";
import Data from "../../Data/Reviewdata";
const Review = () => {
  return (
    <div>
      <section className="review" id="review">
        <h1 className="heading">
          {" "}
          customer's <span>review</span>{" "}
        </h1>

        <div className="box-container">
          {Data.map((item) => {
            return (
              <>
                <div className="box">
                  <img src={item.image} alt="" className="quote" />
                  <p>
                   {item.comment}
                  </p>
                  <img src={item.person} className="user" alt="" />
                  <h3>{item.name}</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div> 
  );
};

export default Review;

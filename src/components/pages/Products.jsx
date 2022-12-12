import React from "react";
import Data from "../../Data/Productdata";
import Review from "./Review";
const Products = () => {
  return (
    <div>
      <section className="products" id="products">
        <h1 className="heading">
          {" "}
          our <span>products</span>{" "}
        </h1>

        <div className="box-container">
          {Data.map((item) => {
            return (
              <>
                <div className="box">
                  <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                  </div>
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="content">
                    <h3>{item.desc}</h3>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div className="price">
                      {item.price} <span>$20.99</span>
                    </div>
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

export default Products;

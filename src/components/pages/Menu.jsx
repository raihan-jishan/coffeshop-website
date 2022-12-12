import React from "react";
import Data from "../../Data/Menudata"; 
import Button from "../Button";
const Menu = () => {
  return (
    <div>
      <section className="menu" id="menu">
        <h1 className="heading">
          {" "}
          our <span>menu</span>{" "}
        </h1>

        <div className="box-container">
          {Data.map((item) => {
            return (
              <>
                <div className="box">
                  <img src={item.image} alt="" />
                  <h3>{item.title}</h3>
                  <div className="price">
                    {" "}
                    {item.price}
                    <span>20.99</span>
                  </div>

                  <Button>{item.button}</Button>
                </div>
              </>
            );
          })}
        </div>
      </section>
     
    </div>
  );
};

export default Menu;

import React from "react";
import Data from "../../Data/Alldata";
import Button from "../Button";
import About from "./About";
import Menu from "./Menu";
import Products from "./Products";
import Review from "./Review";
import Contact from "./Contact";
import Blog from "./Blog";
const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          {Data.map((item) => {
            return (
              <>
                <h3>{item.title}</h3>
                <p>{item.para}</p>

                <Button>{item.button}</Button>
              </>
            );
          })}
        </div>
      </section>
          <About />
          <Menu />
          <Products /> 
          <Review /> 
          <Contact />
          <Blog /> 
    </div>
  );
};

export default Home;

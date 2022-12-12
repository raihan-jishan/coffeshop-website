import React, { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  //  cartsubmit

  return (
    <div>
      <header className="header">
        <a href="#" className="logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="" />
        </a>

        <nav className={click ? "navbar active" : "navbar"}>
          <a href="#home" onClick={closeMobileMenu}>
            {" "}
            Home
          </a>
          <a href="#about" onClick={closeMobileMenu}>
            about
          </a>
          <a href="#menu" onClick={closeMobileMenu}>
            menu
          </a>
          <a href="#products" onClick={closeMobileMenu}>
            products
          </a>
          <a href="#review" onClick={closeMobileMenu}>
            review
          </a>
          <a href="#contact" onClick={closeMobileMenu}>
            contact
          </a>
          <a href="#blogs" onClick={closeMobileMenu}>
            blogs
          </a>
        </nav>

        <div className="icons">
          <div className="fas fa-search" id="search-btn"></div>
          <div className="fas fa-shopping-cart" id="cart-btn"></div>
          <div
            onClick={handleClick}
            className={click ? "fas fa-times" : "fas fa-bars"}
            id="menu-btn"
          ></div>
        </div>

        <div className="search-form">
          <input type="search" id="search-box" placeholder="search here..." />
          <label for="search-box" className="fas fa-search"></label>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

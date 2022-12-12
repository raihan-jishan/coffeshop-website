import React from "react";
import "../styles//Button.css";
const Button = ({ children }) => {
  return (
    <div>
      <a href="#" class="btn">
        {children}
      </a>
    </div>
  );
};

export default Button;

import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! I am</h5>
        <h1>S. Rohit Kumar</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <CTA />

        <div className="me">
          Engineer. <br>
          Programmer. <br>
          Student. <br>
        </div>

        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

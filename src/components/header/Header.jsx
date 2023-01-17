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
          I am a highly motivated and diligent 3rd-year student pursuing a
          bachelor's degree in Computer science and engineering with a
          specialization in business systems with great analytical, technical,
          and programming skills
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

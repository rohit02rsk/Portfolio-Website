import React, { useContext } from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { NavContext } from "../../contexts/NavContext";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        R. S. K
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/rohit.btw/">
          <BsInstagram />
        </a>
        <a href="https://github.com/rohit02rsk">
          <FiGithub />
        </a>
        <a href="https://leetcode.com/rohvit/">
          <SiLeetcode />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; S Rohit Kumar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

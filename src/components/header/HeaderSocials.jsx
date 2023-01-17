import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/s-rohit-kumar-214177233/"
        target="_blank"
      >
        <GrLinkedin />
      </a>
      <a href="https://github.com/rohit02rsk" target="_blank">
        <VscGithub />
      </a>
      <a href="https://leetcode.com/rohvit/" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocials;

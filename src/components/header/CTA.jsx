import React from "react";
import resume from "../../assets/CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} className="btn" target="_blank">
        View resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact me!
      </a>
    </div>
  );
};

export default CTA;

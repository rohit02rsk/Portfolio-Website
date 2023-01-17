import React from "react";
import "./about.css";
import MyImage from "../../assets/Photo.png";
import { BiCodeAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { AiFillProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MyImage} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiCodeAlt />
              <h5>Been coding for</h5>
              <small>3+ years</small>
            </article>

            <article className="about__card">
              <FiUsers />
              <h5>Collaborated with</h5>
              <small>20+ people</small>
            </article>

            <article className="about__card">
              <AiFillProject />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Hi! My name is Rohit and I am passionate about developing scalable
            applications and working across the entire tech stack. I am looking
            for a company to continue to grow my skill set while also
            contributing to the positive outcome of exceeding the user's
            expectations.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact me!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./experience.css";
import { GiSpiderWeb } from "react-icons/gi";
import { HiDatabase } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__web">
          <h3>Application Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GiSpiderWeb />
              <div>
                <h4>HTML, CSS, JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <GiSpiderWeb />
              <div>
                <h4>React</h4>
                <small className="text-light">Beginner ~ Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <GiSpiderWeb />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <GiSpiderWeb />
              <div>
                <h4>EJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <GiSpiderWeb />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <GiSpiderWeb />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <GiSpiderWeb />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <GiSpiderWeb />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <GiSpiderWeb />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPhone />
              <div>
                <h4>Flutter and Dart</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPhone />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__DSA">
          <h3>Data Structures and Algorithms</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiDatabase />
              <div>
                <h4>C/C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiDatabase />
              <div>
                <h4>Data Structures</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiDatabase />
              <div>
                <h4>Algorithms</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

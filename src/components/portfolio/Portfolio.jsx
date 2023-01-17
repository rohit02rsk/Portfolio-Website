import React from "react";
import "./portfolio.css";
import CamAd from "../../assets/CampAdvisor.png";
import SudSol from "../../assets/SudokuSolver.png";
import ExPl from "../../assets/flutter.png";
import PyPr from "../../assets/python.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={CamAd} alt="camp advisor" />
          </div>
          <h3>CampAdvisor</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rohit02rsk/Camp-Advisor"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://campadvisor-l3i0.onrender.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SudSol} alt="sudoku solver" />
          </div>
          <h3>Sudoku Solver</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rohit02rsk/Sudoku-Solver"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="http://sudoku-solver-rohit02rsk.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ExPl} alt="expense planner" />
          </div>
          <h3>Expense Planner</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rohit02rsk/Expense-Planner-Application"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PyPr} alt="camp advisor" />
          </div>
          <h3>Python Mini-projects</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rohit02rsk/Python-projects"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

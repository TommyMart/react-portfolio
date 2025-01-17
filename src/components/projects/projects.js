import "./projects.css";
import api from "../../assets/api.png";
import pythonApp from "../../assets/highscores.png";
import pokemon from "../../assets/pokemon.png";
import diceRoller from "../../assets/diceRollingApp.png";
import portfolio from "../../assets/react-portfolio.png";
import chatbot from "../../assets/chatbot.png";
import surveyBuddy from "../../assets/surveyBuddy.png";
import latestPortfolio from "../../assets/portfolio25.png";

import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">Projects</h2>
      <span className="projectsDesc">
        The projects in my portfolio come from a mix of academic assignments,
        personal passion projects, and ongoing work. Some were built as part of
        structured coursework, where I applied theoretical knowledge to create
        real-world, functional applications. Others were developed purely for
        fun, driven by my curiosity to explore new technologies and sharpen my
        skills.
      </span>

      <div className="projects">
        <div className="projectBar">
          <div className="projectBarText">
            <h2 className="projectTitle">Portfolio 2.0</h2>
            <img src={latestPortfolio} alt="" className="projectBarImg"></img>

            <p className="projectDesc">
              This updated portfolio showcases my growth as a developer,
              building on my original site with a focus on modular components
              and improved user experience. Using Chakra UI instead of vanilla
              CSS, I created a cleaner, more responsive design that highlights
              my ability to work with reusable components and modern styling
              tools. It’s a testament to my progress and dedication to
              continuous improvement.
            </p>
            <a
              href="https://tommartin-portfolio25.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="repoBtn">View Website</button>
            </a>
          </div>
        </div>
        <div className="projectBar">
          <div className="projectBarText">
            <h2 className="projectTitle">SurveyBuddy</h2>
            <img src={surveyBuddy} alt="" className="projectBarImg"></img>

            <p className="projectDesc">
              SurveyBuddy is a user-friendly full-stack web application that
              streamlines survey creation, sharing, and data collection while
              offering intuitive data visualisation through charts and graphs.
              Developed as my capstone project at Coder Academy, it utilises
              TypeScript, React, ShadCN, Express, Node.js, and MongoDB Atlas to
              deliver a seamless and efficient experience. Designed with
              simplicity and functionality in mind, SurveyBuddy helps users
              easily create surveys and analyse results with clarity.
            </p>
            <a
              href="https://surveybuddy.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="repoBtn">View Website</button>
            </a>
          </div>
        </div>

        <div className="projectBar">
          <div className="projectBarText">
            <h2 className="projectTitle">API Webserver</h2>
            <img src={api} alt="" className="projectBarImg"></img>

            <p className="projectDesc">
              One of my notable projects, completed as part of an assignment for
              which I received a high distinction, was my introduction to
              backend development and working with APIs. I built a RESTful API
              web server using Python, Flask, SQLAlchemy, and PostgreSQL, where
              user information is authorised via JWT and securely hashed using
              Bcrypt. This project helped me develop a deep understanding of API
              architecture and secure user authentication systems.
            </p>
            <a
              href="https://github.com/TommyMart/Event_communication-ticketing_API"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="repoBtn">View Repository</button>
            </a>
          </div>
        </div>
        <div className="projectBar">
          <div className="projectBarText">
            <h2 className="projectTitle">Terminal Application</h2>
            <img src={pythonApp} alt="" className="projectBarImg"></img>
            <p className="projectDesc">
              As part of an assignment for which I received a high distinction,
              I built a fully functional quiz night terminal application using
              Python, Bash scripting, and rich styling for an enhanced user
              experience. This project required creating an intuitive
              command-line interface, handling user input, and managing quiz
              logic and scoring. The use of Python allowed for efficient data
              processing, while Bash scripting helped automate various tasks
              within the terminal environment. This project significantly
              enhanced my understanding of backend logic and provided valuable
              experience in building interactive console applications.
            </p>
            <a
              href="https://github.com/TommyMart/QuizNight_Terminal_Application"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="repoBtn">View Repository</button>
            </a>
          </div>
        </div>
        <div className="projectBar">
          <div className="projectBarText">
            <h2 className="projectTitle">Portfolio Website</h2>
            <img src={portfolio} alt="" className="projectBarImg"></img>
            <p className="projectDesc">
              This portfolio website, developed using React, showcases my
              expertise in modern web development. It leverages powerful tools
              such as React Scroll, React Router, EmailJS, and hooks to create a
              seamless and interactive user experience. The minimalist design
              not only highlights my projects but also embodies a contemporary
              aesthetic, ensuring a clean and engaging interface.
            </p>
            <a
              href="https://github.com/TommyMart/react-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="repoBtn">View Repository</button>
            </a>
          </div>
        </div>
        <div className="projectBar">
          <div className="projectBarText">
            <h2 className="projectTitle">Tutorial Chat Bot</h2>
            <img src={chatbot} alt="" className="projectBarImg"></img>
            <p className="projectDesc">
              The OpenAI Electronic Music Tutorial App is an innovative platform
              designed to help users enhance their music production skills in
              electronic genres. By leveraging the power of OpenAI's language
              model, the app provides personalised guidance dynamically tailored
              to each user's experience level, age, and preferred production
              methods. Users can engage in dynamic conversations with the AI,
              asking questions and receiving real-time feedback and tutorials,
              all while exploring various aspects of electronic music creation.{" "}
            </p>
            <a
              href="https://github.com/TommyMart/music-chat-bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="repoBtn">View Repository</button>
            </a>
          </div>
        </div>

        <div className="projectBar">
          <div className="projectBarText">
            <h2 className="projectTitle">Pokemon API Game</h2>
            <img src={pokemon} alt="" className="projectBarImg"></img>
            <p className="projectDesc">
              Dive into the exciting world of my Pokemon Browser Game, built
              with JavaScript and the Pokemon API. In this interactive web
              application, players can catch Pokemon that appear on the screen
              using their Pokemon ball cursor, aiming for a high score. The game
              features a competitive scoreboard to track your best catches and
              allows users to switch between different themes for a personalised
              experience. This project highlights my skills in API integration,
              event handling, and creating engaging user interfaces, all while
              celebrating the fun of Pokemon-catching.
            </p>
            <a
              href="https://catch-a-pokemon.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="repoBtn">View Website</button>
            </a>
          </div>
        </div>
        <div className="projectBar">
          <div className="projectBarText">
            <h2 className="projectTitle">Dice Rolling Application</h2>
            <img src={diceRoller} alt="" className="projectBarImg"></img>
            <p className="projectDesc">
              The dice rolling app is a dynamic and interactive tool designed to
              simulate the rolling of dice, offering users a visually appealing
              and engaging experience. Built using JavaScript, HTML, and CSS,
              the app allows users to input a desired dice size (ranging from 1
              to 20 sides) and roll the dice to generate a random outcome. It
              also includes a fun "Count to 100" game.
            </p>
            <a
              href="https://github.com/TommyMart/Dice_Rolling_App/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="repoBtn">View Website</button>
            </a>
          </div>
        </div>
      </div>
      <div className="alertMessage">
        <p>More Coming Soon!</p>
      </div>
    </section>
  );
};

export default Projects;

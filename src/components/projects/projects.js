
import './projects.css';
import api from '../../assets/api.png'
import pythonApp from '../../assets/highscores.png'
import pokemon from '../../assets/pokemon.png'
import diceRoller from '../../assets/diceRollingApp.png'


import React from 'react'

const Projects = () => {
  return (
    <section id='projects'>
        <h2 className='projectsTitle'>Projects</h2>
        <span className='projectsDesc'>The projects in my portfolio come from a mix of academic assignments, personal passion projects, and ongoing work, not yet including my current full-stack application using the MERN stack for my final assignment. Some were built as part of structured coursework, where I applied theoretical knowledge to create real-world, functional applications. Others were developed purely for fun, driven by my curiosity to explore new technologies and sharpen my skills. This blend of formal education, self-directed exploration, and continuous project development has strengthened my expertise as a full-stack developer.</span>
        <div className='projects'>
            <div className='projectBar'>
                
                <div className='projectBarText'>
                    <h2 className='projectTitle'>API Webserver</h2>
                    <img src={api} alt='' className='projectBarImg'></img>
                    
                    <p className='projectDesc'>One of my notable projects, completed as part of an assignment for which I received a high distinction, was my introduction to backend development and working with APIs. I built a RESTful API web server using Python, Flask, SQLAlchemy, and PostgreSQL, where user information is authorised via JWT and securely hashed using Bcrypt. This project helped me develop a deep understanding of API architecture and secure user authentication systems.</p>
                    <a href="https://github.com/TommyMart/Event_communication-ticketing_API" target="_blank" rel="noopener noreferrer" >
                    <button className='repoBtn'>View Repository</button>
                    </a>
                </div>
            </div>
            <div className='projectBar'>
                <div className='projectBarText'>
                    <h2 className='projectTitle'>Terminal Application</h2>
                    <img src={pythonApp} alt='' className='projectBarImg'></img>
                    <p className='projectDesc'>As part of an assignment for which I received a high distinction, I built a fully functional quiz night terminal application using Python, Bash scripting, and rich styling for an enhanced user experience. This project required creating an intuitive command-line interface, handling user input, and managing quiz logic and scoring. The use of Python allowed for efficient data processing, while Bash scripting helped automate various tasks within the terminal environment. This project significantly enhanced my understanding of backend logic and provided valuable experience in building interactive console applications.</p>
                    <a href="https://github.com/TommyMart/QuizNight_Terminal_Application" target="_blank" rel="noopener noreferrer">
                    <button className='repoBtn'>View Repository</button>
                    </a>
                </div>
            </div>
            <div className='projectBar'>
                
                <div className='projectBarText'>
                    <h2 className='projectTitle'>Pokemon API Game</h2>
                    <img src={pokemon} alt='' className='projectBarImg'></img>
                    <p className='projectDesc'>Dive into the exciting world of my Pokemon Browser Game, built with JavaScript and the Pokemon API. In this interactive web application, players can catch Pokemon that appear on the screen using their Pokemon ball cursor, aiming for a high score. The game features a competitive scoreboard to track your best catches and allows users to switch between different themes for a personalised experience. This project highlights my skills in API integration, event handling, and creating engaging user interfaces, all while celebrating the fun of Pokemon-catching</p>
                    <a href="https://catch-a-pokemon.netlify.app" target="_blank" rel="noopener noreferrer">
                    <button className='repoBtn'>Visit Website</button>
                    </a>
                </div>
            </div>
            <div className='projectBar'>
                
                <div className='projectBarText'>
                    <h2 className='projectTitle'>Dice Rolling Application</h2>
                    <img src={diceRoller} alt='' className='projectBarImg'></img>
                    <p className='projectDesc'>The dice rolling app is a dynamic and interactive tool designed to simulate the rolling of dice, offering users a visually appealing and engaging experience. Built using JavaScript, HTML, and CSS, the app allows users to input a desired dice size (ranging from 1 to 20 sides) and roll the dice to generate a random outcome. It also includes a fun "Count to 100" game.</p>
                    <a href="https://github.com/TommyMart/Dice_Rolling_App/" target="_blank" rel="noopener noreferrer">
                    <button className='repoBtn'>Visit Website</button>
                    </a>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Projects
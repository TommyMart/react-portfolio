import React from "react";
import "./skills.css";
import code from "../../assets/code.png";
import web from "../../assets/web.png";
import image from "../../assets/image.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">
        <h1 className="aboutMeTitle">About Me</h1>
      </span>
      <p className="skillsDesc">
        Tom is an enthusiastic and versatile junior full-stack developer with a
        deep passion for the rapidly evolving tech landscape. With a foundation
        in marketing, visual design, and full-stack development, Tom seamlessly
        combines creativity with technical proficiency, crafting user-centered
        applications that are as functional as they are visually compelling.
        Known for his keen attention to detail, logical thinking, and dedication
        to continuous learning, Tom is motivated by the exciting possibilities
        within the tech industry, from AI-driven innovations to the growing
        emphasis on sustainability. He aims to build solutions that not only
        enhance user experiences but also positively impact society and the
        environment.
      </p>
      <br />

      <div className="skillBars">
        <div className="skillBar">
          <img src={image} alt="" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Front-End Development</h2>
            <p className="skillsDesc">
              My frontend expertise includes HTML, CSS, JavaScript and React,
              complemented by my proficiency with design tools like Adobe
              Creative Suite and Figma, which allow me to bring creative visions
              to life.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={code} alt="" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Back-End Development</h2>
            <p className="skillsDesc">
              I have a solid knowledge of backend technologies such as Node.js,
              Express, Flask, PostgreSQL, and MongoDB. This combination enables
              me to build not only aesthetically pleasing but also robust,
              scalable, and high-performing applications.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={web} alt="" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p className="skillsDesc">
              I have a strong foundation in UI/UX design, with a focus on
              crafting intuitive, user-friendly interfaces that balance
              aesthetics and functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

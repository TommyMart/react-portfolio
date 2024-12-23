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
        deep passion for the rapidly evolving tech landscape, including
        advancements in AI and emerging digital innovations. With a foundation
        in marketing, visual design, and full-stack development, Tom seamlessly
        combines creativity with technical proficiency, crafting user-centered
        applications that are as functional as they are visually compelling. His
        academic background and hands-on experience enable him to integrate
        design and functionality while navigating the fast-paced challenges of
        today’s technology. Known for his keen attention to detail, logical
        thinking, and dedication to continuous learning, Tom is motivated by the
        exciting possibilities within the tech industry, from AI-driven
        innovations to the growing emphasis on sustainability. He aims to build
        solutions that not only enhance user experiences but also positively
        impact society and the environment, driving both personal and
        professional growth.
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
              I have a deep passion and solid knowledge in backend technologies
              such as Node.js, Express, Flask, PostgreSQL, and MongoDB. This
              combination enables me to build not only aesthetically pleasing
              but also robust, scalable, and high-performing applications.
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
              aesthetics and functionality. My approach ensures that every
              design element, from layout to interaction, enhances the overall
              user experience, leading to visually engaging and seamless
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

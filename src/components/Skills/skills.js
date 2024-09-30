import React from 'react';
import './skills.css';
import code from '../../assets/code.png'
import web from '../../assets/web.png'
import image from '../../assets/image.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'><h1 className='aboutMeTitle'>About Me</h1></span>
        <p className='skillsDesc'>Tom is an enthusiastic and skilled junior full-stack developer with a strong background in creating visually appealing and user-friendly applications. He holds a bachelor's degree in marketing and a diploma in visual design, which, alongside his recent education in full-stack web development, enables him to seamlessly integrate design and functionality in every project. Known for his keen eye for detail, logical thinking, and strong work ethic, Tom is inherently self-motivated and dedicated to achieving his goals. He seeks to channel his passion and determination into a career that fosters professional growth while creating innovative applications that contribute positively to society and the environment.</p><br/>
        
        <div className="skillBars">
        <div className='skillBar'>
                <img src={image} alt='' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Front-End Development</h2>
                    <p className='skillsDesc'>My frontend expertise includes HTML, CSS, JavaScript and React, complemented by my proficiency with design tools like Adobe Creative Suite and Figma, which allow me to bring creative visions to life.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={code} alt='' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Back-End Development</h2>
                    <p className='skillsDesc'>I have a deep passion and solid knowledge in backend technologies such as Node.js, Express, Flask, PostgreSQL, and MongoDB. This combination enables me to build not only aesthetically pleasing but also robust, scalable, and high-performing applications.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={web} alt='' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p className='skillsDesc'>I have a strong foundation in UI/UX design, with a focus on crafting intuitive, user-friendly interfaces that balance aesthetics and functionality. My approach ensures that every design element, from layout to interaction, enhances the overall user experience, leading to visually engaging and seamless applications.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
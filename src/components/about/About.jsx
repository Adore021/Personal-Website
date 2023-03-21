import React from 'react';
import "./about.css";
import Image from '../../assets/avatar-2.svg';
import Profile from '../../assets/Profile.jpg'
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Profile} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            Hi my name is <span className='text__highlight'>Hari Haran</span>, I go by <span className='text__highlight'>Adore</span> on the internet. I am a versatile programmer with a range of skills in web, game, and mobile development, as well as 2D and 3D design.
            Additionally, I possess the knowledge to create Desktop applications. I am knowledgeable in various design and development tools, 
            such as Blender, Maya, C4D, Unity, Unreal Engine, Photoshop, and Illustrator. Additionally, I am proficient in programming languages 
            including C#, C++, Python, JavaScript, HTML, and CSS. My goal is to select the most appropriate tool for each project, ensuring efficient 
            and effective software development. I approach each project with enthusiasm and a focus on delivering high-quality results that meet my 
            clients' needs. I am passionate about programming and design, and continuously seek to learn and keep up-to-date with the 
            latest advances in technology and software development.</p>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Full Stack Development</h3>
                {/* <span className="skills__number">90%</span> */}
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Game Development</h3>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage game__dev"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Mobile Development</h3>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage mobile__dev"></span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About

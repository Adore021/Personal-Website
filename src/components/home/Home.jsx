import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import Profile from "../../assets/Profile.jpg";
import HeaderSocial from './HeaderSocial';
import ScrollDown from './ScrollDown'
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container">
      <div className="intro">
        <img src={Profile} alt="" className="home__img" />
        <h1 className="home__name">Hari Haran</h1>
        <span className="home__education">Adore: Programmer. Crafting innovative solutions with code.</span>

        <HeaderSocial/>

        <a href="#contact" className="btn">Say Hello Me</a>

        <ScrollDown/>
      </div>

      <Shapes/>
    </section>
  )
}

export default Home

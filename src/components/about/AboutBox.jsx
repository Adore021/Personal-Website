import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-question"></i>

            <div>
                <h3 className="about__title">Current Project</h3>
                <span className="about__subtitle">'Infinite Cube' An Mobile Arcade Game</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-anchor"></i>

            <div>
                <h3 className="about__title">Intrests</h3>
                <span className="about__subtitle">Coding / Science and Tech</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-notebook"></i>

            <div>
                <h3 className="about__title">Hobby</h3>
                <span className="about__subtitle">Anime and Gaming</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-ghost"></i>

            <div>
                <h3 className="about__title">Addiction</h3>
                <span className="about__subtitle">Cofee and Anime</span>
            </div>
        </div>
    </div>
    
    
  )
}

export default AboutBox

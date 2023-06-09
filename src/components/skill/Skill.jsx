import React from 'react'
import './skill.css'
import Image1 from '../../assets/Icons/Web-design.svg';
import Image2 from '../../assets/Icons/Asset 5.svg';
import Image3 from '../../assets/Icons/Web-development.svg';
import Image4 from '../../assets/Icons/Coding.svg';
import Image5 from '../../assets/Icons/Portfolio.svg';

const data = [
    {
      id: 1,
      image: Image1,
      title: "Full Stack Development",
      description:
        "I specialize in full-stack development, with proficiency in both front-end and back-end technologies.",
    },
    {
      id: 2,
      image: Image2,
      title: "Game Development",
      description:
        "I have experience in game development, from concept to implementation.",
    },
    {
      id: 3,
      image: Image3,
      title: "Application",
      description:
        "I am skilled in application development, with experience in creating both desktop and mobile applications.",
    },
    {
      id: 4,
      image: Image4,
      title: "Code",
      description:
        "Proficient in multiple programming languages, including C#, C++, Python, JavaScript, HTML, and CSS.",
    },
    {
      id: 5,
      image: Image5,
      title: "Design Tools",
      description:
        "Experienced in design tools such as Blender, Maya, C4D, Photoshop , and Illustrator.",
    },
    {
      id: 6,
      image: Image5,
      title: "Development Tools",
      description:
        "Proficient in various development tools, including Android Studio, Unity, and Unreal Engine.",
    },
  ];

const Skill = () => {
  return (
    <section className="services container section" id="skills">
        <h2 className="section__title">What can i do</h2>

        <div className="services__container grid">
            {data.map(({id, image, title, description}) => {
                return (
                    <div className="services__card" key={id}>
                        <img src={image} alt="" className="services__img" />

                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Skill

import React, { useState } from 'react'
import "./sidebar.css";
import Logo from "../../assets/logo.svg";
import HH_Logo from "../../assets/HH-Logo-B-2.svg"

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
  return (
    <>
        <aside className={toggle ? "aside show-menu" : "aside"}>
            <a href="#home" className="nav__logo">
                <img src={HH_Logo} alt="" />
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="icon-grid"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                            <i className="icon-folder-alt"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                            <i className="icon-bubbles"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">&copy; 2023.</span>
            </div>
        </aside>

        <div className={toggle ? "nav__toggle nav__toggle-open" : 
            "nav__toggle"} onClick={() => showMenu(!toggle)}>
            <i className="icon-menu"></i>
        </div>
    </>
  )
}

export default Sidebar

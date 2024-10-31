import React, { useState, useEffect } from 'react';
import './assets/TopNav.css';
import gitIcon from './assets/images/github.png';
import emailIcon from './assets/images/email.png';
import linkedinIcon from './assets/images/linkedin.png';

const TopNav = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [scroll, setScroll] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg ${scroll ? 'scroll' : ''}`}>
            <div className="container">
                <a className="navbar-brand" href="">
                    Faddi's Portfolio
                </a>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleMenu} 
                    aria-controls="navbarNav" 
                    aria-expanded={menuActive ? "true" : "false"} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${menuActive ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a href="#intro" className="nav-link smoothScroll">Introduction</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link smoothScroll">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link smoothScroll">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link smoothScroll">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#resume" className="nav-link smoothScroll">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/faddi-dabain-556698171/" target="_blank" className="nav-link smoothScroll">
                                <img className='lets-connect' src={linkedinIcon} alt='LinkedIn' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/FaddiADabain" target="_blank" className="nav-link smoothScroll">
                                <img className='lets-connect' src={gitIcon} alt='LinkedIn' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="mailto:dabainfaddi@gmail.com" target="_blank" className="nav-link smoothScroll">
                                <img className='lets-connect' src={emailIcon} alt='LinkedIn' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;

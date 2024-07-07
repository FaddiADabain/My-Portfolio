import React, { useState } from 'react';
import './assets/TopNav.css';

const TopNav = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav className="top-nav">
            <div className="nav-logo">
                <a href="/">My Portfolio</a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`nav-links ${menuActive ? 'active' : ''}`}>
                <a href='/'>About Me</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href='resume'>Resume</a>
            </div>
        </nav>
    );
};

export default TopNav;

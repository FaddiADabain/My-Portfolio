import React from 'react';
import './assets/TopNav.css';

const TopNav = () => {
    return (
        <nav className="top-nav">
            <div className="nav-logo">
                <a href="/">My Portfolio</a>
            </div>
            <div className="nav-links">
                <a href='/'>About Me</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
                <a href='resume'>Resume</a>
            </div>
        </nav>
    );
};

export default TopNav;

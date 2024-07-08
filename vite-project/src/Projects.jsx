import React, { useState } from 'react';
import './assets/Projects.css';
import projectImg1 from './assets/logo.png'

const Projects = () => {

    return (
        <div className='projects-container'>

            <a href='https://mcgardens-bd0b1.web.app/' className='project-item'>
                <img className='project-picture' src={projectImg1} alt="Project Image 1" />

                <div className='project-desc'>
                    <b>MCGardens</b><br />
                    Description goes here.
                </div>
            </a>


            <a className='project-item'>
                <img className='project-picture' src={projectImg1} alt="Project Image 1" />

                <div className='project-desc'>
                    <b>Noise vs Signal ML</b><br />
                    Description goes here.
                </div>
            </a>

            <a href='https://github.com/FaddiADabain/F1Leaderboards' className='project-item'>
                <img className='project-picture' src={projectImg1} alt="Project Image 1" />

                <div className='project-desc'>
                    <b>F1 Leaderboards</b><br />
                    The "F1 Leaderboard Database" is a platform designed to provide users with a detailed view of 
                    historical F1 race data. It showcases race-by-race leaderboards, offers insights into tire strategies 
                    used by drivers, and presents an updated overview of points accumulated by teams and drivers after each race.
                </div>
            </a>
        
        </div>
    );
};

export default Projects;

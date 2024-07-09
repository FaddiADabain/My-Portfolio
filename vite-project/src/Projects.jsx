import React from 'react';
import './assets/Projects.css';
import projectImg1 from './assets/images/logo.png';
import projectImg2 from './assets/images/nnpic.png'
import projectImg3 from './assets/images/f1image.jpg';

const Projects = () => {
    return (
        <div className='projects-container'>
            <a href='https://mcgardens-bd0b1.web.app/' className='project-item'>
                <img className='project-picture' src={projectImg1} alt="Project Image 1" />
                <div className='project-desc'>
                    <b>MCGardens</b><br />
                    <span className='project-desc-txt'>
                        MCGardens offers a platform for both novice and experienced gardeners to access 
                        plant care knowledge, weather forecasts, and community tools. It allows users to 
                        interact with dynamic content on plants, weather updates, and community events, 
                        fostering a deeper connection with gardening and community interaction.
                    </span>
                </div>
            </a>

            <a className='project-item'>
                <img className='project-picture' src={projectImg2} alt="Project Image 2" />
                <div className='project-desc'>
                    <b>Noise vs Signal ML</b><br />
                    <span className='project-desc-txt'>
                        Developed a two-layer neural network to classify signal and noise in datasets, using Python with NumPy and Pandas.
                        Implemented a hidden layer and an output layer optimized through backpropagation and the sigmoid function.
                        Trained the network on a dataset, achieving a high classification accuracy, and evaluated performance using MSE and
                        ROC curve.
                    </span>
                </div>
            </a>

            <a href='https://github.com/FaddiADabain/F1Leaderboards' className='project-item'>
                <img className='project-picture' src={projectImg3} alt="Project Image 3" />
                <div className='project-desc'>
                    <b>F1 Leaderboards</b><br />
                    <span className='project-desc-txt'>
                        The "F1 Leaderboard Database" is a platform designed to provide users with a detailed view of 
                        historical F1 race data. It showcases race-by-race leaderboards, offers insights into tire strategies 
                        used by drivers, and presents an updated overview of points accumulated by teams and drivers after each race.
                    </span>
                </div>
            </a>

            <a className='project-item'>
                <img className='project-picture' src={projectImg1} alt="Project Image 4" />
                <div className='project-desc'>
                    <b>Discord Bot</b><br />
                    <span className='project-desc-txt'>
                        Created a feature-rich Discord bot to enhance server interaction and entertainment using Python.
                        Integrated YouTube API for playing music and Spotify API for fetching and playing tracks within the server.
                        Implemented commands for music control (play, pause, skip) and queue management.
                    </span>
                </div>
            </a>

            <a className='project-item'>
                <img className='project-picture' src={projectImg1} alt="Project Image 4" />
                <div className='project-desc'>
                    <b>F1 Blockchain</b><br />
                    <span className='project-desc-txt'>
                        The F1 Blockchain project successfully recorded race results, driver stats, and team 
                        performance on a decentralized platform. It provided real-time, immutable data and 
                        enhanced fan engagement with tokenized collectibles, setting a new standard for 
                        transparency and authenticity in sports data management.
                    </span>
                </div>
            </a>
        </div>
    );
};

export default Projects;

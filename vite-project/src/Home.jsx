import React from 'react';
import './assets/Home.css';
import defaultImg from './assets/Selfie.jpeg';
import gradPic from './assets/GraduationPic.jpg'
import Resume from './Resume';

const Home = () => {
    return (
        <div>

            {/* HERO SECTION */}
            <section className="hero d-flex flex-column justify-content-center align-items-center" id="intro">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-lg-5 col-md-5 col-10">
                            <img src={defaultImg} className="img-fluid" alt="Faddi Azzam Dabain" />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
                            <div className="hero-text">
                                <h1 className="hero-title">👋 Faddi Azzam Dabain, a software engineer</h1>
                                <a href="mailto:fdabain01@manhattan.edu" className="email-link">fdabain01@manhattan.edu</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="about section-padding" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h3 className="mb-4">This is Faddi's Resume</h3>
                            <p>Hello! I'm Faddi Azzam Dabain, a dedicated and innovative Computer Science professional based in 
                                Ossining, New York. Currently, I am pursuing my Master of Science in Computer Science at Manhattan 
                                College, where I previously earned my Bachelor of Science degree with a strong academic record and 
                                notable scholarships, including the Science Scholar's Award and Founder's Award.</p>
                            <ul className="mt-4 mb-5 mb-lg-0 profile-list list-unstyled">
                                <li><strong>Full Name:</strong> Faddi Azzam Dabain</li>
                                <li><strong>Date of Birth:</strong> 18 October 2002</li>
                                <li><strong>Email:</strong> fdabain01@manhattan.edu</li>
                            </ul>
                        </div>
                        <div className="col-lg-5 mx-auto col-md-6 col-12">
                            <img src={gradPic} className="img-fluid" alt="Faddi Azzam Dabain" />
                        </div>
                    </div>
                    <hr className="section-divider" />
                    <h2 className='mb-4'>My Journey</h2>
                    <p className='section-text'>
                        My academic journey has been enriched with diverse projects that highlight my technical prowess and creativity. 
                        One of my key projects, MCGardens, is a comprehensive web application that leverages JavaScript, Firebase, and APIs 
                        from OpenAI and Unsplash to provide dynamic content on plants, weather, and events. This project showcases my ability 
                        to implement user authentication, data encryption, and create interactive features such as a custom event calendar and 
                        live discussion boards.
                    </p>
                    <p className='section-text'>
                        Another significant project is the Formula 1 Racing Leaderboards, where I developed a dynamic database system using Python 
                        and SQL. This project involved designing intuitive GUIs, processing historical data, and enhancing user experience in race 
                        data analysis, reflecting my passion for Formula One motorsports and my analytical skills.
                    </p>
                    <hr className="section-divider" />
                    <h2 className='mb-4'>Professional Experience</h2>
                        <p className='section-text'>
                            As an IT Support Specialist at Manhattan College, I have honed my problem-solving abilities and communication skills. 
                            Working closely with a team of IT professionals, I provided effective solutions to various technology-related issues, 
                            ensuring optimal user experience and seamless IT operations across the campus.
                        </p>
                        <hr className="section-divider" />
                        <h2 className='mb-4'>Technical Skills</h2>
                        <p className='section-text' id='skills'>
                            I am proficient in a range of programming languages and technologies, including:
                        </p>
                        <ul className='skills-list'>
                            <li>Java, C/C++, Python, JavaScript</li>
                            <li>SQL, Bash, LUA, HTML, CSS</li>
                            <li>API Integration (OpenAI, Unsplash, Discord, YouTube, Spotify)</li>
                        </ul>
                        <p className='section-text'>
                            My technical expertise is complemented by my ability to communicate effectively in English and my limited working proficiency in Arabic.
                        </p>
                        <hr className="section-divider" />
                        <h2 className='mb-4'>Interests and Hobbies</h2>
                        <p className='section-text'>
                            Outside the technical realm, I am an avid enthusiast of board games and video games, which have sharpened my strategic 
                            thinking and adaptability. My love for Formula One motorsports has not only fueled my passion for high-speed racing but 
                            also taught me the importance of teamwork and agility in dynamic environments.
                        </p>
                        <hr className="section-divider" />
                        <h2 className='mb-4'>Let's Connect</h2>
                        <p className='section-text'>
                            I am always eager to connect with like-minded professionals and explore new opportunities. 
                            Feel free to reach out to me via email at fdabain01@manhattan.edu, or connect with me on LinkedIn and GitHub.
                        </p>
                </div>
            </section>

            <section className='resume' id='resume'>
                <Resume />
            </section>
        </div>
    );
};

export default Home;

import React from 'react';
import './assets/Home.css';
import defaultImg from './assets/images/Selfie.jpeg';
import gradPic from './assets/images/Selfie1.png';
import Resume from './Resume';
import Projects from './Projects';

const Home = () => {
    return (
        <div>

            {/* HERO SECTION */}
            <section className="hero d-flex flex-column justify-content-center align-items-center" id="intro">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-lg-5 col-md-5 col-10">
                            <img src={defaultImg} className="img-fluid" alt="Faddi Dabain" />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
                            <div className="hero-text">
                                <h1 className="hero-title">Faddi Dabain, a computer science student</h1>
                                <a href="mailto:dabainfaddi@google.com" className="email-link">dabainfaddi@google.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arrow">
                    ↓
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="about section-padding" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h1 className="mb-4 section-headers" title='About Me'>About Me</h1>
                            <p>
                                Hello! I'm Faddi Dabain, a dedicated and innovative Computer Science professional based in 
                                Ossining, New York. Currently, I am pursuing my Master of Science in Computer Science at Manhattan 
                                University, where I previously earned my Bachelor of Science degree with a strong academic record and 
                                notable scholarships, including the Science Scholar's Award and Founder's Award.
                            </p>
                            <ul className="mt-4 mb-5 mb-lg-0 profile-list list-unstyled">
                                <li><strong>Full Name:</strong>Faddi Dabain</li>
                                <li><strong>Email:</strong>dabainfaddi@google.com</li>
                            </ul>
                        </div>
                        <div className="col-lg-5 mx-auto col-md-6 col-12">
                            <img src={gradPic} className="img-fluid" alt="Faddi Dabain" />
                        </div>
                    </div>
                    <hr className="section-divider" />
                    <h2 className='mb-4 section-headers' id='skills'>Technical Skills</h2>
                    <p className='section-text'>
                        I am proficient in a range of programming languages and technologies, including:
                    </p>
                    <ul className='skills-list'>
                        <li>Java, C/C++, Python, JavaScript</li>
                        <li>SQL, Bash, LUA, HTML, CSS, React Native</li>
                        <li>API Integration (OpenAI, Unsplash, Discord, YouTube, Spotify)</li>
                    </ul>
                    <p className='section-text'>
                        My technical expertise is complemented by my ability to communicate effectively in English and my limited working proficiency in Arabic.
                    </p>
                    <hr className="section-divider" />
                </div>
            </section>

            <section id='projects'>
                <Projects />
            </section>

            <section className='about' id="about">
                <div className="container">
                    <hr className="section-divider" />
                    <h2 className='mb-4 section-headers' title='Professional Experience'>Professional Experience</h2>
                    <div className="experience-entry">
                        <p className='experience-title'>
                            Information Technology Support Specialist, Manhattan University
                        </p>
                        <p className='experience-date'>
                            Aug 2022 - May 2024
                        </p>
                    </div>
                    <p className='section-text'>
                        As an IT Support Specialist at Manhattan University, I dedicated myself to resolving a wide range of 
                        technical issues for students, faculty, and staff. Leveraging strong problem-solving abilities and 
                        excellent communication skills, I provided timely and effective solutions to hardware and software 
                        problems, network connectivity issues, and other technology-related challenges. Collaborating closely 
                        with a team of IT professionals, I contributed to maintaining seamless IT operations across the campus. 
                        This role not only enhanced my technical expertise but also strengthened my ability to assist users 
                        with patience and professionalism, ensuring a positive user experience in a dynamic academic environment.
                    </p>
                    <hr className="section-divider" />
                    <h2 className='mb-4 section-headers' title='My Journey'>My Journey</h2>
                    <p className='section-text'>
                        Growing up in Yonkers, New York, I developed a deep curiosity about how technology shapes our world. From the moment 
                        I interacted with my first mobile game on an iPod Touch, I was fascinated by the capabilities of these devices and the 
                        complex systems that power them. This early interest ignited a passion for understanding the mechanics behind technology, 
                        leading me to explore coding and software development.
                    </p>
                    <p className='section-text'>
                        In high school, I took a significant step by enrolling in an advanced Java programming course, even though it was 
                        beyond my initial qualifications. Embracing the challenge, I quickly adapted and became one of the top performers 
                        in the class. This experience solidified my decision to pursue computer science as a career path.
                    </p>
                    <p className='section-text'>
                        I earned my B.S. in Computer Science from Manhattan University, where I honed my skills in programming, data 
                        analysis, and software engineering. Currently, I am further expanding my expertise by pursuing an M.S. in 
                        Computer Science, set to graduate in 2025. My academic journey has equipped me with a strong foundation in 
                        various technologies and a keen ability to tackle complex problems.
                    </p>
                    <p className='section-text'>
                        Outside the classroom, my interests in Formula One and board games have enriched my understanding of strategy,
                        teamwork, and quick thinking—qualities that I bring into my professional endeavors. I am passionate about leveraging 
                        technology to create innovative solutions and am continually seeking opportunities to grow and contribute meaningfully 
                        in the field of computer science.
                    </p>
                    <hr className="section-divider" />
                    <h2 className='mb-4 section-headers' title='Interests and Hobbies'>Interests and Hobbies</h2>
                    <p className='section-text'>
                        Outside the technical realm, I am an avid enthusiast of board games and video games, which have sharpened my strategic 
                        thinking and adaptability. My love for Formula One motorsports has not only fueled my passion for high-speed racing but 
                        also taught me the importance of teamwork and agility in dynamic environments.
                    </p>
                    <hr className="section-divider" />
                </div>
            </section>

            <section id='resume'>
                <Resume />
            </section>
        </div>
    );
};

export default Home;

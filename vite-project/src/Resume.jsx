import React from 'react';
import resumePdf from './assets/Faddi Azzam Dabain Resume.pdf';
import './assets/Resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <iframe
                src={resumePdf}
                width="100%"
                height="100%"
                title="Resume"
                style={{ border: 'none', minHeight: '83vh' }}
            />
        </div>
    );
};

export default Resume;

import React from 'react';
import resumePdf from './assets/Resume.pdf';
import './assets/Resume.css';

const Resume = () => {
    return (
        <div>
            <h2 className='mb-4 resume-header'>Resume</h2>

            <div className="resume-container">
                        <iframe
                            src={resumePdf}
                            width="100%"
                            height="100%"
                            title="Resume"
                            style={{ border: 'none', minHeight: '83vh' }}
                        />
            </div>
        </div>
        
    );
};

export default Resume;

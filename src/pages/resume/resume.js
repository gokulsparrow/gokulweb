import React from 'react';

import gokul from "../../asserts/gokul.jpg";

import './resume.style.css';

const Resume = () => {
    return (
        <div>
            <img src={gokul} alt='gokulpic' className='resume' />
        </div>
    )
};

export default Resume;
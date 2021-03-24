import React, { useState } from 'react';

import '../projects/projects.style.css';

//import '../projects/project.component.sass';

import project1pic from '../../asserts/project1.png';
import project2pic from '../../asserts/project2.png';
import project3pic from '../../asserts/project3.png';




//import styled from 'styled-components';


function Projects() {
    return (
        <div className='projects'>
            <h3>Projects</h3>
            <div className='row'>
                <div className='card1'>
                    <img src={project1pic} alt='project1' className='projectpic1' />
                    <div className='seperate1'>
                        <p>Vibe Clothing</p>
                        <div className='sepsub1'>
                            Its a ecommerce side designed and developed by my self with react.js,redux,sacss,firebase and stripe payment api used in it.
                        </div>
                    </div>
                    <a href="https://gokulsparrow.github.io/reactportfolio/" className='rainbow rainbow-5' >
                        Click Here!
                    </a>  
                </div>
                <div className='card1'>
                    <img src={project2pic} alt='project1' className='projectpic1' />
                    <div className='seperate2'>
                        <p>Simple React Portfolio</p>
                        <div className='sepsub2'>
                            This is simple react portfolio project 
                        </div>
                    </div>
                    <a href="https://gokulsparrow.github.io/reactportfolio/" className='rainbow rainbow-5' >
                        Click Here!
                    </a>
                </div>
                <div className='card1'>
                    <img src={project3pic} alt='project1' className='projectpic1' />
                    <div className='seperate2'>
                        <p>BootStrap,Node.js based Website</p>
                        <div className='sepsub3'>
                            I made this Website for My Father.I used BootStrap for design and Node.js for Conduct Form.  
                        </div>
                    </div>
                    <a href="https://selvamlicagent.herokuapp.com/" className='rainbow rainbow-5' >
                        Click Here!
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;


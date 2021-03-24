import React from "react";

import '../about/about.style.css';

import gokul from "../../asserts/gokul.jpg";

//import Toogle from '../../compount/card/card';





const about = () => {
    return (
        <div className='about'>
            <div className='row'>
                <div className='side'>
                    <div className='carda'>
                        <img src={gokul} alt='gokulpic' className='gokulimg' />
                        <p className='gokulname'>S.Gokul</p>
                    </div>
                </div>
                <div className='main'>
                    <div className='cardb'>
                        <h3>About Me</h3>
                        <p className='ptext'>
                            I'am a self taught web developer from a mechanical engineering background with HTML, CSS, JAVASCRIPT, React.js, bootstrap project experiance.And changeing my carrear from mechanical to web developering because of passion.(Looking for a job in organished team cultural company to share my ideas and to learn more about web developering.
                            And changeing my carrear from mechanical to web developering because of passion.(Looking for a job in organished team cultural company to share my ideas and to learn more about web developering.
                        </p>
                    </div>
                </div>
            </div>
        </div>  
    )
};

export default about;


               

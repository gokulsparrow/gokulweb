import React from "react";

import '../about/about.style.css';

import gokul from "../../asserts/gokul.jpg";

//import card from '../../compount/card/card';

const about = () => {
    return (
        <div className='about'>
            <div className='card-container'>
                <div className='card'>
                    <img src={gokul} alt='gokul' className='gokulpic' />
                    <p className='imgtext'>gokul</p>
                </div>
                <div className='card2'>
                    <p className="textph">leorm50</p>
                </div>
            </div>
            
        </div>
        
    )
};

export default about;
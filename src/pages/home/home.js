import React from 'react';

import './home.style.css';

//import HomeStyle from './home.style';

const home = (props) => {
    return (
        <div className="home">
                <div className='homeinside'>
                    <h4>
                        <span>Hey there ! </span>
                        <span>   I'm Gokul,</span>
                    </h4>
                    <h3>Front-end-developer</h3>

                    {/* <a href="#section-tours" class="btn btn--white btn--animated">Discover our tours</a> */}
                </div>
        </div>
    );
};

export default home;
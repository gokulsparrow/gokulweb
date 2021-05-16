import React, { useState, useEffect } from 'react';
import { Button } from '../button/button';

//import Resume from '../../pages/resume/resume';
//import { Link } from 'react-router-dom';

import gk from '../../asserts/gokul.jpg';

import { Link } from 'react-scroll';

import NavbarStyled from '../header/navbar.styled.js';

import './header.style.css';


export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const resumePage = () => setClick(!click);
    const pageClose = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <div>
            <NavbarStyled>
                <nav className='navbar'>
                    <div className='navbar-container'>
                            <Link to='home' activeClass="active" className='navbar-logo' spy={true} smooth={true} duration={1000} onClick={closeMobileMenu}>
                                Gokul
                                <i class='fab fa-typo3' />
                            </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='about' activeClass="active" className='nav-links' spy={true} smooth={true} duration={1000} onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/timeline'
                                    activeClass="active" spy={true} smooth={true} duration={1000}
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Timeline
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='projects'
                                    activeClass="active" spy={true} smooth={true} duration={1000}
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Projects
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to='resume'
                                    activeClass="active" spy={true} smooth={true} duration={1000}
                                    className='nav-links-mobile'
                                    onClick={closeMobileMenu}
                                >
                                    Resume
                                </Link>
                            </li>
                        </ul>
                        {button && <Button buttonStyle='btn--outline' className='wrapper' href='#demo-modal'>Resume</Button>}
                        <div id="demo-modal" class="modal">
                            <div className="modal__content">
                                <h1>CSS Only Modal</h1>

                                <p>
                                    You can use the :target pseudo-className to create a modals with Zero JavaScript. Enjoy!
                                </p>

                                <div className="modal__footer">
                                    Made with <i className="fa fa-heart hellollo"></i>, by <a href="https://twitter.com/denicmarko" target="_blank">@denicmarko</a>
                                </div>

                                <a href="#" className="modal__close hello">&times;</a>
                            </div>
                        </div>
                            
                    </div>
                </nav>
            </NavbarStyled>
        </div>
    )
}



// {button && <Button buttonStyle='btn--outline' onClick={resumePage} className={click ? 'fas fa-times' : 'hiddens'}>Resume</Button>}
// <div onClick={pageClose} activeClass="active" spy={true} smooth={true} duration={1000} className='resumeouter'>
//     <img src={gk} alt='goodpic' className='resumepart' />
// </div>
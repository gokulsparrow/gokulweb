import React, { useState, useEffect } from 'react';
import { Button } from '../button/button';
//import { Link } from 'react-router-dom';

import { Link } from 'react-scroll';

import NavbarStyled from '../header/navbar.styled.js';

import './header.style.css';


export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
                                to='/projects'
                                activeClass="active" spy={true} smooth={true} duration={1000}
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/conduct'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Conduct
                            </Link>
                        </li>
                    </ul>
                        {button && <Button buttonStyle='btn--outline'>Conduct</Button>}
                    </div>
                </nav>
            </NavbarStyled>
        </div>
    )
}

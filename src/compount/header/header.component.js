import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import resume2 from '../../asserts/resume2.png';

//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-scroll';

import About from '../about/about';
import Home from '../home/home';

import './header.style.css';

const header = (props) => {
    return (
        <div className='header'>
            <Container className='p-0' fluid={true}>
                <Navbar className='border-bottom' bg-transparent expand='lg' variant="light" >
                    <Navbar.Brand className='navbar-brand ml-5'>
                        <img src={resume2} alt='logo' className='logo' />
                    </Navbar.Brand>

                        <Navbar.Toggle className='border-0' aria-controls='Navbar-Toggle' />
                        <Navbar.Collapse id='Navbar-Toggle' >
                            <Nav className="navbar ml-auto">
                                <Link activeClass="active" spy={true} smooth={true} duration={1000} className="nav-link mr-lg-4" to='about'>About</Link>
                                <Link className="nav-link mr-lg-4" to="/reactportfolio">Projects</Link>
                                <Link className="nav-link mr-lg-4" to="/conduct">Conduct</Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
                <Home />
                <About id='about' /> 

            </Container>
        </div>
    )
};

export default header;
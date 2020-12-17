import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import stay from '../../asserts/stay.png';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './header.style.css';

const header = (props) => {
    return (
        <div className='header'>
            <Router>
                <Container className='p-0' fluid={true}>
                    <Navbar className='border-bottom' bg-transparent expand='lg' >
                        <Navbar.Brand className='navbar-brand'>
                            <img src={stay} alt='logo' className='logo' />
                        </Navbar.Brand>

                            <Navbar.Toggle className='border-0' aria-controls='Navbar-Toggle' />
                            <Navbar.Collapse id='Navbar-Toggle' >
                            <Nav className="navbar ml-auto">
                                <Link className="nav-link text-white mr-lg-4" to="/about">About</Link>
                                <Link className="nav-link text-white mr-lg-4" to="/reactportfolio">Projects</Link>
                                <Link className="nav-link text-white" to="/conduct">Conduct</Link>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Router>
        </div>
    )
};

export default header;
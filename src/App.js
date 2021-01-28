import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import About from '../src/compount/about/about';
import Home from '../src/compount/home/home';

import './App.css';

import Navbar from '../src/compount/header/header';



const App = (props) => {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Home id="home" />
                <About id="about" />
            </Router>
        </div>
    )
};

export default App;



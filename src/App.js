import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import About from '../src/pages/about/about';
import Home from '../src/pages/home/home';
import Footer from "../src/pages/footer/footer.component";
import Projets from '../src/pages/projects/projects';

//import Resume from '../src/pages/resume/resume';



import './App.css';

import Navbar from '../src/compount/header/header';



const App = (props) => {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Home id="home" />
                <About id="about" />
                <Projets id='projets' />
                <Footer id="footer"/>
            </Router>
        </div>
    )
};

export default App;



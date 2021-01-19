import React from 'react';
import './App.css';

import Header from './compount/header/header.component';


const App = (props) => {
  return (
    <div className="App">
        <Header fixed="top" />
    </div>
  )
};

export default App;

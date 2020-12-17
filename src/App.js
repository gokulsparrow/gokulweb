import React from 'react';
import './App.css';

import Header from './compount/header/header.component';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
};

export default App;

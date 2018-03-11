import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header.jsx';
import Main from './Main.jsx';
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
       <Header></Header>
       <Main></Main>
      </div>
    );
  }
}

export default App;

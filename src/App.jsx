import React, { Component } from 'react';
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

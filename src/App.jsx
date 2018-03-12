import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import './css/styles.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
           <Header></Header>
           <Route exact={true} path='/' component={Home} />
           <Route path='/projects' component={Projects} />
           <Route path='/contact' component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './Header.jsx';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import '../css/styles.css';


class App extends Component {
  render() {
    return (
        <Router>  
          <Container>
            <Header></Header>
            <Route exact={true} path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Container>
        </Router>
    );
  }
}

export default App;

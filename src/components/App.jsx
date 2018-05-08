import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import '../css/App.css';


class App extends Component {
  render() {
    return(
      <Router>
        <div className="appContainer">
          <div className="navBar">
            <Header />
          </div>
          <div className="contentAreaContainer">
            <Route exact={true} path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }

}


export default App;

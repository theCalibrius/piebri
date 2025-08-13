import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import 'font-awesome/css/font-awesome.css';
import '../css/App.css';

class App extends Component {
  state = {
    drawerOpen: false,
    modalOpen: false,
  };

  openDrawer = () => this.setState({ drawerOpen: true, modalOpen: false });
  closeDrawer = () => this.setState({ drawerOpen: false });
  openModal = () => this.setState({ drawerOpen: false, modalOpen: true });
  closeModal = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Router>
        <div className="appContainer">
          <div className="navBar">
            <Header
              drawerOpen={this.state.drawerOpen}
              onOpenDrawer={this.openDrawer}
              onCloseDrawer={this.closeDrawer}
            />
          </div>
          <div className="contentAreaContainer">
            <Route exact path="/" component={Home} />
            <Route
              path="/projects"
              render={() => (
                <Projects
                  modalOpen={this.state.modalOpen}
                  onOpenModal={this.openModal}
                  onCloseModal={this.closeModal}
                />
              )}
            />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

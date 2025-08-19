import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header.jsx';
import 'font-awesome/css/font-awesome.css';
import '../css/App.css';

const Home = React.lazy(() => import('./Home.jsx'));
const Projects = React.lazy(() => import('./Projects.jsx'));
const Contact = React.lazy(() => import('./Contact.jsx'));

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
          <Suspense fallback={<div />}>
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
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default App;

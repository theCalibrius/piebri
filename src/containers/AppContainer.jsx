import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Container } from 'flux/utils';
import { connect } from 'react-redux';

import Header from '../components/Header.jsx';
import Home from '../components/Home.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';
import ProjectModal from '../components/ProjectModal';
import ModalStore from '../data/ModalStore.js'
import '../css/App.css';



class App extends Component {
  // render() {
  //   return (
  //     <Router>
  //       <div className="appContainer">
  //         <div className="navBar">
  //           <Header></Header>
  //         </div>
  //         <div className="contentAreaContainer">
  //           <Route exact={true} path='/' component={Home} />
  //           <Route path='/projects' component={Projects} />
  //           <Route path='/contact' component={Contact} />
  //         </div>
  //     </div>
  //     </Router>
  //   );
  // }
  
  // static getStores() {
  //   return [ModalStore];
  // }

  // static calculateState(prevState) {
  //   return ModalStore.getState();
  // }

  render() {
  var isModalVisible = this.state.isModalVisible;

  var showModal = () => {
    if ( isModalVisible ) {
      return ( <ProjectModal ></ProjectModal> );
    }
  }

  return(
    <Router>
            <div className="appContainer">
              {showModal}
              <div className="navBar">
                <Header></Header>
              </div>
              <div className="contentAreaContainer">
                <Route exact={true} path='/' component={Home} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
              </div>
          </div>
    </Router>
  )
}

}

export default connect(mapStateToProps, mapDispatchToProps)(App);


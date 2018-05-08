import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Sidebar } from 'primereact/components/sidebar/Sidebar';

import linkedin from '../img/linkedin_logo.png'
import github from '../img/github_logo.png'
import '../css/Header.css';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      visible: false
    };

    this.onClick = this.onClick.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  onClick = (e) => {
    this.setState({
      visible: true
    });
  }

  onHide = (e) => {
    this.setState({
      visible: false
    });
  }

  render() {

    return (
      <div className="navBarContent">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <div className="logo">
            <div className="logoContainer">
              <div className="logoText">piebri:~$</div>
              <div className="logoCursor"><span className="blinkingCursor"> ▍</span></div>
            </div>
          </div>
        </Link>
        <div className="navLinks">
          <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>projects</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>contact</Link>
          <div className="socialLinks">
            <a href="https://www.linkedin.com/in/piercebrian/" target="_blank" rel="noopener noreferrer"><img className="linkedin" src={linkedin} alt={"linkedin"} /></a>
            <a href="https://github.com/theCalibrius" target="_blank" rel="noopener noreferrer"><img className="github" src={github} alt={"github"} /></a>
          </div>
        </div>
        <div className="navMenuIconContainer">
          <span className="navMenuIcon fa fa-bars" onClick={this.onClick}/>
        </div>
       <Sidebar visible={this.state.visible} baseZIndex={1000000} onHide={this.onHide} position="top">
         <div className="modalSidebarContainer" onClick={this.onHide}>
           <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>projects</Link>
           <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>contact</Link>
           <a href="https://www.linkedin.com/in/piercebrian/" target="_blank" rel="noopener noreferrer"><img className="linkedin" src={linkedin} alt={"linkedin"} /></a>
           <a href="https://github.com/theCalibrius" target="_blank" rel="noopener noreferrer"><img className="github" src={github} alt={"github"} /></a>
         </div>
       </Sidebar>
      </div>
    )
  }
}

export default Header;

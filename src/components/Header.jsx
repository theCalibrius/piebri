import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'primereact/components/menu/Menu';

import linkedin from '../img/linkedin_logo.png'
import github from '../img/github_logo.png'
import '../css/Header.css';

class Header extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    
    // let MenuComponent = withRouter(({ history }) => {
    //   let navItems = [ {
    //       label: 'projects', command: () => { history.push('/projects') }
    //     }, {
    //       label: 'projects', command: () => { history.push('/contact') }
    //     }, {
    //       label: 'gitHub profile', url: 'https://github.com/theCalibrius'
    //     }, {
    //       label: 'linkedIn profile', url: 'https://www.linkedin.com/in/piercebrian/'
    //   }];
      
    //   return (
    //     <Menu model={navItems} popup={true} ref={el => this.menu = el}/>
    //   );
    // });
    
    let goToProjects = withRouter(({ history }) => (
      function() {
        history.push('/projects');
      }
    ));

     let goToContact = withRouter(({ history }) => (
      function() {
        history.push('/contact');
      }
    ));

   

    let navItems = [ {
          label: 'projects', command:() => {withRouter(({ history }) => (history.push('/projects')))}
        }, {
          label: 'contact', command: () => {withRouter(({ history }) => (history.push('/projects')))} 
        }, {
          label: 'gitHub profile', url: 'https://github.com/theCalibrius'
        }, {
          label: 'linkedIn profile', url: 'https://www.linkedin.com/in/piercebrian/'
      }];

    return (
      <div className="navBarContent">
        <div className="condensedNavMenu">
          <Menu model={navItems} popup={true} ref={el => this.menu = el}/>
          <span className="navMenuIcon fa fa-bars" onClick={(event) => this.menu.toggle(event)}/>
        </div>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <div className="logo">
            <div className="logoContainer">
              <div className="logoText">piebri:~$</div>
              <div className="logoCursor"><span className="blinkingCursor"> ▍</span></div>
            </div>
          </div>
        </Link>
        <div className="navLinks">
          <Link to='/projects' style={{ textDecoration: 'none', color: 'white' }}>projects</Link>
          <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>contact</Link>
          <div className="socialLinks">
            <a href="https://www.linkedin.com/in/piercebrian/" target="_blank" rel="noopener noreferrer"><img className="linkedin" src={linkedin} alt={"linkedin"} /></a>
            <a href="https://github.com/theCalibrius" target="_blank" rel="noopener noreferrer"><img className="github" src={github} alt={"github"} /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;

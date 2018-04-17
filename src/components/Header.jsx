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
    
    // let goToProjects = withRouter(({ history }) => (
    //   function() {
    //     history.push('/projects');
    //   }
    // ));

    //  let goToContact = withRouter(({ history }) => (
    //   function() {
    //     history.push('/contact');
    //   }
    // ));

   /*
<Menu model={navItems} popup={true} ref={el => this.menu = el}/>
*/
    // let navItems = [ {
    //       label: 'projects', command:() => {withRouter(({ history }) => (history.push('/projects')))}
    //     }, {
    //       label: 'contact', command: () => {withRouter(({ history }) => (history.push('/projects')))} 
    //     }, {
    //       label: 'gitHub profile', url: 'https://github.com/theCalibrius'
    //     }, {
    //       label: 'linkedIn profile', url: 'https://www.linkedin.com/in/piercebrian/'
    //   }];

    return (
      <div className="navBarContent">
        <div className="navMenuIconContainer">
          <span className="navMenuIcon fa fa-bars" onClick={this.onClick}/>
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
       <Sidebar visible={this.state.visible} baseZIndex={1000000} onHide={this.onHide} position="top">
         <p></p>
         <div className="modalSidebarContainer" onClick={this.onHide}>
           <Link to='/projects' style={{ textDecoration: 'none', color: 'white' }}>projects</Link>
           <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>contact</Link>
           <a href="https://www.linkedin.com/in/piercebrian/" target="_blank" rel="noopener noreferrer"><img className="linkedin" src={linkedin} alt={"linkedin"} /></a>
           <a href="https://github.com/theCalibrius" target="_blank" rel="noopener noreferrer"><img className="github" src={github} alt={"github"} /></a>
         </div>
       </Sidebar>
      </div>
    )
  }
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import linkedin from '../img/linkedin_logo.png'
import github from '../img/github_logo.png'
import '../css/Header.css';

var Header = (props) => (
  <div className="navBarContent">
    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
      <div className="logo">
        <div className="logoContainer">
          <div className="logoText">piebri:~$</div>
          <div className="logoCursor"><span className="blinkingCursor">&#x1f062;</span></div>
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
);

export default Header;

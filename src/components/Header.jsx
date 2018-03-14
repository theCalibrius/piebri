import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import linkedin from '../img/linkedin_logo.png'
import github from '../img/github_logo.png'

var Header = (props) => (
  <div className="navBarContent">
    <div className="logo">
      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
        <span class="navText">piebri:~$</span>
        <span class="blinking-cursor">🁢</span>
      </Link>
    </div>
    <div className="navLinks">
      <div className="pageLinks">
        <Link to='/projects' style={{ textDecoration: 'none', color: 'white' }}>     <span class="navText navLink">projects</span>  </Link>
        <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>   <span class="navText navLink">contact</span>  </Link>
      </div>
      <div className="socialLinks">
        <a href="https://www.linkedin.com/in/piercebrian/" target="_blank"><img class="linkedin" src={linkedin} alt={"linkedin"} /></a>
        <a href="https://github.com/theCalibrius" target="_blank"><img class="github" src={github} alt={"github"} /></a>
      </div>
    </div>
  </div>
);

export default Header;

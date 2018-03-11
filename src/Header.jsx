import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

var Header = (props) => (
  <div className="Header">
    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
      <span class="navText">piebri:~$</span>
      <span class="blinking-cursor"> 🁢</span>
    </Link>
    <Link to='/projects' style={{ textDecoration: 'none', color: 'black' }}>     <span class="navText navLink">projects</span>  </Link>
    <Link to='/contact' style={{ textDecoration: 'none', color: 'black' }}>   <span class="navText navLink">contact</span>  </Link>
  </div>
);

export default Header;

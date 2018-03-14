import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import linkedin from '../img/linkedin_logo.png'
import github from '../img/github_logo.png'

var Header = (props) => (
  <Navbar className="header"  expand="md">
    <NavbarBrand>
      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
        <span class="navText">piebri:~$</span>
        <span class="blinking-cursor">🁢</span>
      </Link>
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink>
	      <Link to='/projects' style={{ textDecoration: 'none', color: 'white' }}>     <span class="navText navLink">projects</span>  </Link>
	    </NavLink>
	  </NavItem>
	  <NavItem>
	    <NavLink>
	      <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>   <span class="navText navLink">contact</span>  </Link>
	    </NavLink>
	  </NavItem>
	  <NavItem>
	    <NavLink>
	      <a href="https://www.linkedin.com/in/piercebrian/" target="_blank"><img class="linkedin" src={linkedin} alt={"linkedin"} /></a>
	      <a href="https://github.com/theCalibrius" target="_blank"><img class="github" src={github} alt={"github"} /></a>
	    </NavLink>
	  </NavItem>
    </Nav>
  </Navbar>
);

export default Header;

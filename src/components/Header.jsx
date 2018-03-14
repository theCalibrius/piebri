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
    </Nav>
  </Navbar>
);

export default Header;

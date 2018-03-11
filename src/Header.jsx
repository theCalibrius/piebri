import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

var Header = (props) => (
  <div className="Header">
    <Link to='/'>Home </Link>
    <Link to='/projects'>Projects </Link>
    <Link to='/contact'>Contact</Link>
  </div>
);

export default Header;

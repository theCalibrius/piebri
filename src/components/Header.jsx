import React from 'react';
import { Link } from 'react-router-dom';
import Backdrop from './Backdrop';
import { FaGithub, FaLinkedin, FaBars } from 'react-icons/fa';
import '../css/Header.css';

const Header = ({ onCloseDrawer, onOpenDrawer, drawerOpen }) => (
  <div className="navBarContent">
    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
      <div className="logo">
        <div className="logoContainer">
          <div className="logoText">piebri:~$</div>
          <div className="logoCursor">
            <span className="blinkingCursor"> ▍</span>
          </div>
        </div>
      </div>
    </Link>
    <div className="navLinks">
      <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
        projects
      </Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
        contact
      </Link>
      <div className="socialLinks">
        <a
          href="https://www.linkedin.com/in/piercebrian/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="linkedin"
        >
          <FaLinkedin className="linkedin text-[20px] text-white" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/theCalibrius"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github profile"
          className="github"
        >
          <FaGithub className="github text-[20px] text-white" aria-hidden="true" />
        </a>
      </div>
    </div>
    <div className="navMenuIconContainer">
      <FaBars className="navMenuIcon" onClick={onOpenDrawer} />
    </div>
    {drawerOpen && <Backdrop onClick={onCloseDrawer} zIndex={1000000} opacity={0.5} />}

    <div
      className={`custom-drawer ${drawerOpen ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modalSidebarContainer" onClick={onCloseDrawer}>
        <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
          projects
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
          contact
        </Link>
        <a
          href="https://www.linkedin.com/in/piercebrian/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-white hover:opacity-80"
        >
          <FaLinkedin className="linkedin text-[20px] text-white" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/theCalibrius"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github profile"
          className="text-white hover:opacity-80"
        >
          <FaGithub className="github text-[20px] text-white" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
);

export default Header;

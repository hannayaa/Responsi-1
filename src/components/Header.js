import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#about">Hannah's Portfolio</a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About Hanna</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Hanna's Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Hanna's Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#crud">CRUD</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

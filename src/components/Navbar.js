import React from "react";
import logo from "../logo.svg";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        <span className="navbar-brand mb-0 h1">
          <img src={logo} alt="" />
        </span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://destinoriocuarto.gob.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sitio Web
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

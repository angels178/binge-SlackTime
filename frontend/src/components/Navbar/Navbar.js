import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-bg-secondary font-link">
     
      <div className="links-list collapse navbar-collapse d-flex flex-wrap">
        <ul className="navbar-nav ml-auto d-flex-wrap" id="navbarNavAltMarkup">
          <li className="home nav-item px-3">
            <Link to="/" className="nav-link text-light">
              Home
            </Link>
          </li>

          <li className="view nav-item px-3">
            <Link to="/shows" className="nav-link text-light">
              View All Shows
            </Link>
          </li>

          <li className="create nav-item px-3">
            <Link to="/shows/new" className="nav-link text-light">
              Create Favorite Show
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-bg-secondary p-2 font-link">
      <div className="container-fluid">
        <ul className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <li>
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shows" className="nav-link text-light">
                View All Shows
              </Link>
            </li>
            <li>
              <Link to="/shows/new" className="nav-link text-light">
                Create Favorite Show
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

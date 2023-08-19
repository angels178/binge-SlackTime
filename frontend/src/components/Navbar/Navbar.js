import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shows">Index</Link>
        </li>
        <li>
          <Link to="/shows/new">Add Favorite Show</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

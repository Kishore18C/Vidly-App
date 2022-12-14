import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return ( <nav className="navbar navbar-expand-lg navbar-light bg-light" >
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Vidly</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/movies">Movies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customers">Customers</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/rental">Rental</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav> );
}
 
export default NavBar;
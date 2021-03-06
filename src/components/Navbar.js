import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-item">
          <Link to="/">Titkok</Link>
        </li>
        {!user && (
          <li>
            <Link to="/registration">Regisztráció</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-item">
          <Link to="/">Titkok</Link>
        </li>
        <li>
          <Link to="/registration">Regisztráció</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

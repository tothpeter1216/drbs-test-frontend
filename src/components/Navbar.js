import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-item">
        Titkok
      </a>
      <a href="/registration" className="navbar-item">
        Regisztráció
      </a>
    </nav>
  );
};

export default Navbar;

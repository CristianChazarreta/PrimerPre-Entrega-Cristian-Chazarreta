import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
     <img className="logo" src="https://static.vecteezy.com/system/resources/previews/001/188/562/non_2x/fire-png.png"alt="" 
  
     />
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Nosotros</NavLink>
        </li>
        <li>
          <NavLink to="/services">Productos</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};

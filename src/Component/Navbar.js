import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactDimmer } from 'react-dimmer'



const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid py-2">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/todo">Todo</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart" aria-current="page">cart</NavLink>
        </li>
      </ul>
      <NavLink className="navbar-brand mx-auto fw-bold" to="/">Website</NavLink>
     
      
      
      </div>
      </div>
</nav>
   </>
  );
};

export default Navbar;

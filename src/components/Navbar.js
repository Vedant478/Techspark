import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/TS_images/logo.png";
// import { click } from "@testing-library/user-event/dist/click"
import { Button } from "./Button";
import "./Navbar.css";
function Navbar() {
  const [click, setclick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setclick(!click);
  const closeMobileMenu = () => setclick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo}></img>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
                About us 
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/coreteam"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Core Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/website"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Website team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/partners" className="nav-links" onClick={closeMobileMenu}>
                Partners
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus" className="nav-links" onClick={closeMobileMenu}>
                Contact us
              </Link>
            </li>
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;

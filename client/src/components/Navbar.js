import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navv">
      <div className="logo">SmartWorld</div>
      <div className={`links ${isOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mobiles">Mobiles</Link></li> {/* Updated Link */}
          <li><Link to="/">Watches</Link></li>
          <li><Link to="/" id="acc">Accessories</Link></li>
        </ul>
      </div>
      <button className="sign-in">Sign In</button>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;

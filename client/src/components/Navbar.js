
import React from "react";
import '../Styles/Navbar.css'
const Navbar = () =>{
    return(
        <nav className="navv">
            <div className="logo">SmartWorld</div>
            <div className="links">
               <ul>
                 <li><a href="/">Home</a></li>
                 <li><a href="/">Mobiles</a></li>
                 <li><a href="/">Watches</a></li>
                 <li><a href="/">Laptops</a></li>
               </ul>
            </div>
        </nav>
    );
};
export default Navbar;
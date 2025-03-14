
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
                 <li><a href="/">Acessories</a></li>
                 
               </ul>
            </div>
            <button  className="sign-in" >Sign In</button>
        </nav>
    );
};
export default Navbar;
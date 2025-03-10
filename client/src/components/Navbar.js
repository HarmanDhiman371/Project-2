// import React from 'react';
// import './Navbar.css'; // Make sure to create a CSS file for styling

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">
//                 <a href="/">Logo</a>
//             </div>
//             <ul className="navbar-links">
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/about">About</a></li>
//                 <li><a href="/services">Services</a></li>
//                 <li><a href="/contact">Contact</a></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

import React from "react";
import '../Styles/Navbar.css'
const Navbar = () =>{
    return(
        <nav className="navv">
            <div className="logo">Logo</div>
            <div className="links">
               <ul>
                 <li><a href="/">Home</a></li>
                 <li><a href="/">Cricket</a></li>
                 <li><a href="/">Football</a></li>
                 <li><a href="/">Services</a></li>
               </ul>
            </div>
        </nav>
    );
};
export default Navbar;
//navbar.jsx

import { Link } from "react-router-dom";

const Navbar = ()=> {
 return (
  <div className="navbar">
    <h2>QUOTES GENERATOR</h2>
    
    <div className="group-nav">
     <Link className="nav-links" to="/" >Home</Link>
     <Link className="nav-links" to="/contact" >Contact</Link>
    </div>
  </div>
 );
}

export default Navbar;
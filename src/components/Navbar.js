import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    const font = {
        size: "50px",
        fontFamily: "Georgia"
    };

    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo" style={font}>Shopping Center By PSU</Link>
                    
                    <ul className="right">
                        <li><Link to="/login" style={font}>Login</Link></li>
                        <li><Link to="/" style={font}>Shop</Link></li>
                        <li><Link to="/cart" style={font}>My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;
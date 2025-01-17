import React from "react";
import { Link } from "react-router-dom";
import '../css/Header.css';
const Header =()=>{
    return(
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/SignUp">SignUp</Link></li>
            </ul>
        </div>
    )
}

export default Header;
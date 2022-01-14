import React from 'react';
import {GiCoffeeCup} from 'react-icons/gi';
import {Link} from "react-router-dom";

function NavBar({coffeeNum}) {
    return (
        <div className="navBar">
            <Link to="/" className="nav-li">Home</Link>
            <Link to="/yourcoffee" className="nav-li">Your coffee</Link>
            <Link to="/login" className="nav-li">Login</Link>
            
            <p className="nav-li">{coffeeNum} <GiCoffeeCup/></p>
        </div>
      );
}

export default NavBar;

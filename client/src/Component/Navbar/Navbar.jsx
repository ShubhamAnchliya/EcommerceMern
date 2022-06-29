import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
  return (
    <>

    <nav className="navbar">
        <div className="navbar-container containerN">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li className='nav-item'><NavLink className='linkS'  to="/">Home</NavLink></li>
                <li className='nav-item'><NavLink className='linkS' to="/about">About</NavLink></li>
                <li className='nav-item'><NavLink className='linkS' to="/profile">Profile</NavLink></li>
                {/* <li className='nav-item'><NavLink to="/">Menu</NavLink></li> */}
                <li className='nav-item'><NavLink className='linkS' to="/contact">Contact</NavLink></li>
                <li className='nav-item'><NavLink className='linkS' to="/signup">SignUp</NavLink></li>
                <li className='nav-item'><NavLink className='linkS' to="/signin">SignIn</NavLink></li>

                {/* <a href="fsd#">Hover this link</a> */}
            </ul>
           
          <h1>  <NavLink className="logo linkS" to="/" >Herewr</NavLink></h1>
        </div>
    </nav>



    </>
  )
}

export default Navbar;










import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import './Header.css'
const Header = () => {
    return (
       
       
          
           <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light">
           <img style={{height:'50px'}} src={logo} alt=""/>
        <button class="navbar-toggler bg-secondary" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <b><Link class="nav-link pr-4" href="#">Home</Link></b>
            </li>
            <li class="nav-item">
             <b> <Link class="nav-link pr-4"  href="#">Donation</Link></b>
            </li>
            <li class="nav-item">
            <b>  <Link class="nav-link pr-4" href="#">Blog</Link></b>
            </li>
            <li class="nav-item">
              <b><Link class="nav-link pr-4" href="#">Events</Link></b>
            </li>
             <li>
             <button className="Register-btn">Register</button>
             </li>
             <li>
             <button className="Admin-btn">Admin</button>
             </li>
            
          </ul>
        </div>
      </nav>
       </div>
   
    );
};

export default Header;
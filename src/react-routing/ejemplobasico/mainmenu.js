import React from 'react';
import {NavLink} from 'react-router-dom';

const MainMenu = ()=> {
  return (
    <nav>    
        <NavLink to="/"> [HOME]</NavLink> 
        <NavLink to="/about">[ABOUT]</NavLink>
        <NavLink to="/events">[EVENTS]</NavLink>
        <NavLink to="/products">[PRODUCTS]</NavLink>
        <NavLink to="/contact">[CONTACT]</NavLink> 
    </nav>
  );
}

export default MainMenu;
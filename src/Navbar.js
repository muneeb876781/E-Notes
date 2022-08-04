import { NavLink } from "react-router-dom";
import React from 'react';

export const Navbar = () => {
  return (
    <>
    <div className="menu">
        <NavLink className='navlink' exact activeClassName = 'active_class' to = '/'>E-Notes</NavLink>
        {/* <NavLink className='navlink' exact activeClassName = 'active_class' to = '/about'>About</NavLink> */}
    </div>
    </>
  );
};

export default Navbar;

import React from 'react';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-6 w-52 p-2 shadow">
        <li><a>All Group</a></li>
        <li><a>Create Group</a></li>
        <li><a>My Groups</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">HobbyHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>All Group</a></li>

        <li><Link to="/auth/createGroup">Create Group</Link></li>

        
        <li><NavLink  className={({isActive})=> isActive? 'text-blue-500 font ' : ''} to='createGroup'>Create Group</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    
      
 
  </div>
</div>
    );
};

export default Navbar;
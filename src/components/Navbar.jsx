
import { Link, NavLink } from 'react-router';




const Navbar = () => {
 
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">

    <div>
        <Link to="/" className="flex items-center space-x-2">
        <img
          src="https://i.ibb.co/G4j8w7JK/logo.png"
          alt="HobbyHub Logo"
          className="h-8 w-8"
        />
        <span className="text-xl font-bold hidden sm:inline">HobbyHub</span>
      </Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">


   


    <ul className="menu menu-horizontal px-1">

        <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font ' : ''} to="/">Home</NavLink></li>

      <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font ' : ''} to="/allGroup">All Group</NavLink></li>

        <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font ' : ''} to="/auth/createGroup">Create Group</NavLink></li>


        <li><NavLink  className={({isActive})=> isActive? 'text-blue-500 font ' : ''} to='/auth/myGroup'>My Group</NavLink></li>
    </ul>
  </div>

           <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-6 w-52 p-2 shadow">
        <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font ' : ''} to="/">Home</NavLink></li>

      <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font ' : ''} to="/allGroup">All Group</NavLink></li>

        <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font ' : ''} to="/auth/createGroup">Create Group</NavLink></li>


        <li><NavLink  className={({isActive})=> isActive? 'text-blue-500 font ' : ''} to='/auth/myGroup'>My Group</NavLink></li>
      </ul>
    </div>
  <div className="navbar-end">
    <Link to='/auth/login'>
       <button className='btn-primary'>Log IN</button>
      </Link>
 
  </div>
</div>
    );
};


export default Navbar;







 
import { Link, NavLink } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut,  } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().catch(err => console.log(err));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Left logo section */}
      <div className="navbar-start">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co/G4j8w7JK/logo.png"
            alt="HobbyHub Logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-bold hidden sm:inline">HobbyHub</span>
        </Link>
      </div>

      {/* Center navigation menu for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/auth/allGroup">All Group</NavLink></li>
          <li><NavLink to="/auth/createGroup">Create Group</NavLink></li>
          <li><NavLink to="/auth/myGroup">My Group</NavLink></li>
        </ul>
      </div>

      {/* Dropdown menu for mobile */}
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/auth/allGroup">All Group</NavLink></li>
          <li><NavLink to="/auth/createGroup">Create Group</NavLink></li>
          <li><NavLink to="/auth/myGroup">My Group</NavLink></li>
        </ul>
      </div>

      {/* Right side: Login / Avatar */}
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3">
            {/* Avatar and hover card */}
            <div className="relative group">
              <img
                src={user.photoURL || 'https://i.ibb.co/YpKq7Q6/default-avatar.png'}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <div className="absolute hidden group-hover:flex flex-col items-start top-12 right-0 bg-white shadow-lg p-2 rounded z-10 min-w-[180px]">
                <p className="text-sm text-gray-700">{user.displayName || 'User'}</p>
                <p className="text-xs text-gray-500 break-words">{user.email}</p>
              </div>
            </div>

            {/* Logout button */}
            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-outline text-red-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/auth/login">
            <button className="btn btn-sm bg-purple-400">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;



 
import { Link, NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    logOut().catch((err) => console.error(err));
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`z-50 fixed top-0 left-0 w-full transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-white/20 shadow-md"
            : "bg-purple-100 border-b border-purple-300"
        }`}
      >
        <div className="navbar px-4 md:px-8">
          {/* Logo */}
          <div className="navbar-start">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/G4j8w7JK/logo.png"
                alt="HobbyHub"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-purple-700 hidden sm:inline">
                HobbyHub
              </span>
            </Link>
          </div>

          {/* Center Nav */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">
              {["/", "/auth/allGroup", "/about", "/contact"].map((path, index) => {
                const labels = ["Home", "All Groups", "About", "Contact"];
                return (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded transition ${
                          isActive
                            ? "text-purple-700 font-bold bg-purple-200"
                            : "text-purple-800"
                        } hover:bg-purple-200`
                      }
                    >
                      {labels[index]}
                    </NavLink>
                  </li>
                );
              })}
              {user && (
                <li>
                  <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="font-semibold text-purple-800 px-3 py-2 hover:bg-purple-200 rounded transition"
                  >
                    Dashboard
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-100 rounded-box w-52 text-purple-800">
              {["/", "/auth/allGroup", "/about", "/contact"].map((path, index) => {
                const labels = ["Home", "All Groups", "About", "Contact"];
                return (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded transition ${
                          isActive
                            ? "text-purple-700 font-bold bg-purple-200"
                            : "text-purple-800"
                        } hover:bg-purple-200`
                      }
                    >
                      {labels[index]}
                    </NavLink>
                  </li>
                );
              })}
              {user && (
                <li>
                  <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="text-purple-800 px-3 py-2 hover:bg-purple-200 rounded transition w-full text-left"
                  >
                    Dashboard
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Right section */}
          <div className="navbar-end gap-2">
            {user ? (
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="relative group">
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/YpKq7Q6/default-avatar.png"
                    }
                    alt="User"
                    className="w-10 h-10 rounded-full cursor-pointer"
                  />
                  <div className="absolute hidden group-hover:flex flex-col items-start top-12 right-0 bg-white shadow-lg p-2 rounded z-10 min-w-[180px]">
                    <p className="text-sm text-gray-700">
                      {user.displayName || "User"}
                    </p>
                    <p className="text-xs text-gray-500 break-words">
                      {user.email}
                    </p>
                  </div>
                </div>

                {/* Logout */}
                <button
                  onClick={handleLogOut}
                  className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white text-red-500 border border-red-500 rounded hover:text-white hover:bg-red-500 group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-red-500 absolute bottom-0 left-0 -translate-x-full translate-y-full mb-9 ml-9 transition-all duration-500 ease-in-out group-hover:ml-2 group-hover:mb-2 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">
                    Logout
                  </span>
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to="/auth/login">
                  <button className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-purple-600 rounded hover:bg-purple-700 group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full translate-y-full mb-9 ml-9 transition-all duration-500 ease-in-out group-hover:ml-2 group-hover:mb-2 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-purple-700">
                      Login
                    </span>
                  </button>
                </Link>
                <Link to="/auth/register">
                  <button className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-purple-600 rounded hover:bg-purple-700 group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full translate-y-full mb-9 ml-9 transition-all duration-500 ease-in-out group-hover:ml-2 group-hover:mb-2 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-purple-700">
                      Register
                    </span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dashboard Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsDrawerOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative w-72 max-w-full bg-white shadow-lg p-6 z-50 overflow-y-auto">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Dashboard</h3>

            {/* User Info */}
            <div className="mb-6 text-center">
              <img
                src={user?.photoURL || "https://i.ibb.co/YpKq7Q6/default-avatar.png"}
                alt="User"
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="mt-2 font-medium">{user?.displayName}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-2">
              <NavLink
                to="/auth/createGroup"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded hover:bg-purple-100 ${
                    isActive ? "text-purple-700 font-bold bg-purple-100" : "text-gray-700"
                  }`
                }
                onClick={() => setIsDrawerOpen(false)}
              >
                ➕ Create Group
              </NavLink>
              <NavLink
                to="/auth/myGroup"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded hover:bg-purple-100 ${
                    isActive ? "text-purple-700 font-bold bg-purple-100" : "text-gray-700"
                  }`
                }
                onClick={() => setIsDrawerOpen(false)}
              >
                📂 My Groups
              </NavLink>
              <NavLink
                to="/profile"
                className="block px-4 py-2 rounded hover:bg-purple-100 text-gray-700"
                onClick={() => setIsDrawerOpen(false)}
              >
                👤 My Profile
              </NavLink>
              <NavLink
                to="/my-reviews"
                className="block px-4 py-2 rounded hover:bg-purple-100 text-gray-700"
                onClick={() => setIsDrawerOpen(false)}
              >
                ⭐ My Reviews
              </NavLink>
              <NavLink
                to="/"
                className="block px-4 py-2 rounded hover:bg-purple-100 text-gray-700"
                onClick={() => setIsDrawerOpen(false)}
              >
                🏠 Back to Home
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

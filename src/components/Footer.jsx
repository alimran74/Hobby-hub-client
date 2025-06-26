import React from 'react';
import { Link, NavLink } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white w-full px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <aside className="space-y-3">
          <div className="flex items-center gap-2 text-pink-400">
            <img
              src="https://i.ibb.co/G4j8w7JK/logo.png"
              alt="HobbyHub Logo"
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold">HobbyHub</span>
          </div>
          <p className="text-gray-300">
            Connect with your passion.<br />Join hobby groups, meet people, and grow together.
          </p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </aside>

        {/* Services */}
        <nav className="space-y-2">
          <h6 className="text-lg font-semibold text-pink-400">Services</h6>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/auth/allGroup">All Groups</NavLink></li>
          <li><NavLink to="/auth/createGroup">Create Group</NavLink></li>
          <li><NavLink to="/auth/myGroup">My Groups</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </nav>

        {/* Company */}
        <nav className="space-y-2">
          <h6 className="text-lg font-semibold text-pink-400">Company</h6>
          <Link to='/about' className="link link-hover block">About</Link>
          <a className="link link-hover block">Contact</a>
          <a className="link link-hover block">Career</a>
          <a className="link link-hover block">Blog</a>
        </nav>

        {/* Socials */}
        <div>
          <h6 className="text-lg font-semibold text-pink-400 mb-3">Follow Me</h6>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com/wizard34.net" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/24/145/145802.png" alt="Facebook" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com/_alimran._/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/24/2111/2111463.png" alt="Instagram" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://github.com/alimran74" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/24/733/733553.png" alt="GitHub" className="w-6 h-6 hover:scale-110 transition" />
            </a>
          </div>
          <p className="text-sm mt-3 text-gray-300">
            Created by <span className="font-bold text-purple-300">Al Imran</span>
          </p>
        </div>
      </div>

      {/* Decorative Bar */}
      <div className="h-1 w-1/2 mx-auto bg-purple-300 rounded-full blur-sm mt-8 animate-pulse" />
    </footer>
  );
};

export default Footer;

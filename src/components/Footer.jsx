import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-800 text-white py-6 px-4 flex flex-col items-center justify-center animate-fadeIn">
      <Sparkles className="w-8 h-8 mb-2 text-yellow-400 animate-pulse" />
      
      <p className="text-center text-lg font-semibold tracking-wider hover:text-yellow-300 transition duration-300">
        © {new Date().getFullYear()} — All rights reserved by <span className="text-pink-400 text-3xl">HobbyHub</span>
      </p>

      <p className="text-sm mt-2 text-gray-200">Created by <span className="text-xl font-bold">: Al Imran</span></p>
      
      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-2">
        <a href="https://www.facebook.com/wizard34.net" target="_blank" rel="noopener noreferrer" title="Facebook">
          <img src="https://cdn-icons-png.flaticon.com/24/145/145802.png" alt="Facebook" className="w-6 h-6 hover:scale-110 hover:rotate-6 transition-transform" />
        </a>
        <a href="https://www.instagram.com/_alimran._/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <img src="https://cdn-icons-png.flaticon.com/24/2111/2111463.png" alt="Instagram" className="w-6 h-6 hover:scale-110 hover:rotate-6 transition-transform" />
        </a>
        <a href="https://github.com/alimran74" target="_blank" rel="noopener noreferrer" title="GitHub">
          <img src="https://cdn-icons-png.flaticon.com/24/733/733553.png" alt="GitHub" className="w-6 h-6 hover:scale-110 hover:rotate-6 transition-transform" />
        </a>
      </div>

      {/* Glowing Bar Decoration */}
      <div className="absolute bottom-0 h-1 w-2/3 bg-yellow-400 rounded-full blur-sm animate-bounce mt-2" />
    </footer>
  );
};

export default Footer;


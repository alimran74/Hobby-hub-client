import { NavLink } from "react-router";
import { Player } from "@lottiefiles/react-lottie-player";
import RotatingText from "./RotatingText";
import DecryptedText from "./DecryptedText";
import SplashCursor from "./SplashCursor";
import { motion } from "framer-motion"; // ✅ import motion

const DashboardDrawer = ({ user, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 backdrop-blur-md bg-white/20 bg-opacity-50"
        onClick={onClose}
      >
        <SplashCursor />
      </div>

      {/* Sidebar with fade-in-left animation */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-72 max-w-full bg-white shadow-lg p-6 z-50 overflow-y-auto"
      >
        {/* Dashboard Title */}
        <h3 className="text-xl text-center font-bold mb-4">
          <DecryptedText
            text="Dashboard"
            animateOn="view"
            className="text-purple-700"
            encryptedClassName="text-gray-400"
            speed={40}
            sequential={true}
            revealDirection="start"
          />
        </h3>

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
                isActive
                  ? "text-purple-700 font-bold bg-purple-100"
                  : "text-gray-700"
              }`
            }
            onClick={onClose}
          >
            ➕ Create Group
          </NavLink>
          <NavLink
            to="/auth/myGroup"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-purple-100 ${
                isActive
                  ? "text-purple-700 font-bold bg-purple-100"
                  : "text-gray-700"
              }`
            }
            onClick={onClose}
          >
            📂 My Groups
          </NavLink>
          <NavLink
            to="/settings"
            className="block px-4 py-2 rounded hover:bg-purple-100 text-gray-700"
            onClick={onClose}
          >
            ⚙️ Settings
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-4 py-2 rounded hover:bg-purple-100 text-gray-700"
            onClick={onClose}
          >
            📬 Contact Support
          </NavLink>
          <NavLink
            to="/"
            className="block px-4 py-2 rounded hover:bg-purple-100 text-gray-700"
            onClick={onClose}
          >
            🏠 Back to Home
          </NavLink>

          {/* Animated Quotes */}
          <p className="mt-8 text-sm text-center italic text-gray-500">
            <DecryptedText
              text="Start where you are. Use what you have. Do what you can."
              animateOn="view"
              className="italic"
              encryptedClassName="text-gray-300"
              speed={40}
              sequential={true}
              revealDirection="start"
            />
          </p>
          <p className="text-sm text-center italic text-gray-500">
            <DecryptedText
              text="The best way to get started is to quit talking and begin doing."
              animateOn="view"
              className="italic"
              encryptedClassName="text-gray-300"
              speed={40}
              sequential={true}
              revealDirection="start"
            />
          </p>
          <p className="text-sm text-center italic text-gray-500">
            <DecryptedText
              text="Success is not final, failure is not fatal: It is the courage to continue that counts."
              animateOn="view"
              className="italic"
              encryptedClassName="text-gray-300"
              speed={40}
              sequential={true}
              revealDirection="start"
            />
          </p>

          {/* Lottie Animation */}
          <Player
            autoplay
            loop
            src="/Dashboard.json"
            style={{
              height: "200px",
              width: "250px",
              margin: "0 auto",
              marginTop: "10px",
            }}
          />

          {/* Rotating Motivation Text */}
          <RotatingText
            texts={[
              "🚀 Keep Learning.",
              "🎯 Stay Consistent.",
              "💡 Build Projects.",
              "🔥 Never Give Up.",
            ]}
            splitBy="words"
            auto
            loop
            staggerDuration={0.1}
            mainClassName="text-xl font-bold text-purple-600"
            elementLevelClassName="mx-1"
          />
        </nav>
      </motion.div>
    </div>
  );
};

export default DashboardDrawer;

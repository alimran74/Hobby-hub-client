import { NavLink } from "react-router";
import { Player } from "@lottiefiles/react-lottie-player";
const DashboardDrawer = ({ user, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 backdrop-blur-md bg-white/20 bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="relative w-72 max-w-full bg-white shadow-lg p-6 z-50 overflow-y-auto">
        <h3 className="text-xl text-center font-bold text-purple-700 mb-4">
          Dashboard
        </h3>

        {/* User Info */}
        <div className="mb-6 text-center">
          <img
            src={
              user?.photoURL || "https://i.ibb.co/YpKq7Q6/default-avatar.png"
            }
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
            className="block px-4 py-2 rounded hover:bg-purple-100 text-gray-700 "
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
          <p className="mt-8 text-xs text-center text-gray-500 italic">
            “Start where you are. Use what you have. Do what you can.”
          </p>
          <Player
            autoplay
            loop
            src="../../public/Dashboard.json" // You can replace this with any Lottie JSON URL
            style={{
              height: "200px",
              width: "250px",
              margin: "0 auto",
              marginTop: "10px",
            }}
          />
        </nav>
      </div>
    </div>
  );
};

export default DashboardDrawer;

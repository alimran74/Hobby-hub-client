import { NavLink } from "react-router";

const DashboardDrawer = ({ user, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 backdrop-blur-sm bg-white/20 bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="relative w-72 max-w-full bg-white shadow-lg p-6 z-50 overflow-y-auto">
        <h3 className="text-xl text-center font-bold text-purple-700 mb-4">Dashboard</h3>

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
            onClick={onClose}
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
            onClick={onClose}
          >
            📂 My Groups
          </NavLink>
          <NavLink
            to="/profile"
            className="block px-4 py-2 rounded hover:bg-purple-100 text-gray-700"
            onClick={onClose}
          >
            👤 My Profile
          </NavLink>
          <NavLink
            to="/my-reviews"
            className="block px-4 py-2 rounded hover:bg-purple-100 text-gray-700"
            onClick={onClose}
          >
            ⭐ My Reviews
          </NavLink>
          <NavLink
            to="/"
            className="block px-4 py-2 rounded hover:bg-purple-100 text-gray-700"
            onClick={onClose}
          >
            🏠 Back to Home
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default DashboardDrawer;

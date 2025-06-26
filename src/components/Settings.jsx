import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Settings = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL,
      });

      toast.success("✅ Profile updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("❌ Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen bg-purple-100 py-16 px-4 flex items-center justify-center">
      <motion.div
        className="max-w-lg w-full bg-white p-6 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">⚙️ Update Profile</h2>

        <form onSubmit={handleUpdateProfile} className="space-y-5">
          {/* Profile Image */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={photoURL || "https://i.ibb.co/YpKq7Q6/default-avatar.png"}
              alt="Profile"
              className="w-24 h-24 rounded-full border shadow"
            />
            <input
              type="url"
              className="w-full border border-purple-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Profile Image URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full border border-purple-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email (Read-only)</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 bg-gray-100"
              value={user?.email || ""}
              readOnly
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
          >
            Update Profile
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Settings;

import { useParams, useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { AuthContext } from "../provider/AuthProvider";

const GroupCard = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);

  useEffect(() => {
    fetch(`https://hobby-hub-server-seven-bay.vercel.app/groups/${id}`)
      .then((res) => res.json())
      .then((data) => setGroup(data))
      .catch((err) => {
        console.error("Failed to load group", err);
        navigate("/");
      });
  }, [id, navigate]);

  const handleDelete = () => {
    if (!user?.email) {
      toast.error("Please login to delete the group");
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "This group will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://hobby-hub-server-seven-bay.vercel.app/groups/${id}?email=${encodeURIComponent(
            user.email
          )}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              toast.success("Group deleted successfully!");
              navigate("/");
            } else {
              toast.error(data.message || "Failed to delete group!");
            }
          })
          .catch((err) => {
            toast.error("Failed to delete group!");
            console.error(err);
          });
      }
    });
  };

  if (!group) return <div className="text-center p-6">Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto p-8 bg-white dark:bg-purple-100 rounded-lg shadow-lg my-8"
    >
      <img
        src={group.image || "https://via.placeholder.com/600x300.png?text=No+Image"}
        alt={group.name || group.title || "Group Image"}
        className="w-full h-64 object-cover rounded shadow-md"
      />
      <h2 className="text-4xl font-extrabold mt-6 text-gray-900 dark:text-purple-900">
        {group.name || group.title}
      </h2>
      <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-purple-800">
        <span className="text-xl font-bold">Category:</span> {group.category}
      </p>
      <p className="mt-2 text-lg font-semibold text-gray-800 dark:text-purple-800">
        <span className="text-xl font-bold">Location:</span> {group.location}
      </p>
      <p className="mt-2 text-lg font-semibold text-gray-800 dark:text-purple-800">
        <span className="text-xl font-bold">Max Members:</span> {group.maxMembers}
      </p>
      <p className="mt-2 text-lg font-semibold text-gray-800 dark:text-purple-800">
        <span className="text-xl font-bold">Description:</span> {group.description}
      </p>
      <p className="mt-2 text-lg font-semibold text-gray-800 dark:text-purple-800">
        <span className="text-xl font-bold">Created by:</span>{" "}
        {group.createdByEmail || "Unknown"}
      </p>
      <p className="mt-2 text-lg font-semibold text-gray-800 dark:text-red-500">
        <span className="text-xl font-bold">End Date:</span>{" "}
        {group.endDate ? group.endDate.slice(0, 10) : "N/A"}
      </p>

      <button
        onClick={handleDelete}
        className="mt-8 w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 font-bold text-lg shadow-md"
      >
        Delete Group
      </button>
      <button
        onClick={() => navigate(`/updateGroup/${group._id}`)}
        className="mt-4 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-bold text-lg shadow-md"
      >
        Update Group
      </button>
    </motion.div>
  );
};

export default GroupCard;

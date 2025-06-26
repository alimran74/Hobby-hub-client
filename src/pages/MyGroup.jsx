import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const MyGroup = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://hobby-hub-server-seven-bay.vercel.app/groups?createdByEmail=${user.email}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setGroups(data);
        })
        .catch((error) => {
          console.error("Error fetching groups:", error);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
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
              Swal.fire("Deleted!", "Group has been deleted.", "success");
              setGroups(groups.filter((group) => group._id !== id));
            } else {
              Swal.fire("Error", data.message || "Failed to delete group", "error");
            }
          })
          .catch(() =>
            Swal.fire("Error", "Failed to delete group", "error")
          );
      }
    });
  };

  const handleEdit = (id) => {
    // Navigate to update page instead of detail page
    navigate(`/updateGroup/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 px-4">
      {groups.length === 0 ? (
        <p className="col-span-3 text-center text-gray-500 text-lg">
          No groups found.
        </p>
      ) : (
        groups.map((group) => (
          <motion.div
            key={group._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={group.image || "https://via.placeholder.com/400x200.png?text=Group+Image"}
              alt={group.name || group.title || "Group Image"}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                {group.name || group.title}
              </h2>
              <p className="text-gray-700 mb-1">
                <span className="text-xl font-bold">Description:</span>{" "}
                {group.description}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="text-xl font-bold">Category:</span> {group.category}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="text-xl font-bold">Location:</span> {group.location}
              </p>
              <p className="text-gray-700 mb-4 text-sm">
                <span className="text-xl font-bold">Created By:</span>{" "}
                {group.createdByEmail}
              </p>

              <div className="flex justify-start gap-3">
                <button
                  onClick={() => handleEdit(group._id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(group._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default MyGroup;

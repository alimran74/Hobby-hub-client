import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider"; // adjust path as needed

const AllGroup = () => {
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // get current user

  useEffect(() => {
    fetch("http://localhost:7000/groups")
      .then((res) => res.json())
      .then((data) => setGroups(data))
      .catch((error) => console.error("Failed to fetch groups:", error));
  }, []);

  const handleViewDetails = (id) => {
    if (!user) {
      toast.error("Please login first");
      return;
    }
    navigate(`/groups/${id}`);
  };

  return (
    <div className="p-6 my-8 bg-purple-100">
      <h1 className="text-2xl font-bold mb-4 text-center">All Hobby Groups</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group._id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={group.image}
              alt={group.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{group.name}</h2>
            <p className="text-gray-600">Category: {group.category}</p>
            <p className="text-gray-600">Location: {group.location}</p>
            <p className="text-gray-600">Max Members: {group.maxMembers}</p>
            <button
              onClick={() => handleViewDetails(group._id)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGroup;


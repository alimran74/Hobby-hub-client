import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider"; 
import { toast } from "react-toastify";

const FeaturedGroup = () => {
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // 

  useEffect(() => {
    fetch("http://localhost:7000/featured-groups")
      .then((res) => res.json())
      .then((data) => setGroups(data))
      .catch((err) => console.error("Failed to load featured groups", err));
  }, []);

  const handleViewDetails = (id) => {
    if (!user) {
      toast.error("Please login first");
      return;
    }
    navigate(`/groups/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {groups.slice(0, 6).map((group) => (
        <div
          key={group._id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={group.image}
            alt={group.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{group.name}</h2>
            <p className="text-gray-600 mt-1">Category: {group.category}</p>
            <p className="text-gray-600 mt-1">Max Members: {group.maxMembers}</p>
            <p className="text-gray-600 mt-1">Meeting: {group.location}</p>
            <button
              onClick={() => handleViewDetails(group._id)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedGroup;




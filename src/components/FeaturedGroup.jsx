import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider"; 
import { toast } from "react-toastify";
import { ArrowRightCircle } from "lucide-react";

const FeaturedGroup = () => {
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://hobby-hub-server-seven-bay.vercel.app/featured-groups")
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
    <div data-aos="fade-up" className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center">Featured Groups</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {groups.slice(0, 8).map((group) => (
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
                className="mt-4 w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg font-bold text-lg shadow-md hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View Details
                <ArrowRightCircle className="w-5 h-5 animate-pulse" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGroup;

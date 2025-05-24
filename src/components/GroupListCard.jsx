import { ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router";


const GroupListCard = ({ group }) => {
  
 
  return (
    <div className="text-6xl">
    <div className="bg-purple-100 p-4 rounded shadow hover:shadow-lg transition mt-20 mx-auto ">
      <img
        src={group.image}
        alt={group.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-4xl font-extrabold mt-6 text-gray-900 dark:text-purple-900">
        {group.name}
      </h2>
      <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-purple-800">
        <span className="text-xl font-bold">Group Name:</span> {group.groupName}
      </p>
      <p className="mt- text-lg font-semibold text-gray-800 dark:text-purple-800">
        <span className="text-xl font-bold">Location:</span> {group.location}
      </p>
      <p className="mt-2 text-lg font-semibold text-gray-800 dark:text-purple-800">
        <span className="text-xl font-bold">Max Members:</span>{" "}
        {group.maxMembers}
      </p>
      <p className="mt-2 text-lg font-semibold text-gray-800 dark:text-purple-800">
        <span className="text-xl font-bold">Description:</span>{" "}
        {group.description}
      </p>
      <p className="text-sm mt-1 text-gray-500">
        Created by: {group.createdByName}
      </p>
      
      <Link to="/">
      <button
    className="group mt-8 w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:from-purple-600 hover:to-indigo-700"
  >
    <ArrowLeftCircle className="w-6 h-6 transition-transform duration-300 transform group-hover:-translate-x-1" />
    <span className="font-bold text-lg tracking-wide">Go Home</span>
  </button>
      </Link>
    </div>
    </div>
    
  );
};

export default GroupListCard;

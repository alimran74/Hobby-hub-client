import { useParams } from "react-router";
import { useEffect, useState } from "react";

const GroupCard = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:7000/groups/${id}`)
      .then(res => res.json())
      .then(data => setGroup(data))
      .catch(err => console.error("Error loading group:", err));
  }, [id]);

  if (!group) {
    return <p className="p-6 text-gray-600">Loading group details...</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <img
        src={group.image}
        alt={group.name}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-2xl font-bold mt-4">{group.name}</h2>
      <p className="text-gray-700 mt-2">Category: {group.category}</p>
      <p className="text-gray-700 mt-1">Location: {group.location}</p>
      <p className="text-gray-700 mt-1">Max Members: {group.maxMembers}</p>
      <p className="text-gray-700 mt-1">Description: {group.description}</p>
    </div>
  );
};

export default GroupCard;

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";

const GroupListCard = ({ group }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const isCreator = user?.email === group.createdByEmail;

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this group?");
    if (!confirmed) return;

    try {
      const res = await fetch(
        `https://hobby-hub-server-seven-bay.vercel.app/groups/${group._id}?email=${encodeURIComponent(
          user.email
        )}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.success) {
        alert("✅ Group deleted successfully");
        // TODO: Trigger state update or reload
      } else {
        alert("❌ Failed to delete group");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting group");
    }
  };

  const handleEdit = () => {
    navigate(`/updateGroup/${group._id}`);
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md">
      <h2 className="text-xl font-semibold mb-2">{group.name || group.title}</h2>
      <p>{group.description}</p>

      {isCreator && (
        <div className="mt-4 flex gap-3">
          <button
            onClick={handleEdit}
            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default GroupListCard;

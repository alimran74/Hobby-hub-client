import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UpdateGroup = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "", category: "", location: "",
    maxMembers: "", description: "", image: "", endDate: ""
  });

  useEffect(() => {
    fetch(`http://localhost:7000/groups/${id}`)
      .then(res => res.json())
      .then(data => setFormData(data))
      .catch(() => toast.error("Failed to load group"));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isNaN(Number(formData.maxMembers)) || Number(formData.maxMembers) <= 0) {
      toast.error("Max Members must be a positive number");
      return;
    }

    const updatedData = { ...formData };

    try {
      const response = await fetch(`http://localhost:7000/groups/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error("JSON parse error:", jsonError);
        throw new Error("Invalid JSON response from server");
      }

      if (!response.ok) {
        throw new Error(data?.message || "Update failed");
      }

      if (data.modifiedCount === 0) {
        toast.info("No changes detected.");
      } else {
        toast.success("Group updated!");
      }

      navigate(`/group/${id}`);
    } catch (err) {
      console.error("Error updating group:", err);
      toast.error(err.message || "Update failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded space-y-4 shadow">
      <h2 className="text-2xl font-bold text-center dark:text-white">Update Group</h2>

      {[
        { label: "Name", name: "name" },
        { label: "Category", name: "category" },
        { label: "Location", name: "location" },
        { label: "Max Members", name: "maxMembers", type: "number" },
        { label: "Image URL", name: "image" },
        { label: "End Date", name: "endDate", type: "date" }
      ].map(({ label, name, type = "text" }) => (
        <div key={name}>
          <label className="text-sm dark:text-white">{label}</label>
          <input
            type={type}
            name={name}
            value={formData[name] || ""}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded dark:bg-gray-800 dark:text-white"
            required
          />
        </div>
      ))}

      <div>
        <label className="text-sm dark:text-white">Description</label>
        <textarea
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          rows="3"
          className="w-full mt-1 p-2 border rounded dark:bg-gray-800 dark:text-white"
          required
        />
      </div>

      <button type="submit" className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
        Update Group
      </button>
    </form>
  );
};

export default UpdateGroup;


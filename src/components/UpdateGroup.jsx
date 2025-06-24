import { useParams, useNavigate, Link } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ArrowRightCircle } from "lucide-react";

const UpdateGroup = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "", category: "", location: "",
    maxMembers: "", description: "", image: "", endDate: ""
  });

  useEffect(() => {
    fetch(`https://hobby-hub-server-seven-bay.vercel.app/groups/${id}`)
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
      const response = await fetch(`https://hobby-hub-server-seven-bay.vercel.app/groups/${id}`, {
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
    <div className="min-h-screen px-4 pb-20 bg-gray-50 dark:">
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-20 mb-20 p-6 bg-white dark:bg-purple-100 rounded space-y-4 shadow ">
      <h2 className="text-2xl font-bold text-center dark:text-black">Update Group</h2>

      {[
        { label: "Name", name: "name" },
        { label: "Category", name: "category" },
        { label: "Location", name: "location" },
        { label: "Max Members", name: "maxMembers", type: "number" },
        { label: "Image URL", name: "image" },
        { label: "End Date", name: "endDate", type: "date" }
      ].map(({ label, name, type = "text" }) => (
        <div key={name}>
          <label className="text-sm dark:text-black">{label}</label>
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
    <Link to="/">
    <button
  className="mt-4 w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg font-bold text-lg shadow-md hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
>
  Return Home
  <ArrowRightCircle className="w-5 h-5 animate-pulse" />
</button></Link>
    </div>
  );
};

export default UpdateGroup;


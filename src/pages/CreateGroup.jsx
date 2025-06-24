import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateGroup = () => {
  const { user } = useContext(AuthContext);

  const handleCreateGroup = async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);

  const groupData = Object.fromEntries(formData.entries());
    console.log(groupData)

//  send data to the server
  const newGroup = {
    ...groupData,
    maxMembers: parseInt(groupData.maxMembers),
    createdByName: user.displayName,
    createdByEmail: user.email,
    createdAt: new Date(),
  };

  try {
    const res = await fetch('https://hobby-hub-server-seven-bay.vercel.app/groups', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGroup)
    });

    const data = await res.json();
    if (data.insertedId) {
      toast.success("Group created successfully!");
      form.reset();
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong");
  }
};


  return (
    
    <div className="max-w-4xl mx-auto  p-4 bg-purple-100 my-10 rounded">
  <h2 className="text-3xl font-bold text-center mb-6">Create a New Hobby Group</h2>
  <form
    onSubmit={handleCreateGroup}
    className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg"
  >
    <input name="groupName" required type="text" placeholder="Group Name" className="input input-bordered w-full" />

    <select name="category" className="select select-bordered w-full" required defaultValue="">
  <option value="" disabled>Choose Hobby Category</option>
  <option value="Drawing & Painting">Drawing & Painting</option>
  <option value="Photography">Photography</option>
  <option value="Video Gaming">Video Gaming</option>
  <option value="Fishing">Fishing</option>
  <option value="Running">Running</option>
  <option value="Cooking">Cooking</option>
  <option value="Reading">Reading</option>
  <option value="Writing">Writing</option>
</select>


    <textarea name="description" required placeholder="Description" className="textarea textarea-bordered md:col-span-2 w-full"></textarea>
    <input name="location" required type="text" placeholder="Meeting Location" className="input input-bordered w-full" />
    <input name="maxMembers" required type="number" placeholder="Max Members" className="input input-bordered w-full" />
    <input name="endDate" required type="date" className="input input-bordered w-full" />
    <input name="image" required type="text" placeholder="Image URL" className="input input-bordered w-full" />
    <input readOnly value={user?.displayName || ''} className="input input-bordered bg-gray-100 w-full" />
    <input readOnly value={user?.email || ''} className="input input-bordered bg-gray-100 w-full" />

    <button className="btn bg-purple-400 md:col-span-2 w-full">Create</button>
  </form>
</div>

  );
};

export default CreateGroup;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import GroupListCard from "../components/GroupListCard"; 

const MyGroup = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:7000/groups?createdByEmail=${user.email}`)
        .then(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then(data => {
        //   console.log("Fetched groups:", data);
          setGroups(data);
        })
        .catch(error => {
          console.error("Error fetching groups:", error);
        });
    }
  }, [user]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {groups.length === 0 ? (
        <p className="col-span-3 text-center text-gray-500">No groups found.</p>
      ) : (
        groups.map((group) => (
          <GroupListCard key={group._id} group={group} />
        ))
      )}
    </div>
  );
};

export default MyGroup;



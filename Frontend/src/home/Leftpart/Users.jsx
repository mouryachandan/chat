import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();

  return (
    <div className="flex flex-col h-full">
      <h1 className="px-6 py-4 text-white font-semibold bg-slate-800 rounded-lg shadow-md">
        Messages
      </h1>
      <div className="flex-1 overflow-y-auto mt-4">
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
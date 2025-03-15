import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="p-4 bg-slate-800">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center bg-slate-700 rounded-lg p-2">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="p-2 text-gray-400 hover:text-white transition-colors">
            <FaSearch className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
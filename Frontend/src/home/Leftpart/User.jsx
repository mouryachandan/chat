import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import profile from "../../../public/user.jpg";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      className={`flex items-center p-4 hover:bg-slate-700 cursor-pointer transition-colors duration-300 ${
        isSelected ? "bg-slate-600" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={profile} alt={user.fullname} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="ml-4">
        <h1 className="font-bold text-white">{user.fullname}</h1>
        <span className="text-sm text-gray-400">{user.email}</span>
      </div>
    </div>
  );
}

export default User;
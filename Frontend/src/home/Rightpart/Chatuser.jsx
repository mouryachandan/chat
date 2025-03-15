import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";
import profile from "../../../public/user.jpg";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className="flex items-center p-4 bg-slate-800">
      <div className="flex items-center space-x-4">
        <div className="avatar online">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={profile} alt={selectedConversation.fullname} className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">{selectedConversation.fullname}</h1>
          <span className="text-sm text-gray-400">{getOnlineUsersStatus(selectedConversation._id)}</span>
        </div>
      </div>
    </div>
  );
}

export default Chatuser;
import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../zustand/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="w-full bg-slate-900 text-gray-300 flex flex-col h-screen">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <Chatuser />
          <div className="flex-1 overflow-y-auto">
            <Messages />
          </div>
          <Typesend />
        </>
      )}
    </div>
  );
}

const NoChatSelected = () => {
  const [authUser] = useAuth();

  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-center text-gray-400">
        Welcome <span className="font-semibold text-xl">{authUser.user.fullname}</span>
        <br />
        No chat selected, please start conversation by selecting anyone to your contacts
      </h1>
    </div>
  );
};

export default Right;
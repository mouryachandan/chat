import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-slate-800">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 bg-slate-700 text-white rounded-lg p-2 outline-none"
        />
        <button type="submit" className="p-2 text-blue-500 hover:text-blue-400 transition-colors">
          <IoSend className="text-2xl" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;
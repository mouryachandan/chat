import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error in Logout", error);
      toast.error("Error in logging out");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-slate-800">
      <button
        onClick={handleLogout}
        className="flex items-center text-white hover:text-red-500 transition-colors"
      >
        <BiLogOutCircle className="text-2xl" />
        <span className="ml-2">Logout</span>
      </button>
    </div>
  );
}

export default Logout;
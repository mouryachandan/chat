import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="w-full bg-slate-900 text-gray-300 flex flex-col h-screen">
      <Search />
      <div className="flex-1 overflow-y-auto">
        <Users />
      </div>
      <Logout />
    </div>
  );
}

export default Left;
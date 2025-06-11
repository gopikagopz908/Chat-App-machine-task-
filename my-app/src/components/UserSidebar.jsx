import React from "react";

import { useAllUsers } from "../Hook/UsersHook";
import SidebarUserCard from "./SidebarUserCard";

const UserSidebar = () => {
      const{data}=useAllUsers()
  return (
    <div className="w-64 h-screen bg-gray-100 border-r overflow-y-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <div className="flex flex-col gap-3">
        {data?.length > 0 ? (
          data.map((user, index) => (
            <SidebarUserCard key={index} user={user} />
          ))
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserSidebar;

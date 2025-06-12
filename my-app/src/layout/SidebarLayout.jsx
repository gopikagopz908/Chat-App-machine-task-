import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "../../../my-app/src/components/UserSidebar";
import NavBar from "../components/NavBar";


const SidebarLayout = () => {
  return (
    <div>
        <NavBar/>
    <div className="flex h-screen ">
    <UserSidebar  />


      {/* Main content area */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <Outlet />
      </div>

</div>

    </div>
  );
};

export default SidebarLayout;

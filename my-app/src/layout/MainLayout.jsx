import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../components/MainNavbar'; // top navbar
import NavBar from '../components/NavBar'; // secondary navbar below top

const MainLayout = () => {
  return (
    <div className="min-h-screen pt-4 bg-gray-100 flex  flex-col">
      {/* Top Navbar */}
      <header className="w-full shadow-sm bg-white">
        <TopNavbar />
      </header>
      
      
  
      {/* Page Content */}
      <main className="flex-1 overflow-y-auto ">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../components/MainNavbar'; // top navbar
import NavBar from '../components/NavBar'; // secondary navbar below top

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Navbar */}
      <header className="w-full shadow-sm bg-white">
        <TopNavbar />
      </header>

      {/* Secondary Navbar */}
      <nav className="w-full shadow bg-white">
        <NavBar />
      </nav>

      {/* Page Content */}
      <main className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

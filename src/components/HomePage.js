import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Table from "./Table"; // Assuming your table component is named Table

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-slate-300 min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
          <div className="mb-6">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl">
              Highlights
            </h2>
            <h3 className="text-gray-500 text-2xl mt-2 sm:text-3xl md:text-4xl">
              Statistics
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <p className="text-2xl font-bold">85</p>
              <p className="text-lg text-gray-700">Policy 1</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-2xl font-bold">100</p>
              <p className="text-lg text-gray-700">Policy 2</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-2xl font-bold">85</p>
              <p className="text-lg text-gray-700">Policy 3</p>
            </div>
          </div>

          {/* Table Integration */}
          <div className="mt-8 bg-white p-4 rounded shadow">
            <h4 className="text-xl font-semibold mb-4">Policy Details</h4>
            <Table />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;

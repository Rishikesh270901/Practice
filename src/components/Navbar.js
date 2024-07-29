import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Navbar = () => {
  return (
    <div className="bg-custom-beige h-14 shadow-md flex items-center">
      <div className="container mx-auto flex justify-center space-x-4">
        <a className="text-gray-700 hover:text-blue-500 font-medium" href="#">Link 1</a>
        <p className="text-gray-700">Customer Name</p>
        <p className="text-gray-700">Customer Email</p>
      </div>
      <div className="ml-auto mr-4">
        <i className="fas fa-user-circle" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Navbar;

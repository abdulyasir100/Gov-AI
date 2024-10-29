"use client"
import { useState } from "react";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full md:w-1/3 p-2">
      <div 
        className="bg-gray-200 p-4 rounded-md cursor-pointer shadow-md"
        onClick={toggleDropdown}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {isOpen && (
        <div className="bg-white p-4 mt-2 rounded-md shadow-lg">
          {/* Render content dynamically */}
          {content}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

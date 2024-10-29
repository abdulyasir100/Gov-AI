"use client"
import { useState, useEffect, useRef } from "react";

const Dropdown = ({ title, options, selectedOption, onChange, hasImages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="mb-2 font-semibold text-lg text-gray-800">{title}</div>
      <div
        className="flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg text-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-700">
          {selectedOption ? options.find((opt) => opt.value === selectedOption).label : "Select an option"}
        </span>
        <span className="ml-2 text-gray-500">&#9660;</span>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="flex items-center px-4 py-3 text-lg cursor-pointer hover:bg-gray-100"
            >
              {hasImages && option.image && (
                <img src={option.image} alt={option.label} className="w-6 h-6 mr-2 rounded" />
              )}
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

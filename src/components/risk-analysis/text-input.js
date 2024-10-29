"use client";
const TextInput = ({ label, placeholder, onChange, value }) => {
    return (
      <div className="w-full">
        <label className="text-lg font-semibold text-gray-700 mb-2 block">{label}</label>
        <input
          type="number"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm"
        />
      </div>
    );
  };
  
  export default TextInput;
  
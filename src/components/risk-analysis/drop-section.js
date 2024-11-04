"use client";
import { useState } from "react";
import Dropdown from "./dropdown";
import TextInput from './text-input';

const DropSection = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(6).fill(''));

  const [inputValue, setInputValue] = useState('');

  const dropdownCountries = [
    { value: 'JP', label: 'Japan', image: "/assets/images/flags/japan.png" },
    { value: 'PH', label: 'Philipines', image: "/assets/images/flags/philipines.png" },
  ];

  const dropdownMaterials = [
    { value: 'GOLD', label: 'Emas', image: "/assets/images/materials/gold-bar.png" },
    { value: 'CPO', label: 'CPO', image: "/assets/images/materials/fruit.png" },
    { value: 'RUBBER', label: 'Karet', image: "/assets/images/materials/rubber.png" },
  ];

  const dropdownModal = [
    { value: 'pinjam', label: 'Pinjaman' },
    { value: 'pinjol', label: 'Pinjol' }
  ];

  const dropdownTrading = [
    { value: 'LC', label: 'LC' },
    { value: 'SF', label: 'SF' },
    { value: 'QOP', label: 'QOP' },
  ];

  const dropdownAsuransi = [
    { value: '0', label: 'Tidak Ada' },
    { value: '1', label: 'Ada' },
  ];

  const handleSelectChange = (index, value) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = value;
    setSelectedOptions(updatedOptions);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Dropdown
          title="Negara Tujuan"
          options={dropdownCountries}
          selectedOption={selectedOptions[0]}
          onChange={(value) => handleSelectChange(0, value)}
          hasImages={true}
        />
        <Dropdown
          title="Komoditas"
          options={dropdownMaterials}
          selectedOption={selectedOptions[1]}
          onChange={(value) => handleSelectChange(1, value)}
          hasImages={true}
        />
        <TextInput 
            label="Nilai Kontrak"
            placeholder="Enter value" 
            onChange={(e) => setInputValue(e.target.value)} 
            value={inputValue} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Dropdown
          title="Permodalan"
          options={dropdownModal}
          selectedOption={selectedOptions[3]}
          onChange={(value) => handleSelectChange(3, value)}
          hasImages={false}
        />
        <Dropdown
          title="Trade Finance"
          options={dropdownTrading}
          selectedOption={selectedOptions[4]}
          onChange={(value) => handleSelectChange(4, value)}
          hasImages={false}
        />
        <Dropdown
          title="Asuransi"
          options={dropdownAsuransi}
          selectedOption={selectedOptions[5]}
          onChange={(value) => handleSelectChange(5, value)}
          hasImages={false}
        />
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Hitung
        </button>
      </div>
    </div>
  );
};

export default DropSection;

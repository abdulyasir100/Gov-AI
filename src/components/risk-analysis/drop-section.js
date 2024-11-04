"use client";
import { useState } from "react";
import Dropdown from "./dropdown";
import TextInput from './text-input';

const DropSection = ({onButtonClick }) => {
  const [selectedOptions, setSelectedOptions] = useState(Array(6).fill(''));

  const [inputValue, setInputValue] = useState('');
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    let formErrors = {};

    if (!selectedOptions[0]) formErrors.country = "Please select a country";
    if (!selectedOptions[1]) formErrors.material = "Please select a material";
    if (!inputValue || isNaN(inputValue)) formErrors.contractValue = "Please enter a valid contract value";
    if (!selectedOptions[3]) formErrors.modal = "Please select a modal option";
    if (!selectedOptions[4]) formErrors.tradeFinance = "Please select a trade finance option";
    if (!selectedOptions[5]) formErrors.insurance = "Please select an insurance option";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const formData = {
        country: selectedOptions[0],
        material: selectedOptions[1],
        contractValue: inputValue,
        modal: selectedOptions[3],
        tradeFinance: selectedOptions[4],
        insurance: selectedOptions[5]
      };
      onButtonClick(formData);
    }
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
          error={errors.country}
        />
        <Dropdown
          title="Komoditas"
          options={dropdownMaterials}
          selectedOption={selectedOptions[1]}
          onChange={(value) => handleSelectChange(1, value)}
          hasImages={true}
          error={errors.material}
        />
        <TextInput 
            label="Nilai Kontrak"
            placeholder="Enter value" 
            onChange={(e) => setInputValue(e.target.value)} 
            value={inputValue} 
            error={errors.contractValue}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Dropdown
          title="Permodalan"
          options={dropdownModal}
          selectedOption={selectedOptions[3]}
          onChange={(value) => handleSelectChange(3, value)}
          hasImages={false}
          error={errors.modal}
        />
        <Dropdown
          title="Trade Finance"
          options={dropdownTrading}
          selectedOption={selectedOptions[4]}
          onChange={(value) => handleSelectChange(4, value)}
          hasImages={false}
          error={errors.tradeFinance}
        />
        <Dropdown
          title="Asuransi"
          options={dropdownAsuransi}
          selectedOption={selectedOptions[5]}
          onChange={(value) => handleSelectChange(5, value)}
          hasImages={false}
          error={errors.insurance}
        />
      </div>

      <div className="flex justify-end">
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            Show Data
          </button>
      </div>
    </div>
  );
};

export default DropSection;

"use client";
import { useState } from "react";
import Dropdown from "@components/risk-analysis/dropdown";

const DropSection = () => {
    const [selectedOptions, setSelectedOptions] = useState(Array(2).fill(''));

    const dropdownCountries = [
        { value: 'US', label: 'United States', image: "/assets/images/flags/usa.png" },
        { value: 'JP', label: 'Japan', image: "/assets/images/flags/japan.png" },
        { value: 'RU', label: 'Russia', image: "/assets/images/flags/russia.png" },
        { value: 'UK', label: 'Ukraine', image: "/assets/images/flags/ukraine.png" },
    ];

    const dropdownMaterials = [
        { value: 'GOLD', label: 'Emas', image: "/assets/images/materials/gold-bar.png" },
        { value: 'CPO', label: 'CPO', image: "/assets/images/materials/fruit.png" },
        { value: 'RUBBER', label: 'Karet', image: "/assets/images/materials/rubber.png" },
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
                    title="Komuditas"
                    options={dropdownMaterials}
                    selectedOption={selectedOptions[1]}
                    onChange={(value) => handleSelectChange(1, value)}
                    hasImages={true}
                />
            </div>
        </div>
    );
};

export default DropSection;

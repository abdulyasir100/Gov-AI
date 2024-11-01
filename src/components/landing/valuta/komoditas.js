"use client"
import { useEffect, useState } from 'react';
import ValutaContent from './valuta-content';

const Valuta = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/temp/data/komoditas.json');
      const data = await response.json();
      setCurrencies(data.currencies);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 bg-gray-200 rounded-lg space-y-4">
      <h2 className="text-2xl font-bold mb-4">Komoditas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currencies.map((currencyData, index) => (
          <ValutaContent 
            key={index}
            flagSrc={currencyData.flagSrc}
            currency={currencyData.currency}
            graphData={currencyData.graphData}
            predictions={currencyData.predictions}
          />
        ))}
      </div>
    </div>
  );
};

export default Valuta;

"use client"
import { useEffect, useState } from 'react';
import ValutaContent from './valuta-content';
import axios from 'axios';

const Valuta = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/valuta');
        setCurrencies(response.data.currencies);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 bg-gray-200 rounded-lg space-y-4">
      <h2 className="text-2xl font-bold mb-4">Valuta</h2>
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

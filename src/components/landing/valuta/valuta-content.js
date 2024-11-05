import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const formatYAxisValue = (value) => {
  return Math.round(value);
};

const ValutaContent = ({ flagSrc, currency, graphData, predictions, isLoading  }) => {

  if (isLoading) {
    return (
      <div className="bg-gray-300 p-4 rounded-md flex flex-col gap-2">
        <div className="flex items-center mb-2">
          <Skeleton circle={true} height={40} width={40} className="mr-2 animate-pulse" />
          <Skeleton width="50%" height={24} />
        </div>
        <Skeleton height={150} />
        <h4 className="font-semibold text-gray-600 mb-1">
          <Skeleton width="30%" />
        </h4>
        <div className="space-y-1">
          <Skeleton width="40%" height={20} />
          <Skeleton width="30%" height={20} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-300 p-4 rounded-md flex flex-col gap-2">
      <div className="flex items-center mb-2">
        <img src={flagSrc} alt={`${currency} flag`} className="w-10 h-10 rounded-full mr-2" />
        <h3 className="text-xl font-bold">{currency}</h3>
      </div>

      <div className="mb-2 flex justify-center items-center">
        <div className="w-full max-w-md mx-auto pl-6">
          <div className="flex justify-center">
            <LineChart
              width={500} 
              height={250} 
              data={graphData} 
              className="scaled-chart" 
              style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis 
                domain={[Math.min(...graphData.map(data => data.value)) - 100, Math.max(...graphData.map(data => data.value)) + 100]} 
                tickFormatter={formatYAxisValue}
              />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
          </div>
        </div>
      </div>



      <h4 className="font-semibold text-gray-600 mb-1">Prediksi</h4>

      <div className="space-y-1">
        {predictions.map((prediction, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-semibold">{prediction.label}:</span>
            <span className="text-gray-700">IDR {prediction.amount}</span>
            <span className={`flex items-center font-bold ${prediction.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {prediction.change > 0 ? '▲' : '▼'} {Math.abs(prediction.change)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValutaContent;

const ValutaContent = ({ flagSrc, currency, graphSrc, predictions }) => {
    return (
      <div className="bg-gray-300 p-4 rounded-md flex flex-col gap-2">
        <div className="flex items-center mb-2">
          <img src={flagSrc} alt={`${currency} flag`} className="w-10 h-10 rounded-full mr-2" />
          <h3 className="text-xl font-bold">{currency}</h3>
        </div>
  
        <div className="mb-2">
          <img src={graphSrc} alt="Graph" className="w-full h-60 object-fill rounded-md" />
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
  
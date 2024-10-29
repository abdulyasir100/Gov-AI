const ValutaStat = ({ title, graphImage, predictions, modelValue, errorRate }) => {
    const renderPrediction = (label, amount, change) => {
      const isPositive = change >= 0;
      const arrowColor = isPositive ? 'text-green-500' : 'text-red-500';
      const arrowIcon = isPositive ? '▲' : '▼';
  
      return (
        <div className="mb-2">
          <span>{label}: IDR {amount} </span>
          <span className={`${arrowColor}`}>{arrowIcon} {Math.abs(change)} %</span>
        </div>
      );
    };
  
    return (
      <div className="bg-gray-300 p-4 rounded-lg mb-4">
        <div className="grid grid-cols-12">
          <div className="col-span-7">
            <h3 className="text-lg font-bold">{title}</h3>
            <img src={graphImage} alt="Graph" className="w-full h-72 object-fill mt-2" />
          </div>
  
          <div className="col-span-5 ms-6 mt-8 pl-4">
            <h4 className="font-semibold">Prediksi</h4>
            {renderPrediction('EoY', predictions.eoy.amount, predictions.eoy.change)}
            {renderPrediction('EoM', predictions.eom.amount, predictions.eom.change)}
            {renderPrediction('YoY', predictions.yoy.amount, predictions.yoy.change)}
            {renderPrediction('MoM', predictions.mom.amount, predictions.mom.change)}
  
            <h4 className="font-semibold mt-4">Model</h4>
            <p>{modelValue}</p>
  
            <h4 className="font-semibold mt-4">Error Rate</h4>
            <p>{errorRate}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ValutaStat;
  
const Pajak = ({ title1, percentage1, title2, percentage2 }) => {
    return (
      <div className="bg-gray-300 p-6 rounded-lg mb-4 flex">
        <div className="w-1/2 flex flex-col items-center justify-center border-r border-gray-400">
          <h2 className="text-2xl font-bold text-gray-700">{title1}</h2>
          <p className="text-6xl font-extrabold">{percentage1}%</p>
        </div>
  
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-700">{title2}</h2>
          <p className="text-6xl font-extrabold">{percentage2}%</p>
        </div>
      </div>
    );
  };
  
  export default Pajak;
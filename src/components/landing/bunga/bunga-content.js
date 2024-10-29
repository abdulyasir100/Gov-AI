const BungaContent = ({ imageSrc, title, percentage }) => {
    return (
      <div className="flex items-center bg-gray-300 p-4 rounded-md">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={imageSrc} alt="Bunga image" className="w-full h-full object-cover" />
        </div>
  
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-xl font-bold text-gray-700">{percentage}%</p>
        </div>
      </div>
    );
  };
  
  export default BungaContent;
  
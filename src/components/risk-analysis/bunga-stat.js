const BungaStat = ({ imageSrc, title, percentage }) => {
  return (
      <div className="bg-gray-300 p-6 rounded-lg mb-4 flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <img src={imageSrc} alt="Stat Image" className="w-full h-56 rounded-md object-contain" />
          </div>

          <div className="w-full md:w-3/4 pl-0 md:pl-6 flex flex-col">
              <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">{title}</h2>
              <p className="text-4xl md:text-6xl font-extrabold">{percentage}%</p>
          </div>
      </div>
  );
};

export default BungaStat;

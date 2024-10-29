const ProductsContent = ({ 
    imageSrc, 
    title, 
    subtitle, 
    subsubtitle,
    data1,
    data2,
    tenorRange,
    showTenor,
    priorityFlags,
    onDetailClick
  }) => {
    return (
      <div className="flex flex-col md:flex-row bg-gray-100 p-4 rounded-lg mb-4">
        <div className="md:w-1/4 w-full mb-4 md:mb-0">
          <img 
            src={imageSrc} 
            alt="Product image" 
            className="w-full h-[200px] object-contain rounded-md mx-auto"
            style={{ maxWidth: '400px' }}
          />
        </div>
  
        <div className="md:w-2/4 w-full md:pl-12 flex flex-col justify-between">
          <div className="text-center md:text-left mb-4">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-bold mb-4">{subsubtitle}</p>
              {data1.map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                  {item.flags.map((flag, idx) => (
                    <img key={idx} src={flag} alt="Flag" className="w-8 h-8 rounded mr-2" />
                  ))}
                  <span className="text-xl ml-4 text-gray-800 font-bold">{item.percentage} % p.a</span>
                </div>
              ))}
              {data2.map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                  {item.flags.map((flag, idx) => (
                    <img key={idx} src={flag} alt="Flag" className="w-8 h-8 rounded mr-2" />
                  ))}
                  <span className="text-xl ml-4 text-gray-800 font-bold">{item.percentage} % p.a</span>
                </div>
              ))}
            </div>
  
            <div>
              {showTenor && (
                <>
                  <p className="text-lg font-semibold">Tenor Tersedia</p>
                  <p className="text-xl font-bold text-gray-800 mb-4">
                    {tenorRange[0]} - {tenorRange[1]} Tahun
                  </p>
                </>
              )}
              <p className="text-lg font-semibold">Komoditas Prioritas</p>
              <div className="flex flex-wrap space-x-2 mt-2">
                {priorityFlags.map((flag, index) => (
                  <img key={index} src={flag} alt="Priority Flag" className="w-8 h-8 rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
  
        <div className="md:w-1/4 w-full flex justify-center md:justify-end items-start mt-4 md:mt-0">
          <button 
            onClick={onDetailClick} 
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-200 ease-in-out"
          >
            Detail
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductsContent;

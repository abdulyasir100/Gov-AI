const OutlookContent = ({ imageSrc, title, quote, subSections, riskLevel }) => {
    return (
      <div className="flex flex-col md:flex-row bg-gray-300 p-4">
        <div className="w-full md:w-1/2">
          <img 
            src={imageSrc} 
            alt="Lookout image" 
            className="w-full h-[200px] object-cover rounded-md"
            style={{ maxWidth: '400px' }}
          />
        </div>
  
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-xl font-bold">{title}</h2>
  
          <p className="italic text-gray-600">{quote}</p>
  
          <div className="grid grid-cols-2 gap-2">
            {subSections.map((section, index) => (
              <div key={index} className="flex flex-col p-2 rounded-md">
                <span className="font-bold mb-1">{section.subtitle}</span>
                <div className="flex space-x-2">
                  {index < 3 ? (
                    section.flags.map((flag, idx) => (
                      <img
                        key={idx}
                        src={flag}
                        alt="Country flag"
                        className="w-8 h-8 rounded object-cover"
                      />
                    ))
                  ) : (
                    <span
                      className={`${
                        section.riskLevel === 'High' ? 'text-red-500' :
                        section.riskLevel === 'Mid' ? 'text-yellow-500' :
                        'text-green-500'
                      } font-semibold text-2xl`}
                    >
                      {section.riskLevel}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default OutlookContent;
  
const PrediksiResiko = ({ newsImage, title, dampakKomuditas, dampakLain, nilaiRisiko, rightImage }) => {
    const riskColor = {
        High: 'text-red-500',
        Mid: 'text-yellow-500',
        Low: 'text-green-500',
    }[nilaiRisiko] || '';

    return (
        <div className="bg-gray-300 p-4 rounded-lg flex flex-col md:flex-row items-start mb-4">
            <div className="w-full md:w-1/4">
                <img src={newsImage} alt="News" className="w-full h-[150px] object-cover rounded-md" />
            </div>

            <div className="w-full md:w-2/4 pl-0 md:pl-4 flex flex-col justify-between">
                <h3 className="text-xl md:text-2xl font-bold">{title}</h3> 
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <div>
                        <p className="font-semibold">Dampak Komuditas</p>
                        <p>{dampakKomuditas}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Dampak Lain</p>
                        <p>{dampakLain}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Nilai Risiko</p>
                        <p className={`${riskColor} font-bold text-2xl md:text-3xl`}>{nilaiRisiko}</p>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/4 flex justify-end mt-4 md:mt-0">
                <img src={rightImage} alt="Right Image" className="w-full md:w-48 h-auto object-cover rounded-md" />
            </div>
        </div>
    );
};

export default PrediksiResiko;

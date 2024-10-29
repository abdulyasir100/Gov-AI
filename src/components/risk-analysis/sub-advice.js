const SubAdvice = ({ title, subtitle, imageSrc, percentage, context, isPercentage }) => {
    return (
        <div className="bg-gray-300 p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">{subtitle}</h4>
            <div className="flex items-center">
                <img src={imageSrc} alt={title} className="w-16 h-16 object-cover bg-white rounded mr-4" />
                <p className="text-xl font-bold">
                    {isPercentage ? `${percentage}%` : `USD ${percentage}`} {context}
                </p>
            </div>
        </div>
    );
};

export default SubAdvice;

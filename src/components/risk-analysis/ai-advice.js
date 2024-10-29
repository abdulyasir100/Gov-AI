import SubAdvice from "./sub-advice";

const AiAdvice = ({ content, subtitle}) => {
    return (
        <div className="mb-6">
            <p className="font-bold text-lg mb-2">{content}</p>
            <h3 className="text-2xl font-bold mb-4">{subtitle}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <SubAdvice 
                    title="KKM Ekspor" 
                    subtitle="KKM Ekspor" 
                    imageSrc="/assets/images/banks/bri.png"
                    percentage={5} 
                    context="p.a 32 Bulan" 
                    isPercentage={true}
                />
                <SubAdvice 
                    title="SBLC" 
                    subtitle="SBLC" 
                    imageSrc="/assets/images/banks/cimb.png"
                    percentage={6} 
                    context="Nilai Kontrak All In" 
                    isPercentage={true}
                />
                <SubAdvice 
                    title="Asuransi Kargo" 
                    subtitle="Asuransi Kargo" 
                    imageSrc="/assets/images/banks/bank-america.png"
                    percentage={1000} 
                    context="All Risk" 
                    isPercentage={false}
                />
            </div>
        </div>
    );
};

export default AiAdvice;
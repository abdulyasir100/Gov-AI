'use client'
import { useState } from 'react';
import AiAnalysis from "@components/risk-analysis/ai-analysis";
import DropSection from "@components/risk-analysis/drop-section";
import Pajak from "@components/risk-analysis/pajak";
import PrediksiResiko from "@components/risk-analysis/prediksi-risiko";
import BungaStat from "@components/risk-analysis/bunga-stat";
import ValutaStat from "@components/risk-analysis/valuta-stat";
import AiAdvice from "@components/risk-analysis/ai-advice";
import axios from 'axios';
import MoonLoader from 'react-spinners/MoonLoader';

const RiskAnalysisWrapper = () => {
    const [loading, setLoading] = useState(false);
    const [showRiskData, setShowRiskData] = useState(false);
    const [riskAnalysisAI, setRiskAnalysisAI] = useState(null);

    const handleFormSubmit  = async (data) => {
        try {
            setLoading(true);
            setShowRiskData(false)
            const response = await axios.post('/api/riskAnalysisAI', { country: data.country });
            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }
            
            setRiskAnalysisAI(response.data)
            setShowRiskData(true)
        } catch (error) {
            console.error('Error fetching forecast data:', error);
        } finally {
            setLoading(false);
        }
    };

      return (
        <div>
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <MoonLoader size={50} color="#ffffff" />
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-12" id="drop-section">
                    <DropSection onButtonClick={handleFormSubmit }/>
                    
                </div>
                {!loading && showRiskData && riskAnalysisAI && (
                <div className="md:col-span-12" id="data-section">
                    <h1 className="font-bold text-2xl">Prediksi Risiko</h1>
                    <h2 className="font-bold text-xl">Stabilitas Politik</h2>
                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                        <PrediksiResiko
                            newsImage="/assets/images/outlooks/outlook-1.webp"
                            title="Russian Elf riding tank to attack ukraine"
                            dampakKomuditas="None"
                            dampakLain="Perubahan Politik"
                            nilaiRisiko="Mid"
                            rightImage="/assets/images/banks/bank-america.png"
                        />
                        <PrediksiResiko
                            newsImage="/assets/images/outlooks/outlook-2.webp"
                            title="Elf get caught by police for selling drugs"
                            dampakKomuditas="None"
                            dampakLain="Perubahan Politik"
                            nilaiRisiko="High"
                            rightImage="/assets/images/banks/bank-america.png"
                        />
                        <h2 className="font-bold text-xl mb-4">Analisis ExportGuard AI</h2>
                        <AiAnalysis content={riskAnalysisAI.politik.data.message.content} />
                    </div>
                    <div className="md:col-span-12">
                        <h2 className="font-bold text-xl">Stabilitas Ekonomi</h2>
                    </div>
                    <div className="md:col-span-12 bg-gray-100 p-4 rounded-lg mb-4">
                        <h2 className="font-bold text-xl mb-4">Pajak dan Kepabean</h2>
                        <Pajak 
                            title1="Pajak Pertambahan Nilai" 
                            percentage1={75} 
                            title2="Bea Masuk" 
                            percentage2={85} 
                        />
                        <h2 className="font-bold text-xl mb-4">Bunga Bank Sentral</h2>
                        <BungaStat 
                            imageSrc="/assets/images/banks/doge-coin.png"
                            title="Doge Coin" 
                            percentage={90} 
                        />
                        <h2 className="font-bold text-xl mb-4">Valuta</h2>
                        <ValutaStat 
                            title="Japan Yen"
                            graphImage="/assets/images/graph.png"
                            predictions={{
                                eoy: { amount: "1,000,000", change: 5 },
                                eom: { amount: "950,000", change: -2 },
                                yoy: { amount: "12,000,000", change: 10 },
                                mom: { amount: "1,050,000", change: 1 },
                            }}
                            modelValue="Deep Learning LTSM"
                            errorRate="2.5%"
                        />
                        <h2 className="font-bold text-xl mb-4">Analisis ExportGuard AI</h2>
                        <AiAnalysis content={riskAnalysisAI.ekonomi.data.message.content} />
                    </div>
                    <div className="md:col-span-12">
                        <h2 className="font-bold text-xl">ExportGuard AI Advice</h2>
                    </div>
                    <div className="md:col-span-12 bg-gray-100 p-4 rounded-lg mb-4">
                        <AiAdvice content={riskAnalysisAI.general.data.message.content} />
                    </div>
                </div>
                )}
            </div>
        </div>
      );
  };
  
  export default RiskAnalysisWrapper;
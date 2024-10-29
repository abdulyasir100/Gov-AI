'use client'
import AiAnalysis from "@components/risk-analysis/ai-analysis";
import DropSection from "@components/risk-analysis/drop-section";
import Pajak from "@components/risk-analysis/pajak";
import PrediksiResiko from "@components/risk-analysis/prediksi-risiko";
import BungaStat from "@components/risk-analysis/bunga-stat";
import ValutaStat from "@components/risk-analysis/valuta-stat";
import AiAdvice from "@components/risk-analysis/ai-advice";

const RiskAnalysis = () => {
      return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-12 mb-4">
                    <DropSection />
                </div>
                <div className="md:col-span-12">
                    <h1 className="font-bold text-2xl">Prediksi Risiko</h1>
                    <h2 className="font-bold text-xl">Stabilitas Politik</h2>
                </div>
                <div className="md:col-span-12 bg-gray-100 p-4 rounded-lg mb-4">
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
                    <AiAnalysis 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque eleifend scelerisque rhoncus. Vestibulum molestie dictum mauris vel consequat. 
                        Sed luctus tellus libero. Vestibulum ac laoreet augue. Donec at hendrerit libero. 
                        Etiam pellentesque laoreet ligula, nec sodales nisi fringilla sit amet. In in orci odio. 
                        Nulla facilisi. Vestibulum suscipit sem non aliquet mollis. 
                        Donec est dolor, molestie id tristique eget, hendrerit quis tortor. 
                        Donec quis velit eget ante vestibulum vulputate quis at orci." 
                    />
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
                    <AiAnalysis 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque eleifend scelerisque rhoncus. Vestibulum molestie dictum mauris vel consequat. 
                        Sed luctus tellus libero. Vestibulum ac laoreet augue. Donec at hendrerit libero. 
                        Etiam pellentesque laoreet ligula, nec sodales nisi fringilla sit amet. In in orci odio. 
                        Nulla facilisi. Vestibulum suscipit sem non aliquet mollis. 
                        Donec est dolor, molestie id tristique eget, hendrerit quis tortor. 
                        Donec quis velit eget ante vestibulum vulputate quis at orci." 
                    />
                </div>
                <div className="md:col-span-12">
                    <h2 className="font-bold text-xl">ExportGuard AI Advice</h2>
                </div>
                <div className="md:col-span-12 bg-gray-100 p-4 rounded-lg mb-4">
                    <AiAdvice 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque eleifend scelerisque rhoncus. Vestibulum molestie dictum mauris vel consequat. 
                        Sed luctus tellus libero. Vestibulum ac laoreet augue. Donec at hendrerit libero. 
                        Etiam pellentesque laoreet ligula, nec sodales nisi fringilla sit amet. In in orci odio. 
                        Nulla facilisi. Vestibulum suscipit sem non aliquet mollis. 
                        Donec est dolor, molestie id tristique eget, hendrerit quis tortor. 
                        Donec quis velit eget ante vestibulum vulputate quis at orci."
                        subtitle="Produk dan Biaya khusus untuk anda"
                    />
                </div>
            </div>
        </div>
      );
  };
  
  export default RiskAnalysis;
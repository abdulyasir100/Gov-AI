import RiskAnalysisWrapper from "@components/risk-analysis/risk-analysis-wrapper";


export const metadata = {
    title: "Gov-AI | Risk Analysis",
    description: "Gov-AI | Risk Analysis",
  }

const RiskAnalysis = () => {
      return (
        <div className="container mx-auto p-4">
            <RiskAnalysisWrapper />
        </div>
      );
  };
  
  export default RiskAnalysis;
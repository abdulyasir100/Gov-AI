import ValutaContent from './valuta-content';

const IndexPasar = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg space-y-4">
      <h2 className="text-2xl font-bold mb-4">Index Pasar Modal</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

    <ValutaContent 
        flagSrc="/assets/images/flags/usa.png"
        currency="US Dollar"
        graphSrc="/assets/images/graph.png"
        predictions={[
            { label: "EoY", amount: 15000, change: 2.5 },
            { label: "EoM", amount: 14800, change: -1.2 },
            { label: "YoY", amount: 15500, change: 3.1 },
            { label: "MoM", amount: 14700, change: -0.8 },
        ]}
    />

    <ValutaContent 
        flagSrc="/assets/images/flags/japan.png"
        currency="JPY YEN"
        graphSrc="/assets/images/graph.png"
        predictions={[
            { label: "EoY", amount: 15000, change: 2.5 },
            { label: "EoM", amount: 14800, change: -1.2 },
            { label: "YoY", amount: 15500, change: 3.1 },
            { label: "MoM", amount: 14700, change: -0.8 },
        ]}
    />

    <ValutaContent 
        flagSrc="/assets/images/flags/russia.png"
        currency="Russian Ruble"
        graphSrc="/assets/images/graph.png"
        predictions={[
            { label: "EoY", amount: 15000, change: 2.5 },
            { label: "EoM", amount: 14800, change: -1.2 },
            { label: "YoY", amount: 15500, change: 3.1 },
            { label: "MoM", amount: 14700, change: -0.8 },
        ]}
    />

      </div>
    </div>
  );
};

export default IndexPasar;

import OutlookContent from "./outlook-content";

const Outlook = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg space-y-4">
      <h2 className="font-bold text-xl">Outlook Politik - 18 Maret 2025</h2>
      <OutlookContent
        imageSrc="/assets/images/outlooks/outlook-1.webp"
        title="Russian Elf riding tank to attack ukraine"
        quote="Lorem ipsum dolor si amet - Frieren"
        subSections={[
          { subtitle: "Negara Terpengaruh", flags: ["/assets/images/flags/russia.png", "/assets/images/flags/ukraine.png"] },
          { subtitle: "Komoditas Terdampak", flags: ["/assets/images/banks/doge-coin.png"] },
          { subtitle: "Prediksi Dampak", flags: ["/assets/images/flags/usa.png"] },
          { subtitle: 'Nilai Risiko Ekspor', riskLevel: 'High' },
        ]}
      />

      <OutlookContent
        imageSrc="/assets/images/outlooks/outlook-2.webp"
        title="Elf get caught by police for selling drugs"
        quote="Lorem ipsum dolor si amet - Frieren"
        subSections={[
          { subtitle: "Negara Terpengaruh", flags: ["/assets/images/flags/usa.png"] },
          { subtitle: "Komoditas Terdampak", flags: ["/assets/images/banks/axa.png"] },
          { subtitle: "Prediksi Dampak", flags: ["/assets/images/flags/russia.png", "/assets/images/flags/japan.png"] },
          { subtitle: 'Nilai Risiko Ekspor', riskLevel: 'Mid' },
        ]}
      />

      <OutlookContent
        imageSrc="/assets/images/outlooks/outlook-3.webp"
        title="Elf eating burgir in USA"
        quote="Lorem ipsum dolor si amet - Frieren"
        subSections={[
          { subtitle: "Negara Terpengaruh", flags: ["/assets/images/flags/japan.png"] },
          { subtitle: "Komoditas Terdampak", flags: ["/assets/images/banks/axa.png"] },
          { subtitle: "Prediksi Dampak", flags: ["/assets/images/flags/usa.png"] },
          { subtitle: 'Nilai Risiko Ekspor', riskLevel: 'Low' },
        ]}
      />

    </div>

    
  );
};

export default Outlook;
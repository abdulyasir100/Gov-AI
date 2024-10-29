import BungaContent from './bunga-content';

const Bunga = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg space-y-4">
      <h2 className="font-bold text-xl">Bunga Bank Sentral</h2>
      <BungaContent 
        imageSrc="/assets/images/banks/agribank.png" 
        title="Agri Bank" 
        percentage={75} 
      />
      <BungaContent 
        imageSrc="/assets/images/banks/commerz-bank.png"
        title="Commerz Bank" 
        percentage={65} 
      />
      <BungaContent 
        imageSrc="/assets/images/banks/bitcoin.png"
        title="Bitcoin" 
        percentage={90} 
      />
      <BungaContent 
        imageSrc="/assets/images/banks/american-express.png"
        title="American Express" 
        percentage={25} 
      />
      <BungaContent 
        imageSrc="/assets/images/banks/doge-coin.png"
        title="Doge Coin" 
        percentage={45} 
      />
      <BungaContent 
        imageSrc="/assets/images/banks/dana.png"
        title="Dana" 
        percentage={33} 
      />
      <BungaContent 
        imageSrc="/assets/images/banks/axa.png"
        title="AXA Bank" 
        percentage={100} 
      />
    </div>
  );
};

export default Bunga;

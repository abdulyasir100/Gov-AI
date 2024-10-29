'use client'
import ProductsContent from "./products-content";

const Asuransi = () => {
    const products = [
        {
            imageSrc: "/assets/images/banks/bri.png",
            title: "Bank Rakyat Indonesia",
            subtitle: "Asuransi Perdagangan",
            subsubtitle: "Premi Preferensial",
            data1: [
              { flags: ["/assets/images/flags/usa.png", "/assets/images/flags/japan.png","/assets/images/flags/russia.png","/assets/images/flags/ukraine.png"], percentage: 5 },
            ],
            data2: [
              { flags: ["/assets/images/flags/usa.png","/assets/images/flags/japan.png","/assets/images/flags/russia.png","/assets/images/flags/ukraine.png"], percentage: 7 },
            ],
            tenorRange: [5, 10],
            showTenor: false,
            priorityFlags: ["/assets/images/banks/doge-coin.png", "/assets/images/banks/bitcoin.png"],
            onDetailClick: () => alert("Details for Product 1"),
        },
        {
            imageSrc: "/assets/images/banks/coin-market-cap.png",
            title: "Coin Market",
            subtitle: "Asuransi Perdagangan",
            subsubtitle: "Premi Preferensial",
            data1: [
              { flags: ["/assets/images/flags/usa.png", "/assets/images/flags/japan.png","/assets/images/flags/russia.png","/assets/images/flags/ukraine.png"], percentage: 5 },
            ],
            data2: [
              { flags: ["/assets/images/flags/usa.png","/assets/images/flags/japan.png","/assets/images/flags/russia.png","/assets/images/flags/ukraine.png"], percentage: 7 },
            ],
            tenorRange: [5, 10],
            showTenor: false,
            priorityFlags: ["/assets/images/banks/doge-coin.png", "/assets/images/banks/bitcoin.png"],
            onDetailClick: () => alert("Details for Product 1"),
        },
      ];
    
      return (
        <div className="p-4 space-y-4">
        <h2 className="font-bold text-xl">Asuransi</h2>
          {products.map((product, index) => (
            <ProductsContent
              key={index}
              imageSrc={product.imageSrc}
              title={product.title}
              subtitle={product.subtitle}
              subsubtitle={product.subsubtitle}
              data1={product.data1}
              data2={product.data2}
              tenorRange={product.tenorRange}
              showTenor={product.showTenor}
              priorityFlags={product.priorityFlags}
              onDetailClick={product.onDetailClick}
            />
          ))}
        </div>
      );
  };
  
  export default Asuransi;
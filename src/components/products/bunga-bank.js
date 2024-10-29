'use client'
import ProductsContent from "./products-content";

const Products = () => {
    const products = [
        {
          imageSrc: "/assets/images/banks/bri.png",
          title: "Bank Rakyat Indonesia",
          subtitle: "Kredit Modal Kerja Ekspor",
          subsubtitle: "Bunga Preferensial",
          data1: [
            { flags: ["/assets/images/flags/usa.png", "/assets/images/flags/japan.png","/assets/images/flags/russia.png","/assets/images/flags/ukraine.png"], percentage: 5 },
          ],
          data2: [
            { flags: ["/assets/images/flags/usa.png","/assets/images/flags/japan.png","/assets/images/flags/russia.png","/assets/images/flags/ukraine.png"], percentage: 7 },
          ],
          tenorRange: [5, 10],
          showTenor: true,
          priorityFlags: ["/assets/images/banks/doge-coin.png", "/assets/images/banks/bitcoin.png"],
          onDetailClick: () => alert("Details for Product 1"),
        },
        {
            imageSrc: "/assets/images/banks/cimb.png",
            title: "Bank CIMB",
            subtitle: "Working Capital Export Financing",
            subsubtitle: "Bunga Preferensial",
            data1: [
              { flags: ["/assets/images/flags/usa.png", "/assets/images/flags/japan.png","/assets/images/flags/russia.png","/assets/images/flags/ukraine.png"], percentage: 6 },
            ],
            data2: [
              { flags: ["/assets/images/flags/usa.png","/assets/images/flags/japan.png","/assets/images/flags/russia.png","/assets/images/flags/ukraine.png"], percentage:16.5 },
            ],
            tenorRange: [3, 7],
            showTenor: true,
            priorityFlags: ["/assets/images/banks/doge-coin.png", "/assets/images/banks/bitcoin.png"],
            onDetailClick: () => alert("Details for Product 1"),
        }
      ];
    
      return (
        <div className="p-4 space-y-4">
        <h2 className="font-bold text-xl">Bunga Bank Sentral</h2>
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
  
  export default Products;
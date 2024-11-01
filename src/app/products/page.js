'use client'
import Asuransi from "@components/products/asuransi";
import BungaBank from "@components/products/bunga-bank";
import TradeFinance from "@components/products/trade-finance";

const metadata = {
    title: "Gov-AI Products",
    description: "Gov-AI Products",
  }

const Products = () => {
      return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-12">
                <BungaBank />
                </div>
                <div className="md:col-span-12">
                <TradeFinance />
                </div>
                <div className="md:col-span-12">
                <Asuransi />
                </div>
            </div>
        </div>
      );
  };
  
  export default Products;
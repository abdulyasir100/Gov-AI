'use client'
import Asuransi from "@components/products/asuransi";
import BungaBank from "@components/products/bunga-bank";
import TradeFinance from "@components/products/trade-finance";

const ProductsWrapper = () => {
      return (
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
      );
  };
  
  export default ProductsWrapper;
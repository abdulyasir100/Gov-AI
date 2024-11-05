import ProductsWrapper from "@components/products/products-wrapper";

export const metadata = {
    title: "Gov-AI | Products",
    description: "Gov-AI | Products",
  }

const Products = () => {
      return (
        <div className="container mx-auto p-4">
            <ProductsWrapper />
        </div>
      );
  };
  
  export default Products;
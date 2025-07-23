import { ProductDetails } from "./ProductDetails";
import { ProductImages } from "./ProductImages";

const AddProduct = () => {
  return (
    <div className="w-full h-full flex items-center gap-2 px-10 lg:px-20 xl:max-w-7xl mx-auto py-5">
      <div className="w-[30%] h-full">
        <ProductImages />
      </div>
      <div className="w-[40%] h-full">
        <ProductDetails />
      </div>
    </div>
  );
};

export default AddProduct;

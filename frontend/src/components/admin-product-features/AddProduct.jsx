import { ProductDetails } from "./ProductDetails";
import { ProductImages } from "./ProductImages";

const AddProduct = () => {
  return (
    <div className="bg-white w-full h-screen">
      <div className="w-full h-full flex flex-col gap-5 px-10 lg:px-20 xl:max-w-7xl mx-auto py-5">
        <h1 className="text-xl font-semibold">Add New Product</h1>
        <div className="flex gap-5 h-full">
          <div className="w-[30%] h-[80%] sticky top-0">
            <ProductImages />
          </div>
          <div className="w-[70%] h-full">
            <ProductDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

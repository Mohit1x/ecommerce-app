import { useState } from "react";
import axios from "axios";
import { ProductDetails } from "./ProductDetails";
import { ProductImages } from "./ProductImages";

const AddProduct = () => {
  const [productImages, setProductImages] = useState();
  const [productSizes, setProductSizes] = useState();
  const [data, setData] = useState({
    images: productImages,
    name: "",
    description: "",
    price: 0,
    compareAtPrice: 0,
    stock: 0,
    category: "",
    sizes: productSizes,
  });

  const handleSubmit = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      const response = await axios.post(
        `${apiUrl}/product/create`,
        { data },
        { withCredentials: true }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white w-full h-full">
      <div className="w-full h-full flex flex-col gap-5 px-10 lg:px-20 xl:max-w-7xl mx-auto py-5">
        <h1 className="text-xl font-semibold">Add New Product</h1>
        <div className="flex gap-5 h-full">
          <div className="w-[30%] h-[80%]">
            <ProductImages setData={setData} />
          </div>
          <div className="w-[70%] h-full">
            <ProductDetails data={data} setData={setData} />
          </div>
        </div>
        <div className="self-end">
          <button
            onClick={handleSubmit}
            className="p-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

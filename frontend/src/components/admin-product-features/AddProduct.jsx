import { useState } from "react";
import axios from "axios";
import { ProductDetails } from "./ProductDetails";
import { ProductImages } from "./ProductImages";

const AddProduct = () => {
  const [productImages, setProductImages] = useState([]);
  const [productSizes, setProductSizes] = useState([]);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: 0,
    compareAtPrice: 0,
    stock: 0,
    category: "",
  });

  const handleSubmit = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("compareAtPrice", data.compareAtPrice);
    formData.append("stock", data.stock);
    formData.append("category", data.category);

    productSizes.forEach((size) => formData.append("sizes[]", size));

    productImages.forEach((file) => {
      formData.append("images", file);
    });

    const res = await axios.post(`${apiUrl}/product/create`, formData, {
      withCredentials: true,
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <div className="bg-white w-full h-full">
      <div className="w-full h-full flex flex-col gap-5 px-10 lg:px-20 xl:max-w-7xl mx-auto py-5">
        <h1 className="text-xl font-semibold">Add New Product</h1>
        <div className="flex gap-5 h-full">
          <div className="w-[30%] h-[80%]">
            <ProductImages
              productImages={productImages}
              setProductImages={setProductImages}
            />
          </div>
          <div className="w-[70%] h-full">
            <ProductDetails
              data={data}
              setData={setData}
              setProductSizes={setProductSizes}
            />
          </div>
        </div>
        <div className="self-end">
          <button
            onClick={handleSubmit}
            className="p-2 bg-blue-500 hover:bg-blue-400 rounded text-white font-semibold"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux slices/AllProductsSlice";

const ProductDetails = () => {
  const [detail, setDetail] = useState({});
  const [isSizeSelected, setIsSizeSelected] = useState(null);
  const params = useParams();
  const [isAdded, setIsAdded] = useState(true);

  const productSize = ["S", "M", "L", "XL", "XXL"];

  const dispatch = useDispatch();

  const product = async () => {
    try {
      const data = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const json = await data.json();
      setDetail(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      product();
    }
  }, [params.id]);

  const handleSizeSelection = (index) => {
    if (index === isSizeSelected) {
      setIsSizeSelected(null);
    } else {
      setIsSizeSelected(index);
    }
  };

  const handleCart = () => {
    dispatch(addToCart({ ...detail, size: productSize[isSizeSelected] }));
  };

  return (
    <div className="bg-[#F6F5F5] flex justify-center">
      <div className="shadow-2xl bg-white h-[500px] w-[500px] my-20 mx-10 flex items-center justify-center rounded-xl relative">
        <img className="h-[80%] w-full object-contain" src={detail?.image} />
      </div>
      <div className="my-20 w-[500px]">
        <h1 className="font-medium text-4xl">{detail?.title}</h1>
        <p className="w-full font-sans font-normal my-6">
          {detail?.description}
        </p>
        <div className="flex my-10">
          <MdOutlineStar className="text-yellow-400 text-2xl" />
          <MdOutlineStar className="text-yellow-400 text-2xl" />
          <MdOutlineStar className="text-yellow-400 text-2xl" />
          <MdOutlineStar className="text-yellow-400 text-2xl" />
          <MdOutlineStar className="text-yellow-400 text-2xl" />
          <span>({detail?.rating?.count})</span>
        </div>
        <div className="h-[1px] w-full bg-gray-300" />
        <div>
          <p className="my-7 font-bold text-2xl">Choose a size</p>
          <div className="flex items-center gap-3">
            {productSize.map((size, index) => (
              <p
                key={size}
                onClick={() => handleSizeSelection(index)}
                className={`${
                  isSizeSelected === index && "bg-[#E99317] text-white"
                } text-xl border-2  cursor-pointer flex items-center justify-center h-14 w-14 border-[#E99317] rounded-lg transition`}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
        <div>
          <div className="h-[1px] my-10 w-full bg-gray-300" />
          <p className="text-2xl font-bold">Price : ${detail?.price}</p>
          <div className="flex my-7">
            <button className="text-xl h-[50px] bg-[#FF9500] font-bold text-white rounded-lg px-5 transition duration-300 hover:scale-[1.07]">
              Buy Now
            </button>
            <button
              onClick={() => setIsAdded(!isAdded)}
              className="flex items-center mx-4 text-xl bg-[#1C2228] h-[50px] px-5 rounded-lg text-white transition duration-300 hover:scale-[1.07]"
            >
              {isAdded ? (
                <div onClick={() => handleCart()} className="flex">
                  <FaCartPlus className="text-3xl mx-2" /> <span>Add</span>
                </div>
              ) : (
                <div className="flex">
                  <FaShoppingCart className="text-3xl mx-2" />
                  <span>Added</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

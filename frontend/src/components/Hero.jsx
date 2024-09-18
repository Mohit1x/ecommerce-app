import { HERO_BG_IMG } from "../utils/constants";
import { IoIosLaptop } from "react-icons/io";
import { GiNecklaceDisplay } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { GiLargeDress } from "react-icons/gi";
import { productMap } from "./Home";
import { useRef } from "react";

const Hero = ({ list, setList }) => {
  const ref = useRef();

  function handleListChange(value) {
    setList((prev) => (prev === value ? "products" : value));
  }

  const handleBrowseProducts = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full h-full px-8 py-12">
      <div className="flex items-center justify-center bg-[#E99117] mx-auto w-[70%] rounded-2xl h-[340px] shadow-2xl px-8">
        <div className="flex flex-col gap-10 justify-center text-white">
          <p className="text-4xl font-bold font-sans"> Free Delivery!</p>
          <p className="w-[60%] text-xl font-sans">
            {`Don't miss it out! Only today, get free`}
            <span className="text-2xl font-bold">Next Day</span>
            {`delivery on all
            your orders.`}
          </p>
          <p
            onClick={handleBrowseProducts}
            className="bg-[#FFFFFF] text-[#E99317] text-lg w-fit px-4 py-[12px] rounded-full font-bold shadow-lg cursor-pointer transition duration-300 hover:scale-[1.1]"
          >
            Browse Products
          </p>
        </div>
        <div>
          <img className="w-[630px] -mt-6" src={HERO_BG_IMG} />
        </div>
      </div>
      <div className="flex items-center justify-center my-16">
        <p className="text-2xl font-bold">POPULAR CATEGORIES</p>
      </div>
      <div ref={ref} className="flex items-center justify-center gap-8">
        <p
          className={`${
            list.includes("electronics") && "bg-gray-800 text-white"
          }bg-white p-4 shadow-lg rounded-lg`}
        >
          <IoIosLaptop
            onClick={() => handleListChange(productMap.electronics)}
            className="text-5xl text-gray-500 cursor-pointer"
          />
        </p>
        <p
          className={`${
            list.includes("jewelery") && "bg-gray-800 text-white"
          }bg-white p-4 shadow-lg rounded-lg`}
        >
          <GiNecklaceDisplay
            onClick={() => handleListChange(productMap.jewelery)}
            className="text-5xl text-gray-500 cursor-pointer"
          />
        </p>
        <p
          className={`${
            list == productMap.menClothing && "bg-gray-800 text-white"
          }bg-white p-4 shadow-lg rounded-lg`}
        >
          <IoShirtOutline
            onClick={() => handleListChange(productMap.menClothing)}
            className="text-5xl text-gray-500 cursor-pointer"
          />
        </p>
        <p
          className={`${
            list == productMap.womenClothing && "bg-gray-800 text-white"
          }bg-white p-4 shadow-lg rounded-lg`}
        >
          <GiLargeDress
            onClick={() => handleListChange(productMap.womenClothing)}
            className="text-5xl text-gray-500 cursor-pointer"
          />
        </p>
      </div>
    </div>
  );
};

export default Hero;

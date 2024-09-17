import { useState } from "react";
import AllProducts from "./AllProducts";
import Hero from "./Hero";

export const productMap = {
  electronics: "products/category/electronics",
  jewelery: "products/category/jewelery",
  menClothing: "products/category/men's%20clothing",
  womenClothing: "products/category/women's%20clothing",
};

const Home = () => {
  const [list, setList] = useState("products");

  return (
    <div className="bg-[#F6F5F5]">
      <Hero list={list} setList={setList} />
      {list === "products" && (
        <h1 className="text-center p-2 bg-[#1C2228] text-white shadow-2xl rounded-sm w-[15%] mx-auto my-16">
          ALL PRODUCTS
        </h1>
      )}
      {list === productMap.electronics && (
        <h1 className="text-center p-2 bg-[#1C2228] text-white shadow-2xl rounded-sm w-[15%] mx-auto my-16">
          Electronics
        </h1>
      )}
      {list === productMap.jewelery && (
        <h1 className="text-center p-2 bg-[#1C2228] text-white shadow-2xl rounded-sm w-[15%] mx-auto my-16">
          Jewelery
        </h1>
      )}
      {list === productMap.menClothing && (
        <h1 className="text-center p-2 bg-[#1C2228] text-white shadow-2xl rounded-sm w-[15%] mx-auto my-16">{`Men's Clothing`}</h1>
      )}
      {list === productMap.womenClothing && (
        <h1 className="text-center p-2 bg-[#1C2228] text-white shadow-2xl rounded-sm w-[15%] mx-auto my-16">{`Women's Clothing`}</h1>
      )}
      <AllProducts list={list} />
    </div>
  );
};

export default Home;

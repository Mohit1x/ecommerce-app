import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux slices/AllProductsSlice";
import { useSelector } from "react-redux";

const AllProducts = () => {
  const [list, setList] = useState("products");
  const dispatch = useDispatch();

  const allProducts = async () => {
    try {
      const data = await fetch(`https://fakestoreapi.com/${list}`);
      const json = await data.json();
      dispatch(addProducts(json));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allProducts();
  }, []);

  const totalProducts = useSelector((store) => store.products.allProducts);
  return (
    <div className="flex flex-wrap items-center justify-center">
      {totalProducts.map((items) => (
        <ProductCard
          key={items?.id}
          id={items?.id}
          img={items?.image}
          title={items?.title}
          cat={items?.category}
          ratings={items?.rating?.count}
          price={items?.price}
        />
      ))}
    </div>
  );
};

export default AllProducts;

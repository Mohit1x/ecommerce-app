import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCard = ({ img, title, cat, ratings, price, id }) => {
  const [isShowing, setIsSHowing] = useState(false);
  return (
    <div className="m-5 w-[260px]">
      <div
        onMouseEnter={() => setIsSHowing(true)}
        onMouseLeave={() => setIsSHowing(false)}
        className="shadow-md border hover:opacity-80 border-gray-200 h-[250px] w-[250px] flex items-center justify-center rounded-lg relative"
      >
        <CiHeart className="text-3xl transition duration-300 hover:scale-[1.2] cursor-pointer absolute top-3 right-3" />
        <img className="h-[70%] w-full object-contain" src={img} />
        {isShowing && (
          <p className="absolute p-2 cursor-pointer shadow-sm bg-white rounded-md transition duration-300 hover:scale-[1.1] hover:opacity-100">
            <Link to={`/view/${id}`}> View Product </Link>
          </p>
        )}
      </div>
      <p className="w-full font-bold text-[#262626] ">
        {title?.length > 40 ? `${title?.substring(0, 40)}...` : title}
      </p>
      <p className="capitalize from-neutral-950">{cat}</p>
      <div className="flex my-1">
        <MdOutlineStar className="text-yellow-400 text-2xl" />
        <MdOutlineStar className="text-yellow-400 text-2xl" />
        <MdOutlineStar className="text-yellow-400 text-2xl" />
        <MdOutlineStar className="text-yellow-400 text-2xl" />
        <MdOutlineStar className="text-yellow-400 text-2xl" />
        <span>({ratings} reviews)</span>
      </div>
      <div>
        <span className="font-extrabold text-xl">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;

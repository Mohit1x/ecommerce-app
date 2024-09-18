import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToWishList } from "../redux slices/AllProductsSlice";

const ProductCard = ({ image, title, cat, ratings, price, id }) => {
  const dispatch = useDispatch();
  const [isShowing, setIsSHowing] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleWishCard = () => {
    setIsClicked(!isClicked);
    dispatch(addToWishList({ image, title, price, id }));
  };

  return (
    <div className="m-5 w-[260px]" id="product-card">
      <div
        onMouseEnter={() => setIsSHowing(true)}
        onMouseLeave={() => setIsSHowing(false)}
        className="shadow-md bg-[white] hover:opacity-80 transition duration-300 h-[250px] w-[250px] flex items-center justify-center rounded-lg relative"
      >
        <span>
          {isClicked ? (
            <FaHeart
              id="product-filled-heart-icon"
              onClick={handleWishCard}
              className="text-3xl transition duration-300 hover:scale-[1.2] cursor-pointer absolute top-3 right-3 fill-red-600"
            />
          ) : (
            <CiHeart
              id="product-heart-icon"
              onClick={handleWishCard}
              className="text-3xl transition duration-300 hover:scale-[1.2] cursor-pointer absolute top-3 right-3"
            />
          )}
        </span>
        <img className="h-[70%] w-full object-contain" src={image} />
        {isShowing && (
          <p className="absolute p-2 cursor-pointer shadow-sm bg-white rounded-md transition duration-300 hover:scale-[1.1] hover:opacity-100">
            <Link to={`/view/${id}`}> View Product </Link>
          </p>
        )}
      </div>
      <p className="w-full font-bold text-[#262626] ">
        {title?.length > 20 ? `${title?.substring(0, 20)}...` : title}
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

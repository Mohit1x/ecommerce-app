import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import {
  addToCart,
  deleteWishListProduct,
} from "../redux slices/AllProductsSlice";
import WishlistShimmer from "./WishlistShimmer";
import { Link } from "react-router-dom";
import { useState } from "react";

const Whislist = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.wishListProducts);
  const [isAdded, setIsAdded] = useState(true);

  const handleAddProduct = (product) => {
    dispatch(addToCart(product));
    setIsAdded(!isAdded);
  };

  if (!products.length) return <WishlistShimmer />;

  return (
    <div className="h-full w-full py-10 px-10 grid grid-cols-1 md:grid-cols-2 gap-5">
      {products.map((product, index) => (
        <div key={index} className="flex shadow-2xl bg-white p-5 rounded-lg">
          <Link to={`/view/${product.id}`}>
            <img
              src={product?.image}
              className="w-34 h-[150px] shadow-2x object-contain roundedlg transition duration-300 hover:scale-[1.1] cursor-pointer"
            />
          </Link>
          <div className="mx-8 flex flex-col gap-5">
            <p className="text-2xl font-bold truncate">{product?.title}</p>
            <p className="text-xl font-semibold">${product?.price}</p>
            <div className="flex gap-4 items-center">
              {isAdded ? (
                <p
                  onClick={() => handleAddProduct(product)}
                  className="gap-2 cursor-pointer flex items-center text-xl bg-[#6196ca] h-[50px] px-5 rounded-lg text-white transition duration-300 hover:scale-[1.07]"
                >
                  <FaCartPlus className="text-2xl" /> <span>Add</span>
                </p>
              ) : (
                <p className="gap-2 cursor-pointer flex items-center text-xl bg-[#6196ca] h-[50px] px-5 rounded-lg text-white transition duration-300 hover:scale-[1.07]">
                  <FaShoppingCart className="text-2xl" /> <span>Added</span>
                </p>
              )}

              <p
                onClick={() => dispatch(deleteWishListProduct(index))}
                className="gap-2 cursor-pointer flex items-center text-xl bg-[#ce4242] h-[50px] px-5 rounded-lg text-white transition duration-300 hover:scale-[1.07]"
              >
                <MdDelete className="text-2xl" /> <span>Delete</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Whislist;

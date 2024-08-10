import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  decreaseProduct,
  deleteProduct,
  increaseProduct,
} from "../redux slices/AllProductsSlice";
import { CART_BG_IMG } from "../utils/constants";
import SubTotal from "./SubTotal";

const Cart = () => {
  const cartProduct = useSelector((store) => store.products.cartProducts);

  const totalPrice = useMemo(() => {
    const items = cartProduct.reduce((acc, curr) => {
      return (acc += curr.price * curr.quantity);
    }, 0);

    return items;
  }, [cartProduct]);

  const dispatch = useDispatch();

  if (!cartProduct.length)
    return (
      <div className="flex items-center justify-center">
        <img src={CART_BG_IMG} />
      </div>
    );

  return (
    <>
      <div className="bg-[#F6F5F5] py-5 text-3xl font-bold">
        <p className="flex items-center justify-center">Your Cart</p>
      </div>
      <div className="flex justify-center py-10  bg-[#F6F5F5]">
        <div className="flex flex-col gap-3">
          {cartProduct.map((cartProduct, index) => (
            <div
              key={index}
              className="shadow-2xl h-[250px] w-[480px] bg-[white] p-4  rounded-md"
            >
              <div className="flex bg-[white]">
                <div className="pr-5">
                  <Link to={`/view/${cartProduct?.id}`}>
                    <img
                      className="w-[140px] h-[160px] object-contain transitiion duration-300 hover:scale-[1.2] cursor-pointer"
                      src={cartProduct?.image}
                    />
                  </Link>
                </div>
                <div className="gap-4 w-[50%]">
                  <h1 className="my-3 font-serif text-xl text-[#262626] truncate">
                    {cartProduct?.title}
                  </h1>
                  <p className="my-3 font-bold textlg">
                    ${cartProduct?.price * cartProduct?.quantity}
                  </p>
                  <p className="my-3 font-medium text-md">
                    Size : {cartProduct.size ? cartProduct?.size : "L"}
                  </p>
                  <div className="flex items-center justify-center bg-[white]">
                    <div className="flex items-center justify-center w-[100px] bg-gray-50 p-2 rounded-lg gap-4 shadow-lg ml-2">
                      <button
                        className="cursor-pointer"
                        onClick={() => dispatch(increaseProduct(index))}
                      >
                        +
                      </button>
                      <p>{cartProduct?.quantity}</p>
                      <button
                        disabled={cartProduct?.quantity <= 1}
                        className="cursor-pointer disabled:cursor-not-allowed disabled:text-gray-400"
                        onClick={() => dispatch(decreaseProduct(index))}
                      >
                        -
                      </button>
                    </div>
                    <div className="flex items-center justify-end mx-2 ">
                      <p className="flex items-center ">
                        <FaHeart className="transition duration-300 hover:scale-[1.20] text-[#B2B2B2] m-2 cursor-pointer text-xl" />
                        Save
                      </p>
                      <p
                        onClick={() => dispatch(deleteProduct(index))}
                        className="flex items-center"
                      >
                        <MdDelete className="transition duration-300 hover:scale-[1.20] text-[#B2B2B2] m-2 cursor-pointer text-2xl " />
                        Delete
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <SubTotal total={totalPrice} />
      </div>
    </>
  );
};

export default Cart;

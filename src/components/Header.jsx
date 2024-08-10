import {
  AMAZON_LOGO,
  SEARCH_ICON,
  USER_ICON,
  WHISHLIST_ICON,
} from "../utils/constants";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((store) => store.products.cartProducts);
  const wishList = useSelector((store) => store.products.wishListProducts);

  return (
    <div className="flex justify-between bg-[#1C2228] h-[100px] items-center shadow-md top-0 fixed z-50 w-full px-10">
      <Link to="/">
        <img className="w-[125px]" src={AMAZON_LOGO} />{" "}
      </Link>
      <div className="flex w-[400px] mr-56">
        <input
          className="bg-[#2D3B47] border-2 border-[#455B6E] w-[100%] h-12 rounded-l-md placeholder:font-semibold"
          placeholder="  Search..."
        />
        <div className="bg-[#E99317] py-2 px-3 rounded-r-md">
          {" "}
          <img className="w-9 h-8 cursor-pointer" src={SEARCH_ICON} />
        </div>
      </div>
      <div className="flex items-center gap-8 ">
        <div className="relative">
          <Link to="/wishlist">
            <img
              className="w-[30px] h-[30px]  transition duration-300 hover:scale-[1.2] cursor-pointer"
              src={WHISHLIST_ICON}
            />
          </Link>
          {!!wishList.length && (
            <div className="bg-[#E99317] rounded-full w-6 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-white font-semibold">{wishList.length}</p>
            </div>
          )}
        </div>
        <div className="flex items-center relative">
          <Link to="/cart">
            <BsCart2 className="text-white text-3xl  transition duration-300 hover:scale-[1.2] cursor-pointer " />
          </Link>
          {!!cart.length && (
            <div className="bg-[#E99317] rounded-full w-6 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-white font-semibold">{cart.length}</p>
            </div>
          )}
        </div>
        <div className="border-2 rounded-full p-1">
          <img className="w-9 h-9 cursor-pointer" src={USER_ICON} />
        </div>
      </div>
    </div>
  );
};

export default Header;

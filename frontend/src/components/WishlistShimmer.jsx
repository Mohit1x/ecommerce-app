import { Link } from "react-router-dom";
import { EMPTY_WISHLIST_SHIMMER } from "../utils/constants";

const WishlistShimmer = () => {
  return (
    <>
      <div className="flex items-center justify-center py-10 ">
        <p className="text-3xl font-bold">WishList</p>
      </div>
      <div className="flex items-center justify-center">
        <div>
          <img className="w-[400px]" src={EMPTY_WISHLIST_SHIMMER} />
        </div>
        <div className="w-[50%] flex flex-col gap-6 bg-white shadow-2xl p-10 rounded-lg">
          <p className="text-2xl font-bold">{`it's empty Here!`}</p>
          <p className="text-xl font-small">{`"Don't let your wishlist collect dust. Add some items that bring joy to your life and watch as they become a reality with just a few clicks."`}</p>
          <Link to={"/"}>
            <p className="text-xl w-fit p-2 bg-[#FF9500] font-bold text-white rounded-lg transition duration-300 hover:scale-[1.07]">
              Go Shopping
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WishlistShimmer;

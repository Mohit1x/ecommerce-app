import { FaDeleteLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteOrders } from "../redux slices/AllProductsSlice";
import OrderShimmer from "./OrderShimmer";

const Orders = () => {
  const orders = useSelector((store) => store.products.orderProducts);
  console.log(orders.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleImg = (id) => {
    navigate(`/view/${id}`);
  };

  const handleDelete = () => {
    dispatch(deleteOrders());
  };

  if (orders.length === 0) {
    return <OrderShimmer />;
  }
  return (
    <div className="grid cols-1 w-full items-center justify-center">
      <div className="flex items-center gap-52 py-10">
        <h1 className="text-2xl font-bold">Your Orders</h1>
        <p
          className="flex items-center p-2 bg-red-500 w-fit shadow-2xl text-white gap-1 rounded-md cursor-pointer"
          onClick={handleDelete}
        >
          <FaDeleteLeft />
          Clear Data
        </p>
      </div>
      {orders.map((order) => (
        <div
          key={order.id}
          className="grid grid-cols-3 items-center p-4 shadow-2xl bg-white my-2 rounded-md"
        >
          <img
            onClick={() => handleImg(order.id)}
            className="w-20 col-span-1 cursor-pointer transition duration-300 hover:scale-[1.1]"
            src={order.image}
          />
          <div className="col-span-2">
            <p className="text-xl font-bold py-2">{order.title}</p>
            <p className="text-md font-semibold py-2">Size: {order.size}</p>
            <p className="text-md font-semibold py-2">
              No. of items: {order.quantity}
            </p>
            <span className="flex py-2">
              <img
                src="https://media1.tenor.com/m/0AVbKGY_MxMAAAAC/check-mark-verified.gif"
                className="w-10"
              />
              <p className="p-2 bg-green-500 shadow-2xl text-white font-semibold">
                Ordered Sucessfully
              </p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;

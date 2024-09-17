import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./redux slices/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Whislist from "./components/Whislist";
import Shipping from "./components/Shipping";
import ShippingForm from "./components/ShippingForm";
import PaymentMethod from "./components/PaymentMethod";
import Orders from "./components/Orders";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/view/:id",
          element: <ProductDetails />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/wishlist",
          element: <Whislist />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/shipping",
          element: <Shipping />,
          children: [
            {
              path: "/shipping/detail",
              element: <ShippingForm />,
            },
            {
              path: "/shipping/payment-methods",
              element: <PaymentMethod />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="bg-[#F6F5F5] h-full">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;

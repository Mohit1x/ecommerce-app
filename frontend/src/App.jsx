import { useDispatch, useSelector } from "react-redux";
import Body from "./components/Body";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Whislist from "./components/Whislist";
import Shipping from "./components/Shipping";
import ShippingForm from "./components/ShippingForm";
import PaymentMethod from "./components/PaymentMethod";
import Orders from "./components/Orders";
import { Toaster } from "sonner";
import AuthPage from "./components/auth/AuthPage";
import { useState } from "react";
import { getMe } from "./redux slices/authSlice";

function App() {
  const dispatch = useDispatch();

  useState(() => {
    dispatch(getMe());
  });

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
    {
      path: "/auth",
      element: <AuthPage />,
    },
  ]);

  return (
    <div className="bg-[#F6F5F5] h-full">
      <Toaster />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

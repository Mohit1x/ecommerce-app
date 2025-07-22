import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import { useSelector } from "react-redux";

const Body = () => {
  const { isLoading } = useSelector((state) => state.auth || {});

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <h1 className="text-2xl font-bold">Loading.....</h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mt-[100px]">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Body;

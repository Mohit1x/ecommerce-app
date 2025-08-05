import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import { useSelector } from "react-redux";

const Body = () => {
  const { isLoading } = useSelector((state) => state.auth || {});

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <h1 className="text-2xl font-bold">Loading.....</h1>
      </div>
    );
  }
  return (
    <div className="h-full">
      <Header />
      <main className="min-h-screen">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Body;

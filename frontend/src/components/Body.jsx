import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Body = () => {
  const { isAuthenticated } = useSelector((state) => state.auth || {});

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className="h-full">
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

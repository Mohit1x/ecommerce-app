import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

const Body = () => {
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

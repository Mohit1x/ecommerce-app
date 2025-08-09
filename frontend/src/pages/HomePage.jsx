import { useRef } from "react";
import AllProducts from "../components/AllProducts";
import Hero from "../components/Hero";

const HomePage = () => {
  const ref = useRef();

  return (
    <div className="mt-[200px] flex flex-col gap-20">
      <Hero scrollRef={ref} />
      <div ref={ref}>
        <AllProducts />
      </div>
    </div>
  );
};

export default HomePage;

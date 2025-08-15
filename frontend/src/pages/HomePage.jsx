import { useRef } from "react";
import Hero from "../components/homepage-components/Hero";
import AllProducts from "../components/homepage-components/AllProducts";

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

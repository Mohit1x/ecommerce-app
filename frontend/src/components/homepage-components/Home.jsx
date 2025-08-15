import { useRef } from "react";
import AllProducts from "../AllProducts";
import Hero from "./Hero";

const Home = () => {
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

export default Home;

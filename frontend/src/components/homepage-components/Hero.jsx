import { HERO_BG_IMG } from "../../utils/constants";

const Hero = ({ scrollRef }) => {
  const handleBrowseProducts = () => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex items-center justify-between w-[70%] max-w-7xl rounded-2xl h-[340px] shadow-2xl px-8 mx-auto bg-theme">
      <div className="flex flex-col gap-10 justify-center text-white">
        <p className="text-4xl font-bold font-sans"> Free Delivery!</p>
        <p className="w-[60%] text-xl font-sans">
          {`Don't miss it out! Only today, get free`}
          <span className="text-2xl font-bold"> Next Day </span>
          {`delivery on all
            your orders.`}
        </p>
        <p
          onClick={handleBrowseProducts}
          className="bg-[#FFFFFF] text-theme text-lg w-fit px-4 py-[12px] rounded-full font-bold shadow-lg cursor-pointer transition duration-300 hover:scale-[1.1]"
        >
          Browse Products
        </p>
      </div>
      <div>
        <img className="w-[400px] -mt-6" src={HERO_BG_IMG} />
      </div>
    </div>
  );
};

export default Hero;

import { useState } from "react";

const SubTotal = ({ total }) => {
  const [tax] = useState((5 / 100) * total);
  const [promo, setPromo] = useState("");
  const [showPromoCode, setShowPromoCode] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [discount, setDiscount] = useState(0);

  const handlePromo = () => {
    setPromo("MOHIT20");
  };

  const handlePromoCode = () => {
    if (!promo.trim()) return setShowPromoCode(false);
    setShowPromoCode(true);

    if (promo == "MOHIT20") {
      setIsValid(true);
      setDiscount((20 / 100) * total);
    } else {
      setIsValid(false);
      setDiscount(0);
    }
  };
  return (
    <div className="w-[400px] shadow-2xl mx-10 bg-[white]">
      <div>
        <p className="m-8 text-white/90 bg-blue-400 shadow-xl p-3 rounded-sm font-sm">
          {` Congrats! You're eligible for`}{" "}
          <span className="font-bold text-green-300">Free Delivery.</span>
          <br /> Use code{" "}
          <button
            className="font-bold text-green-300 cursor-pointer transition duration-300 hover:scale-[1.08]"
            onClick={handlePromo}
          >
            MOHIT20
          </button>{" "}
          for 20% discount.
        </p>
        <div className="h-[1px] my-8 w-[85%] mx-auto bg-gray-300" />
        <div className="my-8 ml-10">
          <input
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
            className="py-[9px] px-[26px] border border-gray-500 rounded-[5px]"
            placeholder="Promocode"
          />
          <button
            onClick={handlePromoCode}
            className="py-[9px] px-4 bg-[#1C2228] font-bold text-white mx-2 rounded-[5px] text-lg transition duration-300 hover:scale-[1.06]"
          >
            Apply
          </button>
          {showPromoCode ? (
            isValid ? (
              <h1 className="my-2 bg-green-500 w-[90%] text-white shadow-lg rounded-md p-2">
                MOHIT20 has been applied!!🎉🎉
              </h1>
            ) : (
              <h1 className="my-2 bg-red-500 w-[90%] text-white shadow-lg p-2 rounded-md">
                Enter a valid promocode.
              </h1>
            )
          ) : null}
        </div>
        <div className="h-[1px] my-6 w-[85%] mx-auto bg-gray-300" />
        <div className="flex justify-between mx-9 items-center">
          <div className="">
            <p className="text-xl font-bold">Sub-Total</p>
            <p className="my-2 text-sm font-sm text-[#727171]">Delivery</p>
            <p className="text-sm font-sm text-[#727171]">Tax</p>
            {showPromoCode && (
              <p className="text-sm font-sm text-[#727171] my-2">Discount</p>
            )}
          </div>
          <div>
            <p className="text-xl font-bold">${total?.toFixed(2)}</p>
            <p className="my-2 text-sm font-sm text-[#727171]">$0.00</p>
            <p className="text-sm font-sm text-[#727171]">
              (5%) + ${tax.toFixed(2)}
            </p>

            {showPromoCode && (
              <p className="text-sm font-sm text-[#727171] my-2">
                {isValid ? `(20% - $${discount?.toFixed(2)})` : `${discount}`}
              </p>
            )}
          </div>
        </div>
        <div className="h-[1px] my-6 w-[85%] mx-auto bg-gray-300" />
        <div className="flex justify-between mx-9 items-center">
          <p className="text-xl font-bold">Total</p>
          {showPromoCode ? (
            <p className="text-xl font-bold pr-4">
              ${(total - discount + tax).toFixed(2)}
            </p>
          ) : (
            <p className="text-xl font-bold pr-4">
              ${(total + tax).toFixed(2)}
            </p>
          )}
        </div>
        <div className="text-center py-7">
          <button className="bg-[#FF9500] px-[15%] py-3 text-xl text-white font-bold transition duration-300 hover:scale-[1.06] rounded-md">
            Proceed To Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubTotal;

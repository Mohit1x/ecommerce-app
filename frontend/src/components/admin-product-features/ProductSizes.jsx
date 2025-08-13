import { useEffect, useState } from "react";

const clothesSizes = ["XS", "S", "M", "Xl", "XXL"];
const sportssizes = ["3", "4", "5", "6", "7"];

export const ProductSizes = ({ setProductSizes }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sizesInWords, setSizesInWords] = useState(true);

  useEffect(() => {
    setProductSizes(selectedSizes);
  }, [selectedSizes]);

  const handleSelectSizes = (size) => {
    if (selectedSizes.includes(size)) {
      const filterSizes = selectedSizes.filter((sizes) => sizes !== size);
      setSelectedSizes(filterSizes);
    } else {
      setSelectedSizes((prev) => [...prev, size]);
    }
  };
  return (
    <div className="flex items-center gap-5">
      <div className="w-full flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Sizes</label>
          <p className="text-xs font-semibold text-gray-700">
            Pick available sizes
          </p>
        </div>
        <div className="flex items-center gap-10">
          {sizesInWords ? (
            <div className="flex items-center gap-3">
              {clothesSizes.map((size) => (
                <div
                  key={size}
                  onClick={() => handleSelectSizes(size)}
                  className={`bg-[#EDF0EF] w-10 h-10 rounded flex items-center justify-center cursor-pointer ${
                    selectedSizes.includes(size) &&
                    "bg-blue-500 text-white font-semibold"
                  }`}
                >
                  <span>{size}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {sportssizes.map((size) => (
                <div
                  key={size}
                  onClick={() => handleSelectSizes(size)}
                  className={`bg-[#EDF0EF] w-10 h-10 rounded flex items-center justify-center cursor-pointer ${
                    selectedSizes.includes(size) &&
                    "bg-blue-500 text-white font-semibold"
                  }`}
                >
                  <span>{size}</span>
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center gap-2">
            <div
              className={`p-2 bg-[#EDF0EF] rounded cursor-pointer ${
                sizesInWords && "bg-blue-500 text-white font-semibold"
              }`}
              onClick={() => setSizesInWords(true)}
            >
              Sizes in words
            </div>
            <div
              className={`p-2 bg-[#EDF0EF] rounded cursor-pointer ${
                !sizesInWords && "bg-blue-500 text-white font-semibold"
              }`}
              onClick={() => setSizesInWords(false)}
            >
              Sizes in numbers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

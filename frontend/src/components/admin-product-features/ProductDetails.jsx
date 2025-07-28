import { useEffect, useState } from "react";

const clothesSizes = ["XS", "S", "M", "Xl", "XXL"];
const sportssizes = ["3", "4", "5", "6", "7"];

export const ProductDetails = ({ data, setData, setProductSizes }) => {
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
    <div className="bg-[#F9F9F9] w-full p-5 rounded-xl flex flex-col gap-5">
      <h1 className="text-xl font-semibold">ProductDetails</h1>
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm font-semibold">Product Name</label>
          <input
            value={data.name}
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
            type="text"
            className="p-2 bg-[#EDF0EF] outline-none rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm font-semibold">Product Description</label>
          <textarea
            value={data.description}
            onChange={(e) =>
              setData((prev) => ({ ...prev, description: e.target.value }))
            }
            rows={7}
            type="text"
            className="p-2 bg-[#EDF0EF] outline-none rounded resize-none"
          />
        </div>
        <div className="flex items-center gap-10">
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm font-semibold">Price</label>
            <input
              value={data.price}
              onChange={(e) =>
                setData((prev) => ({ ...prev, price: e.target.value }))
              }
              type="number"
              className="p-2 bg-[#EDF0EF] outline-none rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm font-semibold">Compare-at price</label>
            <input
              value={data.compareAtPrice}
              onChange={(e) =>
                setData((prev) => ({ ...prev, compareAtPrice: e.target.value }))
              }
              type="number"
              className="p-2 bg-[#EDF0EF] outline-none rounded"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm font-semibold">Stock</label>
          <input
            value={data.stock}
            onChange={(e) =>
              setData((prev) => ({ ...prev, stock: e.target.value }))
            }
            type="number"
            className="p-2 bg-[#EDF0EF] outline-none rounded"
          />
        </div>
        <div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm font-semibold">Product Category</label>
            <input
              type="text"
              className="p-2 bg-[#EDF0EF] outline-none rounded"
            />
          </div>
        </div>
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
      </div>
    </div>
  );
};

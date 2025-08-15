import { ProductCategory } from "./ProductCategory";
import { ProductSizes } from "./ProductSizes";

export const ProductDetails = ({ data, setData, setProductSizes }) => {
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
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Product Category</label>
          <ProductCategory data={data} setData={setData} />
        </div>
        <ProductSizes setProductSizes={setProductSizes} />
      </div>
    </div>
  );
};

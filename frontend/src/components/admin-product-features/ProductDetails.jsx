export const ProductDetails = () => {
  return (
    <div className="bg-[#F9F9F9] min-h-full w-full p-5 rounded-xl flex flex-col gap-5">
      <h1 className="text-xl font-semibold">ProductDetails</h1>
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm font-semibold">Product Name</label>
          <input
            type="text"
            className="p-2 bg-[#EDF0EF] outline-none rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm font-semibold">Product Description</label>
          <textarea
            rows={7}
            type="text"
            className="p-2 bg-[#EDF0EF] outline-none rounded-xl resize-none"
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

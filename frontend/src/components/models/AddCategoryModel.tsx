export const AddCategoryModel = ({ setIsModelOpen }) => {
  return (
    <div
      className="fixed inset-0 bg-gray-900/60 flex items-center justify-center z-50 transition-all duration-300 cursor-default"
      onClick={() => setIsModelOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-1/2 bg-white flex flex-col gap-2 items-center p-2"
      >
        <h1 className="text-xl font-semibold">Add Category</h1>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

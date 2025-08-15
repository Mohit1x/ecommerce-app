import axios from "axios";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export const AddCategoryModel = ({ setIsModelOpen, getCategories }) => {
  const [preview, setPreview] = useState("");
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setImageFile(file);
    };
    reader.readAsDataURL(file);
  };

  const handleAddCategory = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", imageFile);

    try {
      const response = await axios.post(`${apiUrl}/category`, formData, {
        withCredentials: true,
      });

      console.log(response);
      getCategories();
      setIsModelOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-900/60 flex items-center justify-center z-50 transition-all duration-300 cursor-default"
      onClick={() => setIsModelOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-1/2 bg-white flex flex-col gap-2 items-start p-5 rounded relative"
      >
        <div
          className="absolute right-5 cursor-pointer"
          onClick={() => setIsModelOpen(false)}
        >
          <RxCross2 size={20} className="text-gray-700" />
        </div>
        <h1 className="text-xl font-semibold">Add Category</h1>
        <div className="flex flex-col gap-1 mx-auto">
          {preview ? (
            <img
              src={preview}
              className="h-[200px] w-[200px] object-contain bg-gray-100 rounded"
              alt=""
            />
          ) : (
            <div className="overflow-hidden mx-auto flex items-center justify-center bg-[#e4f3ed] rounded-xl h-[200px] w-[200px]">
              <label
                htmlFor="model-upload"
                className="p-1 rounded-full bg-green-400 text-white cursor-pointer"
              >
                <IoMdAdd size={16} />
              </label>
              <input
                id="model-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          )}
          <h1 className="text-sm font-semibold text-center">
            Upload category image
          </h1>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-sm font-semibold">Category Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full border-2 border-gray-700 focus:border-blue-600 outline-none rounded p-2"
          />
        </div>
        <button
          onClick={handleAddCategory}
          className="text-white font-semibold bg-blue-500 hover:bg-blue-500/70 p-2 rounded w-fit mt-2"
        >
          Add category
        </button>
      </div>
    </div>
  );
};

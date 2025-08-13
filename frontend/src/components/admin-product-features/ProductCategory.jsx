import axios from "axios";
import { useEffect, useState } from "react";
import { AddCategoryModel } from "../models/AddCategoryModel";

export const ProductCategory = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const getCategories = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const res = await axios.get(`${apiUrl}/category`, {
      withCredentials: true,
    });

    setAllCategories(res?.data?.allCategories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="w-full flex gap-5">
      <div className="w-full flex flex-col gap-2">
        <select className="p-2 outline-none border border-gray-800 focus:border focus:border-blue-500 rounded">
          {allCategories.map((categ) => (
            <option name="" id="" key={categ} className="p-5">
              {categ.name}
            </option>
          ))}
        </select>
      </div>

      <div
        onClick={() => setIsModelOpen(true)}
        className="bg-theme text-center hover:bg-theme/70 w-full h-full p-2 rounded"
      >
        <button className="text-white font-semibold">Add Category</button>
      </div>
      {isModelOpen && <AddCategoryModel setIsModelOpen={setIsModelOpen} />}
    </div>
  );
};

import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMe } from "../../redux slices/authSlice";

export const Edit = ({ onClose, data }) => {
  const [formData, setFormData] = useState({
    country: data.country,
    name: data.name,
    street: data.street,
    city: data.city,
    state: data.state,
    postalCode: data.postalCode,
    isDefault: data.isDefault,
  });
  const dispatch = useDispatch();

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `${apiUrl}/address/update/${data._id}`,
        { ...formData },
        { withCredentials: true }
      );
      console.log(response);
      dispatch(getMe());
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${apiUrl}/address/delete/${data._id}`,
        { withCredentials: true }
      );
      console.log(response);
      dispatch(getMe());
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Create Address</h1>
      <div className="flex flex-col gap-4">
        <div className="w-full flex items-center gap-2">
          <label className="flex items-center gap-2 cursor-pointer w-full">
            <input
              type="checkbox"
              checked={formData.isDefault}
              onChange={(e) =>
                setFormData((formData) => ({
                  ...formData,
                  isDefault: e.target.checked,
                }))
              }
            />
            <h1 className="text-sm">This is my default address</h1>
          </label>
        </div>
        <div className="border border-gray-200 bg-[#FAFAFA] p-2 rounded-lg flex flex-col">
          <label className="text-sm text-[#707070]">Country</label>
          <input
            type="text"
            value={formData.country}
            className="text-sm outline-none bg-[#FAFAFA]"
            onChange={(e) =>
              setFormData((formData) => ({
                ...formData,
                country: e.target.value,
              }))
            }
          />
        </div>
        <div className="border border-gray-200 bg-[#FAFAFA] p-2 rounded-lg flex flex-col">
          <label className="text-sm text-[#707070]">Name</label>
          <input
            type="text"
            value={formData.name}
            className="text-sm outline-none bg-[#FAFAFA]"
            onChange={(e) =>
              setFormData((formData) => ({ ...formData, name: e.target.value }))
            }
          />
        </div>
        <div className="border border-gray-200 bg-[#FAFAFA] p-2 rounded-lg flex flex-col">
          <label className="text-sm text-[#707070]">Street</label>
          <input
            type="text"
            value={formData.street}
            className="text-sm outline-none bg-[#FAFAFA]"
            onChange={(e) =>
              setFormData((formData) => ({
                ...formData,
                street: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-2 w-full">
          <div className="border border-gray-200 bg-[#FAFAFA] p-2 rounded-lg flex flex-col w-full">
            <label className="text-sm text-[#707070]">City</label>
            <input
              type="text"
              value={formData.city}
              className="text-sm outline-none bg-[#FAFAFA] w-full"
              onChange={(e) =>
                setFormData((formData) => ({
                  ...formData,
                  city: e.target.value,
                }))
              }
            />
          </div>
          <div className="border border-gray-200 bg-[#FAFAFA] p-2 rounded-lg flex flex-col w-full">
            <label className="text-sm text-[#707070]">State</label>
            <input
              type="text"
              value={formData.state}
              className="text-sm outline-none bg-[#FAFAFA]"
              onChange={(e) =>
                setFormData((formData) => ({
                  ...formData,
                  state: e.target.value,
                }))
              }
            />
          </div>
          <div className="border border-gray-200 bg-[#FAFAFA] p-2 rounded-lg flex flex-col w-full">
            <label className="text-sm text-[#707070]">PIN Code</label>
            <input
              type="text"
              value={formData.postalCode}
              className="text-sm outline-none bg-[#FAFAFA]"
              onChange={(e) =>
                setFormData((formData) => ({
                  ...formData,
                  postalCode: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div>
          <button onClick={handleDelete} className="text-red-500">
            Delete
          </button>
        </div>
        <div className="self-end flex items-center gap-2">
          <button
            className="text-sm text-[#105989] underline"
            onClick={() => onClose()}
          >
            Cancel
          </button>
          <button
            className="text-sm font-semibold bg-[#105989] rounded-md text-white px-4 py-2"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

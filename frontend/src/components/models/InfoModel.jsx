import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMe } from "../../redux slices/authSlice";

const InfoModel = ({ data, onClose }) => {
  const [name, setName] = useState(data?.name);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      const response = await axios.put(
        `${apiUrl}/user/profile`,
        { name },
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
      <h1 className="text-xl font-semibold">Edit Profile</h1>
      <div className="flex flex-col gap-4">
        <div className="border border-gray-100 bg-[#FAFAFA] p-2 rounded-lg flex flex-col">
          <label className="text-sm text-[#707070]">Name</label>
          <input
            type="text"
            value={name}
            className="text-sm outline-none bg-[#FAFAFA]"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="border border-gray-100 bg-[#FAFAFA] p-2 rounded-lg">
            <label className="text-sm text-[#707070]">Email</label>
            <h1 className="text-sm text-[#969696]">{data?.email}</h1>
          </div>
          <h1 className="text-xs text-[#707070]">
            Email used for login can't be changed
          </h1>
        </div>
      </div>
      <div className="self-end flex items-center gap-2">
        <button className="text-sm text-[#105989] underline">Cancel</button>
        <button
          className="text-sm font-semibold bg-[#105989] rounded-md text-white px-4 py-2"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default InfoModel;

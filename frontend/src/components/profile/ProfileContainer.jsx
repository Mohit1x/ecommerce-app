import { useSelector } from "react-redux";
import { MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";
import ProfileModel from "../models/ProfileModel";

const ProfileContainer = () => {
  const [openModel, setOpenModel] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [addAddress, setAddAddress] = useState(false);
  const { user } = useSelector((state) => state.auth || {});

  const profileData = {
    name: user?.name,
    email: user?.email,
  };

  console.log(editingIndex, "editing index");

  const handleClose = (event) => {
    event.stopPropagation();
    setEditingIndex(null);
  };

  return (
    <div className="w-full bg-[#F5F5F5]">
      <div className="flex flex-col gap-10 h-full w-full py-5 px-5 md:py-10 md:px-20">
        <h1 className="text-xl font-semibold">Profile</h1>
        <div className="bg-[#FFFFFF] w-full p-5 rounded-xl flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <h1 className="text-sm font-semibold">{user?.name}</h1>
            <MdOutlineModeEdit
              className="text-blue-400 cursor-pointer"
              onClick={() => setOpenModel(true)}
            />
            {openModel && (
              <ProfileModel
                model={"info"}
                onClose={() => setOpenModel(false)}
                data={profileData}
                variant="info-edit"
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#707070] text-sm">Email</h1>
            <h1 className="text-sm font-semibold">{user?.email}</h1>
          </div>
        </div>
        <div className="bg-[#FFFFFF] w-full p-5 rounded-xl flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <h1 className="text-md font-semibold">Addresses</h1>
            <button
              className="text-blue-500 text-sm font-semibold"
              onClick={() => setAddAddress(true)}
            >
              + Add
            </button>
            {addAddress && (
              <ProfileModel
                model={"address"}
                onClose={() => setAddAddress(false)}
                variant="create"
              />
            )}
          </div>
          <div className="w-full grid grid-cols md:grid-cols-2 lg:grid-cols-4 xl:grid grid-cols-5 gap-6">
            {user?.address.map((add, idx) => (
              <div
                key={idx}
                className="flex justify-between gap-2 hover:bg-[#F5F5F5] text-sm p-2 rounded w-[250px] cursor-pointer"
                onClick={() => setEditingIndex(idx)}
              >
                <div className="flex flex-col items-start">
                  {add?.isDefault && (
                    <h1 className="text-[#707070] text-sm mb-2">
                      Default Address
                    </h1>
                  )}
                  <h1>{add?.name}</h1>
                  <h1>{add?.street}</h1>
                  <div className="flex items-center gap-2">
                    <h1>{add?.postalCode}</h1>
                    <h1>{add?.city}</h1>
                    <h1>{add?.state}</h1>
                  </div>
                  <h1 className="capitalize">{add?.country}</h1>
                </div>
                <div>
                  <MdOutlineModeEdit className="text-blue-400" />
                  {editingIndex === idx && (
                    <ProfileModel
                      model={"address"}
                      onClose={(e) => handleClose(e)}
                      data={add}
                      variant="edit"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;

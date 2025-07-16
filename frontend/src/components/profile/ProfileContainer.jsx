import { useSelector } from "react-redux";
import { MdOutlineModeEdit } from "react-icons/md";

const ProfileContainer = () => {
  const { user } = useSelector((state) => state.auth || {});

  console.log(user);

  return (
    <div className="md:h-[100vh] w-full bg-[#F5F5F5]">
      <div className="flex flex-col gap-10 h-full w-full py-5 px-5 md:py-10 md:px-20">
        <h1 className="text-xl font-semibold">Profile</h1>
        <div className="bg-[#FFFFFF] w-full p-5 rounded-xl flex flex-col gap-5">
          <div className="flex items-center space-x-5">
            <h1 className="text-sm font-semibold">{user?.name}</h1>
            <MdOutlineModeEdit className="text-blue-400 cursor-pointer" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#707070] text-sm">Email</h1>
            <h1 className="text-sm font-semibold">{user?.email}</h1>
          </div>
        </div>
        <div className="bg-[#FFFFFF] w-full p-5 rounded-xl flex flex-col gap-5">
          <div className="flex items-center space-x-5">
            <h1 className="text-md font-semibold">Addresses</h1>
            <button className="text-blue-500">+ Add</button>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center gap-5">
            {user?.address.map((add, idx) => (
              <div
                key={idx}
                className="flex flex-wrap justify-between gap-2 hover:bg-[#F5F5F5] text-sm p-2 rounded w-[300px] cursor-pointer"
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

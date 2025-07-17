import { Link } from "react-router-dom";

export const ProfileDropDown = ({ setShowProfileDropDown, user }) => {
  return (
    <div
      className="bg-white text-black w-[300px] px-2 py-2 flex flex-col gap-2 rounded-xl"
      onMouseEnter={() => setShowProfileDropDown(true)}
    >
      <h1 className="text-sm font-semibold">DropDown</h1>
      <div className="h-[1px] bg-gray-400 w-full" />
      <Link to={"/profile"}>
        <h1 className="text-sm font-semibold">Profile</h1>
      </Link>
      <div className="h-[1px] bg-gray-400 w-full" />
      <h1 className="text-sm font-semibold">Logout</h1>
    </div>
  );
};

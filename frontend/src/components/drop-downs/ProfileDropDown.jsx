import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { getMe } from "../../redux slices/authSlice";

export const ProfileDropDown = ({ setShowProfileDropDown, user }) => {
  const firstName = user?.name.split(" ")[0];

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      event.stopPropagation();

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dispatch = useDispatch();

  const handleLogOut = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      const response = await axios.post(`${apiUrl}/auth/logout`, null, {
        withCredentials: true,
      });
      console.log(response);
      dispatch(getMe());

      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="bg-white text-black p-5 flex flex-col gap-4 rounded-xl cursor-default"
      onMouseEnter={() => setShowProfileDropDown(true)}
      ref={dropdownRef}
    >
      <div>
        <h1 className="text-[#535252] text-lg font-semibold">
          <span>Hi</span> {firstName}
        </h1>
        <h1 className="text-sm text-[#918d8d] font-[400]">{user?.email}</h1>
      </div>
      <div className="flex items-center gap-4">
        <Link to={"/profile"}>
          <button className="flex items-center gap-2 bg-[#F0F0F0] px-10 py-2 font-medium rounded-xl border border-gray-200 hover:text-white hover:bg-zinc-700 group">
            <FaRegUser
              size={15}
              className="text-gray-800 group-hover:text-white"
            />
            <h1 className="text-md text-gray-800 group-hover:text-white">
              Profile
            </h1>
          </button>
        </Link>
        <button
          className="flex items-center gap-2 bg-[#F0F0F0] px-10 py-2 font-medium rounded-xl border border-gray-200 hover:bg-zinc-700 group"
          onClick={handleLogOut}
        >
          <IoIosLogOut
            size={18}
            className="text-gray-800 group-hover:text-white"
          />
          <h1 className="text-md text-gray-800 group-hover:text-white">
            Logout
          </h1>
        </button>
      </div>
    </div>
  );
};

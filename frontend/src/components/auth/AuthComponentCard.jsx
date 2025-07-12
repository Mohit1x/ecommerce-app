import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthComponentCard = ({ tag, desc, label, buttonText }) => {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const navigate = useNavigate();

  const handleOnChange = (field, event) => {
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    if (tag === "Sign In") {
      try {
        const response = await axios.post(
          `${apiUrl}/auth/login`,
          {
            email: data.email,
            password: data.password,
          },
          {
            withCredentials: true,
          }
        );
        console.log(response);

        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.post(`${apiUrl}/auth/register`, data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const inputConfig = {
    name: { type: "text", autoComplete: "name" },
    password: { type: "password", autoComplete: "current-password" },
    email: { type: "email", autoComplete: "email" },
  };

  return (
    <div className="auth-form space-y-5">
      <h1 className="text-2xl font-bold">{tag}</h1>
      <p className="text-[#75677B] text-sm font-semibold">{desc}</p>
      <div className="flex flex-col space-y-4">
        {label.map((item, idx) => (
          <input
            key={idx}
            type={inputConfig[item]?.type || "text"}
            autoComplete={inputConfig[item]?.autoComplete}
            placeholder={item}
            className="w-full bg-[#EEEEEE] placeholder:text-[#808080] placeholder:text-sm p-2 rounded-lg placeholder:capitalize outline-none"
            value={data[item]}
            onChange={(e) => handleOnChange(item, e)}
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="w-fit text-white bg-[#5865F2] mx-auto hover:bg-[#39286E] rounded-lg py-2 px-10 font-semibold text-sm uppercase"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default AuthComponentCard;

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUserData } from "../redux slices/AllProductsSlice";
import { useNavigate } from "react-router-dom";

const ShippingForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(addUserData(data));
    navigate("/shipping/payment-methods");
  };
  return (
    <form
      className="shadow-2xl rounded-lg p-10 flex flex-col gap-4 bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="py-6 gap-4">
        <p className="text-2xl font-bold">Shipping details</p>
        <p className="text- md font-bold font-sans">order Id: 123456</p>
      </div>
      <div className="grid grid-cols-2 gap-4 py-2">
        <label>
          Country:
          <input
            className="w-full p-4 focus:outline-none border border-slate-200 rounded-md"
            type="text"
            {...register("country", { required: "country field is required" })}
          />
          {errors.country && (
            <p className="text-red-500 text-md font-bold">
              {errors.country.message}
            </p>
          )}
        </label>
        <label>
          email:
          <input
            className="w-full p-4 focus:outline-none border border-slate-200 rounded-md"
            type="email"
            {...register("email", { required: "email field is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-md font-bold">
              {errors.email.message}
            </p>
          )}
        </label>
      </div>
      <div className="grid grid-cols-2 gap-4 py-2">
        <label>
          Name:
          <input
            className="w-full p-4 focus:outline-none border border-slate-200 rounded-md"
            type="text"
            {...register("name", { required: "name field is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-md font-bold">
              {errors.name.message}
            </p>
          )}
        </label>
        <label>
          Address:
          <input
            className="w-full p-4 focus:outline-none border border-slate-200 rounded-md"
            type="text"
            {...register("address", { required: "address field is required" })}
          />
          {errors.address && (
            <p className="text-red-500 text-md font-bold">
              {errors.address.message}
            </p>
          )}
        </label>
      </div>
      <div className="grid grid-cols-2 gap-4 py-2">
        <label>
          Contact:
          <input
            className="w-full p-4 focus:outline-none border border-slate-200 rounded-md"
            type="number"
            {...register("contact", {
              required: "contact field is required",
              minLength: {
                value: 10,
                message: "Enter valid 10 number contact",
              },
            })}
          />
          {errors.contact && (
            <p className="text-red-500 text-md font-bold">
              {errors.contact.message}
            </p>
          )}
        </label>
        <label>
          Pin Code:
          <input
            className="w-full p-4 focus:outline-none border border-slate-200 rounded-md"
            type="number"
            {...register("pinCode", {
              required: "pin-code field is required",
              minLength: {
                value: 6,
                message: "Enter valid 6 charecter pin code",
              },
            })}
          />
          {errors.pinCode && (
            <p className="text-red-500 text-md font-bold">
              {errors.pinCode.message}
            </p>
          )}
        </label>
      </div>
      <label className="mx-auto">
        <select
          className="p-4 gap-2 border border-slate-300 rounded-md cursor-pointer"
          {...register("method", { required: "choose at-least one method" })}
        >
          <option value={""}>Select Payment Method :</option>
          {["cash on delivery", "credit/debit card"].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        {errors.method && (
          <p className="text-red-500 text-md font-bold">
            {errors.method.message}
          </p>
        )}
      </label>
      <button
        type="submit"
        className="bg-[#E99317] w-fit rounded-md text-white font-semibold py-2 px-4"
      >
        Save
      </button>
    </form>
  );
};

export default ShippingForm;

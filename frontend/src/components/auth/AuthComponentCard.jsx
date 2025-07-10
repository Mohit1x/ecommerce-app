const AuthComponentCard = ({
  tag,
  desc,
  label,
  buttonText,
  toggleButtonText,
  onToggle,
}) => {
  return (
    <div className="auth-form space-y-5">
      <h1 className="text-2xl font-bold">{tag}</h1>
      <p className="text-[#75677B] text-sm font-semibold">{desc}</p>
      <div className="flex flex-col space-y-4">
        {label.map((item, idx) => (
          <input
            key={idx}
            type="text"
            placeholder={item}
            className="w-full bg-[#EEEEEE] placeholder:text-[#808080] placeholder:text-sm p-2 rounded-lg capitalize outline-none"
          />
        ))}
      </div>
      <button>{buttonText}</button>
    </div>
  );
};

export default AuthComponentCard;

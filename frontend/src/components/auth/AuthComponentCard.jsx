const AuthComponentCard = ({
  tag,
  text1,
  label,
  buttonText,
  toggleButtonText,
  direction,
  setShowSignUp,
}) => {
  const handleToggle = () => {
    setShowSignUp((prev) => !prev);
  };

  return (
    <div
      className={`flex items-center justify-center gap-10 w-full h-full ${
        direction === "left" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="w-[50%]">
        <h1>{tag}</h1>
      </div>

      <div
        className={`bg-purple-500 w-[50%] flex items-center justify-center h-full cursor-pointer ${
          direction === "left" ? "rounded-r-[100px]" : "rounded-l-[100px]"
        }`}
        onClick={handleToggle}
      >
        <h1>{toggleButtonText}</h1>
      </div>
    </div>
  );
};

export default AuthComponentCard;

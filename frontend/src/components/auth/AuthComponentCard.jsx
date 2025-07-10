const AuthComponentCard = ({
  tag,
  desc,
  label,
  buttonText,
  toggleButtonText,
  onToggle,
}) => {
  return (
    <div className="auth-form">
      <h1>{tag}</h1>
      <p>{desc}</p>
      <div className="form-inputs">
        {label.map((item, idx) => (
          <input key={idx} type="text" placeholder={item} />
        ))}
      </div>
      <button>{buttonText}</button>
    </div>
  );
};

export default AuthComponentCard;

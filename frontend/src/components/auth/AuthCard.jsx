import { useEffect, useState } from "react";
import AuthComponentCard from "./AuthComponentCard";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const AuthCard = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const { user, isAuthenticated } = useSelector((state) => state.auth || {});

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="auth-container">
      <div className={`auth-card ${isSignUp ? "right-panel-active" : ""}`}>
        <div className="form-container sign-up-container">
          <AuthComponentCard
            tag="Create Account"
            desc="Use your email and other details for registration"
            label={["name", "email", "password"]}
            buttonText="Sign Up"
            toggleButtonText="Sign In"
            onToggle={() => setIsSignUp(false)}
          />
        </div>
        <div className="form-container sign-in-container">
          <AuthComponentCard
            tag="Sign In"
            desc="Use your email and password for sign in"
            label={["email", "password"]}
            buttonText="Sign In"
            toggleButtonText="Sign Up"
            onToggle={() => setIsSignUp(true)}
          />
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left space-y-5">
              <h1 className="text-3xl font-bold">Welcome Back!</h1>
              <p>Already have an account?</p>
              <button
                onClick={() => setIsSignUp(false)}
                className="bg-transparent border border-white rounded-lg py-2 px-10 font-semibold text-sm uppercase"
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right space-y-5">
              <h1 className="text-3xl font-bold">Hello, Friend!</h1>
              <p>Don’t have an account?</p>
              <button
                onClick={() => setIsSignUp(true)}
                className="bg-transparent border border-white rounded-lg py-2 px-10 font-semibold text-sm uppercase"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;

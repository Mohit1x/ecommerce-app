import { useState } from "react";
import AuthComponentCard from "./AuthComponentCard";

const AuthCard = () => {
  const [isSignUp, setIsSignUp] = useState(false);

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
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Already have an account?</p>
              <button onClick={() => setIsSignUp(false)}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Don’t have an account?</p>
              <button onClick={() => setIsSignUp(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;

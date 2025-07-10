import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuthComponentCard from "./AuthComponentCard";

const AuthCard = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <div className="h-[50vh] w-[40%] bg-white shadow-2xl rounded-xl relative overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        {showSignUp ? (
          <motion.div
            key="signup"
            initial={{ x: showSignUp ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: showSignUp ? "-100%" : "100%", opacity: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <AuthComponentCard
              tag={"Create Account"}
              text1={"Use your email and other details for registration"}
              label={["name", "email", "password"]}
              buttonText={"Sign Up"}
              toggleButtonText={"Sign In"}
              direction={"left"}
              setShowSignUp={setShowSignUp}
            />
          </motion.div>
        ) : (
          <motion.div
            key="signin"
            initial={{ x: showSignUp ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: showSignUp ? "-100%" : "100%", opacity: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <AuthComponentCard
              tag={"Sign In"}
              text1={"Use your email and password for sign in"}
              label={["email", "password"]}
              buttonText={"Sign In"}
              toggleButtonText={"Sign Up"}
              direction={"right"}
              setShowSignUp={setShowSignUp}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthCard;

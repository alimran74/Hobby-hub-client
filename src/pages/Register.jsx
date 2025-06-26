import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import "./Register.css";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const cardRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);

    if (!uppercase || !lowercase || password.length < 6) {
      setError("Password must have uppercase, lowercase and be at least 6 characters long.");
      toast.error("❌ Password must have uppercase, lowercase and 6+ characters.");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => {
            toast.success("✅ Registration Successful!");
            navigate("/");
          })
          .catch(() => {
            toast.error("❌ Failed to update profile");
          });
      })
      .catch((err) => {
        setError(err.message);
        toast.error("❌ " + err.message);
      });
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const wrapper = wrapperRef.current;
    const rect = card.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const percentX = (100 / rect.width) * offsetX;
    const percentY = (100 / rect.height) * offsetY;
    const centerX = percentX - 50;
    const centerY = percentY - 50;

    wrapper.style.setProperty("--pointer-x", `${percentX}%`);
    wrapper.style.setProperty("--pointer-y", `${percentY}%`);
    wrapper.style.setProperty("--rotate-x", `${-(centerY / 4)}deg`);
    wrapper.style.setProperty("--rotate-y", `${(centerX / 4)}deg`);
  };

  const resetTransform = () => {
    const wrapper = wrapperRef.current;
    wrapper.style.setProperty("--rotate-x", `0deg`);
    wrapper.style.setProperty("--rotate-y", `0deg`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 login-grid-bg">
      <div
        className="pc-card-wrapper max-w-4xl w-full"
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
      >
        <div className="pc-card shadow-2xl flex flex-col md:flex-row bg-white/80 overflow-hidden rounded-lg" ref={cardRef}>
          {/* Lottie Animation */}
          <div className="flex justify-center items-center w-full md:w-1/2 bg-purple-50 p-8">
            <Player autoplay loop src="/register-animation.json" style={{ height: 300, width: 300 }} />
          </div>

          {/* Form Section */}
          <motion.form
            onSubmit={handleRegister}
            className="w-full md:w-1/2 p-8"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-600">Register</h2>

            <input type="text" name="name" placeholder="Your Name" required className="input input-bordered w-full mb-3" />
            <input type="email" name="email" placeholder="Your Email" required className="input input-bordered w-full mb-3" />
            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered w-full mb-3" />
            <input type="password" name="password" placeholder="Password" required className="input input-bordered w-full mb-3" />

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <button type="submit" className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700">
              Register
            </button>

            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Register;

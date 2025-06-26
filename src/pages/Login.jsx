import React, { useContext, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import { motion } from "framer-motion";
import "./Register.css"; // ✅ Import shared tilt CSS

const Login = () => {
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const wrapperRef = useRef(null);
  const cardRef = useRef(null);

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

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(() => {
        toast.success("✅ Login successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`❌ ${error.message}`);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("✅ Google Login successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`❌ ${error.message}`);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 login-grid-bg">
      <div
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
        className="pc-card-wrapper max-w-4xl w-full"
      >
        <div
          ref={cardRef}
          className="pc-card bg-white/80 rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden"
        >
          {/* Left - Lottie Animation */}
          <div className="flex justify-center md:justify-start items-center  w-full md:w-1/2 bg-purple-50 p-8">
            <Player
              autoplay
              loop
              src="/login-animation.json"
              style={{ height: 300, width: 300 }}
            />
          </div>

          {/* Right - Login Form */}
          <motion.div
            className="w-full md:w-1/2 p-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="font-semibold text-2xl text-center py-5 text-purple-600">
              Login to Your Account
            </h1>
            <form onSubmit={handleLogIn} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="text-right">
                <a href="#" className="link link-hover text-sm text-purple-600">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="btn btn-neutral w-full bg-purple-600 hover:bg-purple-700 transition"
              >
                Login
              </button>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn bg-white text-black border border-gray-300 shadow flex items-center justify-center gap-2 w-full"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>

              <p className="font-semibold text-center pt-6 text-gray-700">
                Don&apos;t have an account?{" "}
                <Link className="text-blue-500" to="/auth/register">
                  Register
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;

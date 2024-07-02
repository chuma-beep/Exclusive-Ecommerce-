import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";
import "../App.css";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useState } from "react";
import { useAuthContext } from "../context/authContext";

export default function Login() {
  const {
    handleLogin,
    error,
    loading,
    email,
    setEmail,
    password,
    setPassword,
  } = useAuthContext();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <Header />
      <div className="flex flex-row mt-20 mb-20 gap-20 justify-center">
        <div className="hidden sm:block max-h-max">
          <img
            className="h-108"
            src="signup-img/singup-img(2).png"
            alt="Login illustration"
          />
        </div>
        <div>
          <form onSubmit={handleLogin} className="pt-10">
            <h1 className="text-black text-4xl font-medium leading-[50px] tracking-wider mb-6">
              Log in to Exclusive
            </h1>
            <p className="text-black text-base font-normal leading-normal">
              Enter your details below
            </p>
            <div className="flex flex-col gap-4 mt-6">
              <input
                type="text"
                id="emailOrNumber"
                name="emailOrNumber"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|\d+"
                placeholder="Enter email or Phone number"
                required
                className="border-b-2 border-black p-2 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="border-b-2 border-black p-2 focus:outline-none w-full"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8} // Optional: Enforce minimum length for security
                />
                <span
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={handleTogglePasswordVisibility}
                >
                  <Icon icon={passwordVisible ? eye : eyeOff} size={20} />
                </span>
              </div>
              <div className="flex flex-row justify-center gap-20">
                <button
                  type="submit"
                  className="w-40 h-12 mt-10 bg-red-500 rounded text-neutral-50 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
                  disabled={loading}
                >
                  {loading ? "Logging In..." : "Log In"}
                </button>
                {error && <p className="text-red-500 mt-10">{error}</p>}
                <div className="mt-12">
                  <a href="#" className="text-red-500">Forget Password</a>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center mt-5">
              <p className="opacity-70 mb-10 text-black text-base font-normal leading-normal">
                Don't have an account?
              </p>
              <Link
                className="opacity-70 text-black text-base font-medium leading-normal underline underline-offset-8"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

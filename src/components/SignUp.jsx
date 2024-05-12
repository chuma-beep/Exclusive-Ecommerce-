// import { Link, NavLink } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import "../index.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <Header />
      <div className="flex flex-row mt-20 mb-20 gap-20 justify-center">
        <div className="flex max-h-max">
          <img
            className="h-108"
            src="signup-img/singup-img(2).png"
            alt="image description"
          />
        </div>
        <div>
          <form className="">
            <h1 className="text-black text-4xl font-medium leading-[50px] tracking-wider">
              Create an account
            </h1>
            <p className="text-black text-base font-normal leading-normal">
              Enter your details below
            </p>
            <div className="flex flex-col gap-4 mt-6">
              <input
                type="text"
                placeholder="First Name"
                className="border-b-2 border-black p-2 focus:outline-none"
                required
              />
              <input
                type="text"
                id="emailOrNumber"
                name="emailOrNumber"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|\d+"
                placeholder="Enter email or number"
                required
                className="border-b-2 border-black p-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Password"
                className="border-b-2  border-black p-2 focus:outline-none"
                required
              />
            </div>
            <div className="w-96 h-14 px-32 py-4 mt-10 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
              <button className="text-neutral-50">Create Account</button>
            </div>

            <div className="flex flex-col py-10 ">
              <div className="w-96 h-14 px-20 py-4 rounded border border-black border-opacity-40 flex-col justify-start items-start gap-2.5 inline-flex transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
                <div className="justify-start items-start gap-4 inline-fle">
                  <div className="w-6 relative" />
                  <button className="text-black text-base font-normal leading-normal flex flex-row gap-4 px-4">
                    <img src="icons/Icon-Google.png" />
                    Sign up with Google
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center">
              <p className="opacity-70 mb-10  text-black text-base font-normal leading-normal">
                Already have account?
              </p>
              <Link
                className="opacity-70 text-black text-base font-medium leading-normal underline underline-offset-8"
                to="/Login"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

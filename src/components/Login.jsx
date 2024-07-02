// import { Link, NavLink } from "react-router-dom";

import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";
import { useAuthContext } from "../context/authContext";




export default function Login() {
  const { handleLogin, error, loading, email, setEmail, password, setPassword } = useAuthContext();
  
  
  

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
          <form onSubmit={handleLogin}className="pt-10">
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
                value= {email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Password"
                className="border-b-2  border-black p-2 focus:outline-none"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <div className="flex flex-row justify-center gap-20">
                  <div className="w-10 h-12 px-14 py-2 mt-10 bg-red-500 rounded justify-center items-center gap-36 flex flex-row transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
                    <button className="text-neutral-50"
                    type="submit"
                    disabled={loading}>
                    {loading ? "Logging In" : "Log In"}
                    </button>
                    {error && <p>{error}</p>}
                  </div>
                  <div className="mt-12">
                    <a className="text-red-500">Forget Password</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="flex flex-row gap-4 justify-center mt-5">
            <p className="opacity-70 mb-10  text-black text-base font-normal leading-normal">
              Don't have an account?
            </p>
            <Link
              className="opacity-70 text-black text-base font-medium leading-normal underline underline-offset-8"
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
     <div className="flex max-h-max">
<img className="h-108" src="signup-img/singup-img(2).png" alt="image description"/>

</div>
      <div>
      <form className="pt-10">
      <h1 className="text-black text-4xl font-medium leading-[50px] tracking-wider mb-6">Log in to Exclusive</h1>
      <p className="text-black text-base font-normal leading-normal">Enter your details below</p>
      <div className="flex flex-col gap-4 mt-6">
          <input type="text" id="emailOrNumber" name="emailOrNumber" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|\d+" placeholder="Enter email or Phone number" required className="border-b-2 border-black p-2 focus:outline-none" />
          <input type="text" placeholder="Password" className="border-b-2  border-black p-2 focus:outline-none" required/>
         <div>
         <div className="flex flex-row justify-center gap-20">
         <div className="w-10 h-12 px-14 py-2 mt-10 bg-red-500 rounded justify-center items-center gap-36 flex flex-row transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
  <button className="text-neutral-50">Login</button>
</div>
<div className="mt-12">
    <a className="text-red-500">Forget Password</a>
</div>
</div>
         </div>
          </div>
         
      </form>
     </div>
     </div>
      <Footer />
      </>
  );
}

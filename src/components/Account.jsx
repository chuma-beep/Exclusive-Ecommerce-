import { useState } from "react";
import { Container, Typography } from "@mui/material";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useAuthContext } from "../context/authContext";

function Account() {
  const { session, handleLogout, loading, updateProfile } = useAuthContext();
  const [formData, setFormData] = useState({
    fullName: session?.user?.user_metadata?.full_name || "",
    firstName: session?.user?.user_metadata?.full_name?.split(" ")[0] || "",
    lastName: session?.user?.user_metadata?.full_name?.split(" ")[1] || "",
    email: session?.user?.email || "",
    address: "",
    newPassword: "",
    currentPassword: "",
    confirmNewPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName.trim()) {
      alert("First name is required");
      return;
    }
    await updateProfile(formData);
  };

  return (
    <>
      <Header />

      <div className="w-full max-w-full mx-0 px-[7%] py-8">
        <div className="flex items-center justify-between">
          <div>
            <RouterNavLink
              to="/"
              className="text-gray-500 no-underline mr-2"
            >
              Home
            </RouterNavLink>
            <span>
              <b> / </b>
            </span>
            <RouterNavLink
              to="/my-account"
              className="text-black no-underline"
            >
              My Account
            </RouterNavLink>
          </div>

          <div>
            <p>
              Welcome!{" "}
              <span className="text-[#DB4444] border-none text-sm">
                {formData.firstName}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-8 lg:mt-16  ">
          <div className="mt-5 lg:ml-10">
           <h1 className="text-lg mb-4 font-bold">
           <Link>Manage My Account</Link>
           </h1>
             
            <div className="profile w-40 h-20 lg:ml-8">
            <h1 className="text-[#DB4444">
           <Link>My Profile</Link>
           </h1>
    <p className="text-[#DB4444] text-sm">
    <Link>My Address Book</Link>
    </p>
    <p className="mb-4 text-[#D9D9D9]">
    <Link> My Payment Options</Link>
    </p>
            <h1 className="text-lg mt-4 mb-4 font-bold">
            <Link>My Orders</Link>
            </h1>
              <div className="order w-40 h-20 ">
                <p className="text-[#D9D9D9] text-lg">
                <Link> My Returns</Link>
                </p>
                <p className="mb-4 text-[#D9D9D9]">
                <Link>My Cancellations</Link>
                </p>
                <h1 className="text-lg mt-4 mb-4 font-bold ">
                <Link>My WishList</Link>
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="text-2xl text-[#DB4444] text-left ml-0 mt-10 lg:mt-0 ">
              Edit Your Profile
            </h1>
           
            <div className="form-container max-w-full mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="form-row grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 mt-4">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label><br/>
                    <input
                      type="text"
                      id="firstname"
                      className="w-full lg:w-80 h-12 p-2 border border-gray-300 rounded bg-gray-200 mb-4 mr-4"
                      name="firstName"
                      value={formData.firstName}
                      placeholder="Md"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label><br/>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full lg:w-80 h-12 p-2 border border-gray-300 rounded bg-gray-200 mb-4 mr-4"
                      value={formData.lastName}
                      placeholder="Rimel"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label><br/>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full lg:w-80 h-12 p-2 border border-gray-300 rounded bg-gray-200 mb-4 mr-4"
                      value={formData.email}
                      placeholder="rimell111@gmail.com"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label><br/>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="w-full lg:w-80 h-12 p-2 border border-gray-300 rounded bg-gray-200 mb-4 mr-4"
                      value={formData.address}
                      placeholder="Kingston, 5236, United States"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="currentPassword">Password Changes</label><br/>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    className="w-full lg:w-80 h-12 p-2 border border-gray-300 rounded bg-gray-200 mb-4 mr-2"
                    value={formData.currentPassword}
                    placeholder="Current Password"
                    onChange={handleInputChange}
                  />

                  <label htmlFor="newPassword"></label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    className="w-full lg:w-80 h-12 p-2 border border-gray-300 rounded bg-gray-200 mb-4 mt-2"
                    value={formData.newPassword}
                    placeholder="New Password"
                    onChange={handleInputChange}
                  />

                  <label htmlFor="confirmNewPassword"></label>
                  <input
                    type="password"
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    className="w-full h-12 p-2 border border-gray-300 rounded bg-gray-200 mb-4 mt-2"
                    value={formData.confirmNewPassword}
                    placeholder="Confirm New Password"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                  <button
                    type="button"
                    className="bg-black text-white font-bold py-2 px-6 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-red-500 text-white font-bold py-2 px-6 rounded"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className=" bg-red-500 text-white font-bold py-2 px-6 rounded"
                    disabled={loading}
                    onClick={handleLogout}
                  >
                    {loading ? "Logging Out..." : "Log Out"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;

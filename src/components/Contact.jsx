import React from "react";
// import AboutHeader from "./AboutHeader.jsx";
import Header from "./Header";

import { NavLink as RouterNavLink } from "react-router-dom";
import { Container } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <Header />

    <Container className="my-4 px-8">
      <RouterNavLink to="/" className="text-gray-500 no-underline mr-2">
        Home
      </RouterNavLink>
      <span><b> / </b></span>
      <RouterNavLink
        to="/product-details"
        className="text-gray-500 no-underline mx-2"
      >
        Product Details
      </RouterNavLink>
      <span><b> / </b></span>
      <RouterNavLink to="/contact" className="text-black no-underline">
        Contact
      </RouterNavLink>
    </Container>

    <div className="flex flex-col items-center justify-center min-h-screen mt-2">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6  rounded-lg shadow-lg border border-gray-300">
        <div className="flex flex-col max-w-full md:w-1/2 p-4 rounded-lg shadow-lg bg-white">
          <div className="call">
            <div className="flex items-center mb-2">
              <div className="bg-red-600 p-2 rounded-full">
                <FaPhoneAlt className="text-white" />
              </div>
              <h3 className="text-lg font-semibold ml-2">Call To Us</h3>
            </div>
            <p className="text-black font-bold mb-2">We are available 24/7, 7 days a week.</p>
            <p className="text-black font-bold">Phone: +8801611112222</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="write">
            <div className="flex items-center mb-2">
              <div className="bg-red-600 p-2 rounded-full">
                <CiMail className="text-white" />
              </div>
              <h3 className="text-lg font-semibold ml-2 mb-2">Write To Us</h3>
            </div>
            <p className="text-black font-bold mb-2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-black font-bold">Email: customer@exclusive.com</p>
            <p className="text-black font-bold">Email: support@exclusive.com</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 max-w-md">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded-lg border border-gray-300 shadow-lg space-y-4"
          >
            <div>
              <label className="text-base font-medium">Your Name</label>
              <input
                type="text"
                className="w-full h-12 border border-gray-300 rounded-md p-3 mt-1"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="text-base font-medium">Your Email</label>
              <input
                type="email"
                className="w-full h-12 border border-gray-300 rounded-md p-3 mt-1"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="text-base font-medium">Your Phone Number</label>
              <input
                type="tel"
                className="w-full h-12 border border-gray-300 rounded-md p-3 mt-1"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="text-base font-medium">Your Message</label>
              <textarea
                className="w-full h-32 border border-gray-300 rounded-md p-3 mt-1"
                placeholder="Enter your message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-52 h-14 bg-red-600 text-white rounded-md mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
  );
}

export default Contact;

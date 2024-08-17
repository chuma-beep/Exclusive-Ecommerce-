import { CartContext } from '../context/cart-context';
import { payment } from "../data/payment.json";
import  { useState, useContext } from "react";
import { Container, Typography } from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";

import Footer from "./Footer";
import Header from './Header';

function Checkout() {
  const {cartItems,getCartTotal, clearCart} = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    street: "",
    apartment: "",
    town: "",
    number: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("Payment Method:", paymentMethod);
  };

  return (
    <>
    <Header />
  
    <Container className="mt-5">
      <div>
        <RouterNavLink to="/" className="text-gray-500 no-underline mr-2">
          Home
        </RouterNavLink>
        <span>
          <b> / </b>
        </span>
        <RouterNavLink to="/my-account" className="text-gray-500 no-underline">
          Account
        </RouterNavLink>
        <span>
          <b> / </b>
        </span>
        <RouterNavLink to="/my-account" className="text-gray-500 no-underline">
          Product
        </RouterNavLink>
        <span>
          <b> / </b>
        </span>
        <RouterNavLink to="/" className="text-gray-500 no-underline mr-2">
          View Cart
        </RouterNavLink>
        <span>
          <b> / </b>
        </span>
        <RouterNavLink to="/my-account" className="text-black no-underline">
          Checkout
        </RouterNavLink>
      </div>
    </Container>
  
    <Container className="flex flex-wrap gap-2">
      <div className="flex flex-col lg:flex-row gap-8 mt-8 lg:mt-16 w-full">
        <div className="w-full lg:w-1/2 mt-12 p-4">
          <h1 className="text-2xl mb-4 font-bold">Billing Details</h1>
  
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-row grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 mt-4">
              <div>
                <label htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="text"
                  id="firstname"
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  name="firstName"
                  value={formData.firstName}
                  required
                  onChange={handleInputChange}
                />
              </div>
  
              <div>
                <label htmlFor="company">Company Name</label>
                <br />
                <input
                  type="text"
                  id="company"
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
  
              <div>
                <label htmlFor="street">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="text"
                  id="street"
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  name="street"
                  value={formData.street}
                  required
                  onChange={handleInputChange}
                />
              </div>
  
              <div>
                <label htmlFor="apartment">
                  Apartment, floor, etc (optional)
                </label>
                <br />
                <input
                  type="text"
                  id="apartment"
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                />
              </div>
  
              <div>
                <label htmlFor="town">
                  Town/city <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="text"
                  id="town"
                  name="town"
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  value={formData.town}
                  required
                  onChange={handleInputChange}
                />
              </div>
  
              <div>
                <label htmlFor="number">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  value={formData.number}
                  required
                  onChange={handleInputChange}
                />
              </div>
  
              <div>
                <label htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  value={formData.email}
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
  
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="checkbox" className="text-sm">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>
  
        <div className="w-full lg:w-1/2 flex flex-col p-4 mt-10">
          <div className="mb-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between py-2 border-b border-gray-300"
              >
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <div className="flex justify-between py-2">
              <span>Subtotal:</span>
              <span>${getCartTotal()}</span>
            </div>
            <hr />
            <div className="flex justify-between py-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="flex justify-between py-2">
              <span>Total:</span>
              <span>${getCartTotal()}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <input
              type="radio"
              name="payment-method"
              id="bank"
              checked={paymentMethod === "bank"}
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="bank" className="font-bold text-lg">
              Bank
            </label>
            <div className="flex gap-2">
              {payment.map((product) => (
                <div key={product.id}>
                  <img
                    src={product.img}
                    alt={product.alt}
                    className="w-8 h-8"
                  />
                </div>
              ))}
            </div>
          </div>
  
          <div className="flex items-center gap-2 mb-4">
            <input
              type="radio"
              name="payment-method"
              id="paypal"
              checked={paymentMethod === "paypal"}
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="paypal" className="font-bold text-lg">
              Cash on Delivery
            </label>
          </div>
  
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-grow p-2 border border-gray-300 rounded"
            />
            <button className="px-4 py-2 bg-red-500 text-white rounded">
              Apply Coupon
            </button>
          </div>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded w-full"
            onClick={clearCart}
          >
            Place Order
          </button>
        </div>
      </div>
    </Container>
    <Footer />
  </>
  
  );
}

export default Checkout;



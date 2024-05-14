import { checkoutData1, checkoutData2 } from "../data/checkoutData.json";
import { payment } from "../data/payment.json";
import React, { useState } from "react";
import CheckoutHeader from "./CheckoutHeader";
import { Container, Typography } from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";
import "../components-css/account-checkout.css";
import Footer from "./Footer";

function Checkout() {
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
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  return (
    <>
      <CheckoutHeader />

      <Container style={{ marginTop: "20px" }} className="upper-links">
        <RouterNavLink
          to="account"
          style={{
            color: "gray",
            textDecoration: "none",
            marginRight: "0.5rem",
          }}
        >
          Account
        </RouterNavLink>
        <span>/</span>
        <RouterNavLink
          to="/my-account"
          style={{
            color: "gray",
            textDecoration: "none",
            marginRight: "0.5rem",
          }}
        >
          My Account
        </RouterNavLink>
        <span>/</span>
        <RouterNavLink
          to="/product"
          style={{
            color: "gray",
            textDecoration: "none",
            marginRight: "0.5rem",
          }}
        >
          Product
        </RouterNavLink>
        <span>/</span>
        <RouterNavLink
          to="/cart"
          style={{
            color: "gray",
            textDecoration: "none",
            marginRight: "0.5rem",
          }}
        >
          View Cart
        </RouterNavLink>
        <span>/</span>
        <RouterNavLink
          to="/checkout"
          style={{
            color: "black",
            textDecoration: "none",
            marginRight: "0.5rem",
          }}
        >
          Checkout
        </RouterNavLink>
      </Container>

      <Container
        className="checkout-container"
        style={{ display: "flex", gap: "2px" }}
      >
        <div
          className="billing"
          style={{
            width: "470px",
            height: "814px",
            marginTop: "50px",
            marginLeft: "5px",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "32px", mb: "1rem", fontWeight: "bold" }}
          >
            Billing Details
          </Typography>

          <form onSubmit={handleSubmit}>
            <div className="form-rows">
              <div className="form-groups">
                <label htmlFor="firstName">First Name</label>
                <span style={{ color: "red" }}>*</span>
                <br></br>
                <input
                  type="text"
                  id="firstName"
                  className="my-input"
                  name="firstName"
                  value={formData.firstName}
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label htmlFor="company">Company Name</label>
                <br></br>

                <input
                  type="text"
                  id="company"
                  className="my-input"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label htmlFor="street">Street Address</label>
                <span style={{ color: "red" }}>*</span>
                <br></br>
                <input
                  type="text"
                  id="street"
                  className="my-input"
                  name="street"
                  value={formData.street}
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label htmlFor="apartment">
                  Apartment, floor, etc (optional)
                </label>
                <br></br>

                <input
                  type="text"
                  id="apartment"
                  className="my-input"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-groups">
                <label htmlFor="town">Town/city</label>
                <span style={{ color: "red" }}>*</span>
                <br></br>
                <input
                  type="text"
                  id="town"
                  name="town"
                  className="my-input"
                  value={formData.town}
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-groups">
                <label htmlFor="number">Phone Number</label>
                <span style={{ color: "red" }}>*</span>
                <br></br>
                <input
                  type="number"
                  id="number"
                  name="number"
                  className="my-number-input"
                  value={formData.number}
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label htmlFor="text">Email Address</label>
                <span style={{ color: "red" }}>*</span>
                <br></br>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="my-email-input"
                  value={formData.email}
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="checkbox"> </label>
              <input
                type="checkbox"
                id="checkbox "
                name="checkbox"
                checked={isChecked} // Set checked attribute to true
                onChange={handleCheckboxChange}
                className="checkbox-container"
              ></input>
              <span>
                <p className="save">
                  {" "}
                  Save this information for faster check-out next time
                </p>
              </span>
            </div>
          </form>
        </div>

        <div className="checkout-container flex flex-col ">
          {checkoutData1.map((product) => (
            <div
              className="cashout"
              key={product.id}
              style={{ width: "527px", marginTop: "50px" }}
            >
              <div className="items" style={{ width: "425px" }}>
                <div
                  className="item"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <img src={product.img} alt={product.alt} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10rem",
                    }}
                  >
                    <p>
                      <b>{product.name}</b>
                    </p>
                    <p>
                      <b>${product.price}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {checkoutData2.map((product) => (
            <div
              className="cashout"
              key={product.id}
              style={{ width: "527px", marginTop: "50px" }}
            >
              <div className="items" style={{ width: "425px" }}>
                <div
                  className="item"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <img src={product.img} alt={product.alt} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10rem",
                    }}
                  >
                    <p>
                      <b>{product.name}</b>
                    </p>
                    <p>
                      <b>${product.price}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

<div
          className="total"
          style={{
            width: "422px",
            height: "136px",
            marginTop: "30px",
          }}
        >
          <div
            className="sub"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>
              <b>Subtotal:</b>
            </p>
            <p>
              <b>$1750</b>
            </p>
          </div>
          <hr></hr>
          <div
            className="sub"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>
              <b>Shipping:</b>
            </p>
            <p>
              <b>Free</b>
            </p>
          </div>
          <hr></hr>

          <div
            className="sub"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>
              <b>Total:</b>
            </p>
            <p>
              <b>$1750</b>
            </p>
          </div>
        </div>

        <div className="payment-method-item" style={{display: 'flex', gap: '0.6rem', width: '427px', height: '28px',}}>
<input type="radio" name="payment-method" id="bank" />
<label htmlFor="bank" style={{ color: "black", fontWeight: "bold", fontSize: "16px", }}>
Bank
</label>


<div className="payment-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between'}}>
        {payment.map((product) => (
          <div key={product.id}>
            <img src={product.img} alt={product.alt} />
          </div>
        ))}
      </div>
      </div>
      <div className="payment-method-item2" style={{display: 'flex', gap: '1.5rem', marginTop: '20px'}}>
    <input type="radio" name="payment-method" id="paypal"  checked={isChecked} 
      onChange={handleCheckboxChange}/>
    <label
      htmlFor="paypal"
     
      style={{
        color: "black",
        fontWeight: "bold",
        fontSize: "16px",
        
      }}
    >
      Cash on Delivery
    </label>
  </div>

  <div>
  <input
type="text"
name="coupon"
id="coupon"
placeholder="Coupon code"
style={{ width: "300px", height: "56px", marginTop: '20px' ,borderRadius: '5px', padding: '5px' }}
/>
<button className="apply-btn" style={{width: '211px', height: '56px', backgroundColor: '#DB4444', color: 'white', marginLeft: '20px',borderRadius: '5px'}}>Apply Coupon</button>
  </div>
  <button className="place-btn" style={{width: '190px', height: '56px', backgroundColor: '#DB4444', color: 'white', marginTop: '25px', borderRadius: '5px'}}>Place Order</button>
</div>
       

       
      </Container>
      <Footer />
    </>
  );
}

export default Checkout;

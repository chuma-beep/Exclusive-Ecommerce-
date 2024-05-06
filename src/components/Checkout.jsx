import React, { useState } from "react";
import CheckoutHeader from "./CheckoutHeader";
import { Container, Typography } from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";
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
    setIsChecked(!isChecked); // Toggle checkbox state when clicked
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, such as sending data to a server
    console.log(formData);
  };
  return (
    <>
      <CheckoutHeader />

      <Container
        style={{ marginTop: "50px", marginLeft: "87px", display: "flex" }}
        className="upper-links"
      >
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
          CheckOut
        </RouterNavLink>
      </Container>

      <Container style={{ display: "flex",}}>
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
                <Typography
                  variant="body"
                  style={{ fontSize: "15px", marginLeft: "1rem" }}
                >
                  Save this information for faster check-out next time
                </Typography>
              </span>
            </div>
          </form>
        </div>

        <div
          style={{
            width: "527px",
            height: "800px",
          
            marginTop: "120px",
          }}
        >
          <div
            className="items"
            style={{ width: "425px", height: "140px",  }}
          >
            <div
              className="item1"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img src="src/assets/Gamepad.png"></img>
              <p>
                <b>LCD Monitor</b>
              </p>
              <p>
                <b>$650</b>
              </p>
            </div>
            <div
              className="item1"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img src="src/assets/Monitor.png"></img>
              <p>
                <b>H1 Gamepad</b>
              </p>
              <p>
                <b>$1100</b>
              </p>
            </div>
          </div>
          <div
            className="total"
            style={{
              width: "422px",
              height: "136px",
              marginTop: "20px",
            }}
          >
            <div
              className="sub"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <p>
                <b>Subtotal:</b>
              </p>
              <p>
                <b>$1750</b>
              </p>
            </div>
            <hr style={{ color: "red" }} />
            <div
              className="shipping"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
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
                marginTop: "10px",
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
        
        
  <div className="payment-method-item" style={{display: 'flex', gap: '1.5rem'}}>
    <input type="radio" name="payment-method" id="bank" />
    <label htmlFor="bank" style={{ color: "black", fontWeight: "bold", fontSize: "16px", }}>
      Bank
      </label>
    
     <img src="src/assets/Bkash.png" alt="Bkash" />
        <img src="src/assets/Visa.png" alt="Visa"  />
        <img src="src/assets/Mastercard.png" alt="Mastercard"  />
        <img src="src/assets/Nagad.png" alt="Nagad" />
  </div>

              <div className="payment-method-item2" style={{display: 'flex', gap: '1.5rem'}}>
                <input type="radio" name="payment-method" id="paypal"  checked={isChecked} 
                  onChange={handleCheckboxChange}/>
                <label
                  htmlFor="paypal"
                 
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginTop: '20px'
                  }}
                >
                  Cash on Delivery
                </label>
              </div>
           
    

          <input
            type="text"
            name="coupon"
            id="coupon"
            placeholder="Coupon code"
            style={{ width: "300px", height: "56px", margin: "0 auto", borderRadius: '5px'}}
          />
          <button style={{width: '211px', height: '56px', backgroundColor: '#DB4444', color: 'white', marginLeft: '10px', borderRadius: '5px'}}>Apply Coupon</button>
          <button style={{width: '190px', height: '56px', backgroundColor: '#DB4444', color: 'white', marginTop: '25px', borderRadius: '5px'}}>Place Order</button>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Checkout;

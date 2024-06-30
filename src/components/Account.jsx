import  {useState} from "react";
import { Container, Typography,  } from "@mui/material";
import "../components-css/account-checkout.css"
import {NavLink as RouterNavLink, Link } from "react-router-dom";
// import AccountHeader from "./AccountHeader";
import Header from "./Header";
import Footer from "./Footer";
import { useAuthContext } from "../context/authContext";



function Account(){
  const {session, handleLogout, loading, updateProfile} = useAuthContext();
    const [formData, setFormData] = useState({
        firstName: session?.user?.user_metadata?.first_name || "",
        lastName: "",
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
          [name]: value
        });
      };

  const handleSubmit = async (e) => {
    e.preventDefault();
     if(!formData.firstName.trim()){
      alert("First name is required")
      return;
     }
     await updateProfile(formData)
  };

    return (
        <>
          {/* <AccountHeader /> */}
          <Header />
    
          <Container>


            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

          
           <div className="">
           <RouterNavLink
              to="/"
              style={{
                color: "gray",
                textDecoration: "none",
                marginRight: "0.5rem",
              }}
            >
              Home
            </RouterNavLink>
            <span>
              <b> / </b>
            </span>
            <RouterNavLink
              to="/my-account"
              style={{ color: "black", textDecoration: "none" }}
            >
               My Account
            </RouterNavLink>
           </div>

            <div style={{}}>
  <p>Welcome! <span style={{ color: '#DB4444',  border: 'none', fontSize: '14px', }}>{formData.firstName}</span></p>
</div>
</div>
         
          <div className="form-box" style={{display: 'flex'}}>

          
          <div style={{width: '300px', height: '300px',  marginTop: '70px', marginLeft: '110px'}}>
          <Typography variant="h1" sx={{ fontSize: "16px", mb: "1rem", fontWeight: 'bold' }}> <Link>Manage My Account</Link>
            </Typography>
            <div className="profile" style={{width: '165px', height: '88px',  marginLeft: '30px'}}>
            <Typography variant="body1" sx={{ color: '#DB4444' }}> <Link>My Profile</Link>
            </Typography>
            <Typography variant="body2" sx={{ color: '#D9D9D9', fontSize: '16px', }}> <Link>My Address Book</Link>
            </Typography>
            <Typography variant="body3" sx={{ mb: "1rem", color: '#D9D9D9' }}> <Link> My Payment Options</Link>
            </Typography>
            <Typography variant="h1" sx={{ fontSize: "16px", mt: "1rem", mb: '1rem', fontWeight: 'bold',  marginLeft: '-30px' }}> <Link>My Orders</Link>
            </Typography>
            <div className="order" style={{width: '165px', height: '88px',  marginLeft: '30px'}}>
            <Typography variant="body2" sx={{ color: '#D9D9D9', fontSize: '16px', }}> <Link> My Returns</Link>
            </Typography>
            <Typography variant="body3" sx={{ mb: "1rem", color: '#D9D9D9' }}> <Link>My Cancellations</Link>
            </Typography>
            <Typography variant="h1" sx={{ fontSize: "16px", mt: "1rem", mb: '1rem', fontWeight: 'bold', marginLeft: '-60px'}}> <Link>My WishList</Link>
            </Typography>
            </div>
            </div>
            </div>
            <div >
                <Typography variant="h1" sx={{fontSize: '20px', color: '#DB4444', textAlign: 'left', marginLeft: '130px', marginTop: '30px'}}>
                    Edit Your Profile
                </Typography>
                <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="my-input"
              name="firstName"
              value={formData.firstName}
              placeholder="Md"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="my-input"
              value={formData.lastName}
              placeholder="Rimel"
              onChange={handleInputChange}
            />
          </div>
       

        
          <div className="form-group">
            <label htmlFor="firstName">Email</label>
            <input
              type="email"
              id="email"
              name="email"
             
              value={formData.email}
              placeholder="rimel1111@gmail.com"
              onChange={handleInputChange}
              className="my-email-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="my-input"
              value={formData.address}
              placeholder="Kingston, 5236, United States"
              onChange={handleInputChange}
            />
          </div>
        </div>
       

       
        <div>
          <label htmlFor="currentPassword">Password Changes</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={formData.currentPassword}
            placeholder="Current Password"
            onChange={handleInputChange}
          />

<label htmlFor="newPassword"></label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            placeholder="New Password"
            onChange={handleInputChange}
          />

<label htmlFor="confirmNewPassword"></label>
          <input
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            placeholder="Confirm New Password"
            onChange={handleInputChange}
            
          />
        </div>
        
        <div style={{ position: 'relative', top: '10px', left: '100px' }}>
        <button type="button" className="cancel-btn">Cancel</button>
        <button type="submit" className="save-btn">Save Changes</button> 
        <button type="button" className="logout-btn" disabled={loading}onClick={handleLogout}> {loading ? "Logging Out..." : "Log Out"}</button>
        </div>
      </form>
    </div>

          
            </div>
            </div>
            </Container>
           <Footer />
          </>
          )
}

export default Account;
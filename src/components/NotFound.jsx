import React from 'react';
import  AboutHeader from "./AboutHeader.jsx";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container } from "@mui/material";
import "../components-css/notfound.css"

function NotFound(){
return(
    <>
    <AboutHeader />

    
    <Container style={{margin: '5rem' }}>
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
          to="/*"
          style={{ color: "black", textDecoration: "none" }}
        >
          404 Error
        </RouterNavLink>
      </Container>

      <div className="error-container">
        <h1 style={{fontWeight: '900', fontSize: '70px'}}>Error 404</h1>
        <h2 style={{fontSize: '15px'}}>Page Not Found</h2>
        <p style={{fontSize: '20px', fontWeight: '500', margin: '2rem'}}>The page you are looking for does not exist.</p>
        <RouterNavLink to="/" style ={{ color: " white", backgroundColor: '#DB4444', padding: '10px', borderRadius: '10px' }}>
          <b>Go Back Home</b>
        </RouterNavLink>
      </div>
    </>
)
}

export default NotFound;
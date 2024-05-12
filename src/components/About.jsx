import { Container, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";
import { NavLink as RouterNavLink } from "react-router-dom";
import AboutHeader from "./AboutHeader";
import Footer from "./Footer";

const TeamMemberContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
}));

function About() {
  return (
    <>
      <AboutHeader />

      <Container style={{ marginTop: "50px", marginLeft: "87px" }}>
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
          to="/about"
          style={{ color: "black", textDecoration: "none" }}
        >
          About
        </RouterNavLink>
      </Container>
      {/* Main Content */}
      <Container style={{ marginTop: "50px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h1" sx={{ fontSize: "2.5rem", mb: "1rem" }}>
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ mb: "1rem" }}>
              Launched in 2015, Exclusive is South Asia's premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </Typography>
            <Typography variant="body1">
              Exclusive has more than 1 million products to offer, growing at a
              very fast rate. Exclusive offers a diverse assortment in
              categories ranging from customer.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/assets/two-ladies.png"
              alt=""
              style={{ width: "100%", maxWidth: "600px", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>

      <Container style={{ marginTop: "50px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <div
              style={{
                width: "100%",
                height: "230px",
                border: "1px solid #D3D3D3",
                borderRadius: "10px",
              }}
            >
              <ServiceCard
                icon="/assets/sellers.png"
                number="10.5K"
                description="Sellers active on our site"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div
              style={{
                width: "100%",
                height: "230px",
                border: "1px solid #D3D3D3",
                backgroundColor: "#DB4444",
                borderRadius: "10px",
              }}
            >
              <ServiceCard
                icon="/assets/monthly-sale.png"
                number="33K"
                description="Monthly Product sales"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div
              style={{
                width: "100%",
                height: "230px",

                border: "1px solid #D3D3D3",
                borderRadius: "10px",
              }}
            >
              <ServiceCard
                icon="/assets/Customers.png"
                number="33K"
                description="Customers active on our site"
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={3}>
            <div
              style={{
                width: "100%",
                height: "230px",
                border: "1px solid #D3D3D3",
                borderRadius: "10px",
              }}
            >
              <ServiceCard
                icon="/assets/Annual.png"
                number="25K"
                description="Annual gross sales on our site"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* Team members */}
      <Container
        className="team-container"
        style={{ marginTop: "20px", display: "flex" }}
      >
        <Grid
          container
          spacing={4}
          style={{ flexDirection: "row", flexWrap: "wrap" }}
        >
          <TeamMemberContainer item xs={12} sm={6} md={4} lg={3}>
            <div style={{ textAlign: "center" }}>
              <img src="/assets/tomcruise.png" alt="Tom Cruise" />
              <div style={{ marginTop: "20px" }}>
                <Typography
                  variant="h2"
                  sx={{ fontSize: "2rem", fontWeight: "bold", mb: "10px" }}
                >
                  Tom Cruise
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                  Founder and Chairman
                </Typography>
                <Button
                  style={{
                    display: "flex",
                    gap: "1rem",
                    mt: "20px",
                    marginLeft: "50px",
                  }}
                >
                  <img
                    src="/assets/icon-Twitter.png"
                    style={{ width: "24px", height: "24px" }}
                    alt="Twitter"
                  />
                  <img
                    src="/assets/icon-instagram.png"
                    style={{ width: "24px", height: "24px" }}
                    alt="Instagram"
                  />
                  <img
                    src="/assets/icon-Linkedin.png"
                    style={{ width: "24px", height: "24px" }}
                    alt="Linkedin"
                  />
                </Button>
              </div>
            </div>
          </TeamMemberContainer>
          <TeamMemberContainer item xs={12} sm={6} md={4} lg={3}>
            <div style={{ textAlign: "center" }}>
              <img src="/assets/emmawatson.png" alt="Emma watson" />
              <div style={{ marginTop: "20px" }}>
                <Typography
                  variant="h2"
                  sx={{ fontSize: "2rem", fontWeight: "bold", mb: "10px" }}
                >
                  Emma Watson
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                  Managing Director
                </Typography>
                <Button
                  style={{
                    display: "flex",
                    gap: "1rem",
                    mt: "20px",
                    marginLeft: "50px",
                  }}
                >
                  <img
                    src="/assets/icon-Twitter.png"
                    style={{ width: "24px", height: "24px" }}
                    alt="Twitter"
                  />
                  <img
                    src="/assets/icon-instagram.png"
                    style={{ width: "24px", height: "24px" }}
                    alt="Instagram"
                  />
                  <img
                    src="/assets/icon-Linkedin.png"
                    style={{ width: "24px", height: "24px" }}
                    alt="Linkedin"
                  />
                </Button>
              </div>
            </div>
          </TeamMemberContainer>

          <TeamMemberContainer item xs={12} sm={6} md={4} lg={3}>
            <div style={{ textAlign: "center" }}>
              <img src="/assets/willsmith.png" alt="will smith" />
              <div style={{ marginTop: "20px" }}>
                <Typography
                  variant="h2"
                  sx={{ fontSize: "2rem", fontWeight: "bold", mb: "10px" }}
                >
                  Will Smith
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                  Product Designer
                </Typography>
                <Button
                  style={{
                    display: "flex",
                    gap: "1rem",
                    mt: "20px",
                    marginLeft: "50px",
                  }}
                >
                  <img
                    src="/assets/icon-Twitter.png"
                    style={{ width: "24px", height: "24px" }}
                    alt="Twitter"
                  />
                  <img
                    src="/assets/icon-instagram.png"
                    style={{ width: "24px", height: "24px" }}
                    alt="Instagram"
                  />
                  <img
                    src="/assets/icon-Linkedin.png"
                    style={{ width: "24px", height: "24px" }}
                    alt="Linkedin"
                  />
                </Button>
              </div>
            </div>
          </TeamMemberContainer>
        </Grid>
      </Container>
      <div className="pagination">
        <img style={{ margin: "0 auto" }} src="/assets/pagination.png" />
      </div>
      {/* Full Services */}
      <Container
        style={{ marginTop: "50px", marginBottom: "50px", marginRight: "10px" }}
      >
        <Grid container spacing={4}>
          <FullServiceCard
            icon="/assets/fast.png"
            title="FREE AND FAST DELIVERY"
            description="Free delivery for all orders over $140"
          />

          <FullServiceCard
            icon="/assets/support.png"
            title="24/7 CUSTOMER SERVICE"
            description="Friendly 24/7 customer support"
          />
          <FullServiceCard
            icon="/assets/money-back.png"
            title="MONEY BACK GUARANTEE"
            description="We return your money within 30 days"
          />
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

const ServiceCard = ({ icon, number, description }) => (
  <div
    style={{
      padding: "20px",
      borderRadius: "5px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <img
      src={icon}
      alt=""
      style={{ width: "80px", height: "80px", marginBottom: "15px" }}
    />
    <Typography
      variant="h2"
      sx={{
        fontSize: "2rem",
        fontWeight: "bold",
        mb: "10px",
        textAlign: "center",
      }}
    >
      {number}
    </Typography>
    <Typography variant="body1" sx={{ fontSize: "1rem", textAlign: "center" }}>
      {description}
    </Typography>
  </div>
);

const FullServiceCard = ({ icon, title, description }) => (
  <Grid item xs={12} sm={4}>
    <div
      style={{
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <img
        src={icon}
        alt=""
        style={{
          width: "80px",
          height: "80px",
          marginBottom: "25px",
          marginLeft: "100px",
        }}
      />
      <Typography
        variant="h2"
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          mb: "10px",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "14px", textAlign: "center" }}
      >
        {description}
      </Typography>
    </div>
  </Grid>
);

export default About;

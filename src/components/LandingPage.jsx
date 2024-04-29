import Header from "./Header";
import { NavLink } from "react-router-dom";
import HeroCarousel from "./HeroCarousel";
import heroCarouselData from "../data/heroCarouselData.json"
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <section>
          <nav>
            <ul>
              <li>
                <NavLink to="/women-fashion">Woman&#39;s Fashion</NavLink>
              </li>
              <li>
                <NavLink to="/men-fashion">Men&#39;s Fashion</NavLink>
              </li>
              <li><NavLink to="/electronics">Electronics</NavLink></li>
              <li><NavLink to="/home&lifestyle">Home & Lifestyle</NavLink></li>
              <li><NavLink to="medicine">Medicine</NavLink></li>
              <li><NavLink to="sports&outdoors">Sports & Outdoor</NavLink></li>
              <li><NavLink to="/babys&toys">Baby&#39;s & Toys</NavLink></li>
              <li><NavLink to="/groceries&pets">Groceries & Pets</NavLink></li>
              <li><NavLink to="health&beauty">Health & Beauty</NavLink></li>
            </ul>
          </nav>
          <HeroCarousel data={heroCarouselData}/>
      </section>
      <Footer />
    </>
  );
}

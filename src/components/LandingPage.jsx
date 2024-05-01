import Header from "./Header";
import { NavLink } from "react-router-dom";
import HeroCarousel from "./HeroCarousel";
import heroCarouselData from "../data/heroCarouselData.json";
import Footer from "./Footer";
import { MdNavigateNext } from "react-icons/md";
import FlashSales from "./FlashSales";

export default function LandingPage() {
  return (
    <>
      <Header />
      <section className="flex px-28 mb-6 gap-[7rem] w-full justify-between">
        <nav className="flex flex-col gap-3 text-sm w-[11rem] pr-2 pt-10 border-r-[1px] border-secondary h-max">
          <NavLink className="flex items-center pr-2 justify-between transition-all hover:text-action hover:underline" to="/women-fashion">
            Woman&#39;s Fashion <MdNavigateNext />
          </NavLink>
          <NavLink className="flex items-center pr-2 justify-between transition-all hover:text-action hover:underline" to="/men-fashion">
            Men&#39;s Fashion <MdNavigateNext />
          </NavLink>
          <NavLink className="transition-all hover:text-action hover:underline" to="/electronics">Electronics</NavLink>
          <NavLink className="transition-all hover:text-action hover:underline" to="/home&lifestyle">Home & Lifestyle</NavLink>
          <NavLink className="transition-all hover:text-action hover:underline" to="medicine">Medicine</NavLink>
          <NavLink className="transition-all hover:text-action hover:underline" to="sports&outdoors">Sports & Outdoor</NavLink>
          <NavLink className="transition-all hover:text-action hover:underline" to="/babys&toys">Baby&#39;s & Toys</NavLink>
          <NavLink className="transition-all hover:text-action hover:underline" to="/groceries&pets">Groceries & Pets</NavLink>
          <NavLink className="transition-all hover:text-action hover:underline" to="health&beauty">Health & Beauty</NavLink>
        </nav>
        <HeroCarousel data={heroCarouselData} />
      </section>
      <FlashSales />
      <Footer />
    </>
  );
}

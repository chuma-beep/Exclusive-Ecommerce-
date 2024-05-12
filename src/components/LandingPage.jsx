import Header from "./Header";
import { NavLink } from "react-router-dom";
import HeroCarousel from "./HeroCarousel";
import heroCarouselData from "../data/heroCarouselData.json";
import Footer from "./Footer";
import { MdNavigateNext } from "react-icons/md";
import FlashSales from "./FlashSales";
import Categories from "./Categories";
import BestSellingProducts from "./BestSellingProducts";
import ExploreOurProducts from "./ExploreOurProducts";
import NewArrivals from "./NewArrivals";
import OurServices from "./OurServices";

export default function LandingPage() {
  return (
    <>
      <Header />
      <section className="flex px-28 mb-6 gap-[7rem] w-full justify-between">
        <nav className="flex flex-col gap-3 text-sm w-[11rem] pr-2 pt-10 border-r-[1px] border-secondary h-max">
          <NavLink
            className="flex items-center pr-2 justify-between transition-all hover:text-action hover:underline"
            to="/"
          >
            Woman&#39;s Fashion <MdNavigateNext />
          </NavLink>
          <NavLink
            className="flex items-center pr-2 justify-between transition-all hover:text-action hover:underline"
            to="/"
          >
            Men&#39;s Fashion <MdNavigateNext />
          </NavLink>
          <NavLink
            className="transition-all hover:text-action hover:underline"
            to="/"
          >
            Electronics
          </NavLink>
          <NavLink
            className="transition-all hover:text-action hover:underline"
            to="/"
          >
            Home & Lifestyle
          </NavLink>
          <NavLink
            className="transition-all hover:text-action hover:underline"
            to="/"
          >
            Medicine
          </NavLink>
          <NavLink
            className="transition-all hover:text-action hover:underline"
            to="/"
          >
            Sports & Outdoor
          </NavLink>
          <NavLink
            className="transition-all hover:text-action hover:underline"
            to="/"
          >
            Baby&#39;s & Toys
          </NavLink>
          <NavLink
            className="transition-all hover:text-action hover:underline"
            to="/"
          >
            Groceries & Pets
          </NavLink>
          <NavLink
            className="transition-all hover:text-action hover:underline"
            to="/"
          >
            Health & Beauty
          </NavLink>
        </nav>
        <HeroCarousel data={heroCarouselData} />
      </section>
      <FlashSales />
      <Categories />
      <BestSellingProducts />
      <section className="block w-full px-28 my-8">
        <div className="flex gap-[7rem] w-full justify-between bg-black text-primary p-8 items-start">
          <div className="w-1/2 max-md:w-full flex flex-col gap-8">
            <h2 className="text-[1.2rem] text-green-cus">Categories</h2>
            <h3 className="text-[3rem] font-bold">
              Enhance Your Music Experience
            </h3>
            <div className="flex gap-6">
              <div className="flex flex-col gap-0 text-[0.6rem] font-bold p-1 text-secondary rounded-full bg-secondary w-[3.7rem] h-[3.7rem] items-center justify-center">
                <span>23</span>
                <span>Hours</span>
              </div>
              <div className="flex flex-col gap-0 text-[0.6rem] font-bold p-1 text-secondary rounded-full bg-secondary w-[3.7rem] h-[3.7rem] items-center justify-center">
                <span>05</span>
                <span>Days</span>
              </div>
              <div className="flex flex-col gap-0 text-[0.6rem] font-bold p-1 text-secondary rounded-full bg-secondary w-[3.7rem] h-[3.7rem] items-center justify-center">
                <span>49</span>
                <span>Minutes</span>
              </div>
              <div className="flex flex-col gap-0 text-[0.6rem] font-bold p-1 text-secondary rounded-full bg-secondary w-[3.7rem] h-[3.7rem] items-center justify-center">
                <span>44</span>
                <span>Seconds</span>
              </div>
            </div>
            <button className="w-[10rem] rounded-lg font-bold text-lg p-3 hover:translate-x-2 hover:-translate-y-1 transition-all bg-green-cus">
              Buy Now!
            </button>
          </div>
          <div className="w-1/2 max-md:w-full">
            <img
              className="w-full h-full"
              src="/buy-now-img/music-box.png"
              alt="music box"
            />
          </div>
        </div>
      </section>
      <ExploreOurProducts />
      <NewArrivals />
      <OurServices />
      <Footer />
    </>
  );
}

import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineSearch,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";

export default function Header() {
  return (
    <header className="flex w-full h-[6rem] px-28 gap-[7rem] items-center border-b-2 border-b-secondary">
      <Link className="text-[2rem] font-bold" to="/">Exclusive</Link>
      <div className="flex w-full h-full items-center justify-between">
        <nav className="flex gap-6">
          <NavLink className="px-2 py-1 hover:underline font-medium" to="/">Home</NavLink>
          <NavLink className="px-2 py-1 hover:underline font-medium" to="/contact">Contact</NavLink>
          <NavLink className="px-2 py-1 hover:underline font-medium" to="/about">About</NavLink>
          <NavLink className="px-2 py-1 hover:underline font-medium" to="/signup">Sign Up</NavLink>
        </nav>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center relative">
            <input className="rounded bg-secondary pl-2 pr-10 py-1 text-[0.8rem] w-[13rem] border-2 transition-all border-secondary hover:border-active outline-active" placeholder="What are you looking for?" />
            <HiOutlineSearch className="absolute right-2" />
          </div>
          <div className="flex gap-8 items-center">
            <Link className="flex items-center justify-center w-[2rem] h-[2rem] rounded-2xl hover:bg-secondary" to="/Wishlist">
              <HiOutlineHeart className="w-full h-full p-1"/>
            </Link>
            <Link className="flex items-center justify-center w-[2rem] h-[2rem] rounded-2xl hover:bg-secondary" to="/cart">
              <HiOutlineShoppingCart className="w-full h-full p-1" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

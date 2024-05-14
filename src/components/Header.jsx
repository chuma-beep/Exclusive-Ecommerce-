import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineSearch,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { useRef, useState, useEffect } from "react";
import { allProductsStore } from "../data/allProductsStore.json";

export default function Header() {
  const inputValueRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedProduct, setSearedProduct] = useState([]);

  const handleSearch = () => {
    const inputValue = inputValueRef.current.value;
    setSearchQuery(inputValue);
  };

  useEffect(() => {
    const filterSearchedProduct = allProductsStore.filter((product) => {
      const nameMatch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return nameMatch;
    });

    setSearedProduct(filterSearchedProduct);
  }, [searchQuery]);

  return (
    <header className="flex w-full h-[6rem] px-28 gap-[7rem] items-center border-b-2 border-b-secondary relative">
      <Link className="text-[2rem] font-bold" to="/">
        Exclusive
      </Link>
      <div className="flex w-full h-full items-center justify-between">
        <nav className="flex gap-6">
          <NavLink className="px-2 py-1 hover:underline font-medium" to="/">
            Home
          </NavLink>
          <NavLink
            className="px-2 py-1 hover:underline font-medium"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className="px-2 py-1 hover:underline font-medium"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="px-2 py-1 hover:underline font-medium"
            to="/signup"
          >
            Sign Up
          </NavLink>
        </nav>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center relative">
            <input
              ref={inputValueRef}
              onChange={handleSearch}
              className="rounded bg-secondary pl-2 pr-10 py-1 text-[0.8rem] w-[13rem] border-2 transition-all border-secondary hover:border-active outline-active"
              placeholder="What are you looking for?"
            />
            <HiOutlineSearch className="absolute right-2" />
          </div>
          <div className="flex gap-8 items-center">
            <Link
              className="flex items-center justify-center w-[2rem] h-[2rem] rounded-2xl hover:bg-secondary"
              to="/wishlist"
            >
              <HiOutlineHeart className="w-full h-full p-1" />
            </Link>
            <Link
              className="flex items-center justify-center w-[2rem] h-[2rem] rounded-2xl hover:bg-secondary"
              to="/cart"
            >
              <HiOutlineShoppingCart className="w-full h-full p-1" />
            </Link>
          </div>
        </div>
      </div>
      {searchQuery && (
        <ul className="w-[30rem] min-h-max max-h-[32rem] overflow-y-scroll z-20 bg-secondary absolute top-full right-[7rem] p-6 rounded-b-md flex flex-col gap-2">
        {searchedProduct.map((product) => {
          return (
            <li key={product.id}>
              <Link
                to={`/product/${product.id}`}
                className="transition-all hover:text-action hover:underline flex gap-6 items-center"
              >
                <img
                  className="w-[1rem] h-[1rem]"
                  src={product.img}
                  alt={product.alt}
                />
                {product.name}
              </Link>
            </li>
          );
        })}
      </ul>
      )}
    </header>
  );
}

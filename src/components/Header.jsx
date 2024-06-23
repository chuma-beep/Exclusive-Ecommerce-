import { Link, NavLink } from "react-router-dom";
import { HiOutlineSearch, HiOutlineHeart, HiOutlineMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { useRef, useState, useEffect, useContext } from "react";
import { allProductsStore } from "../data/allProductsStore.json";
import { CartContext } from "../context/cart-context";

export default function Header() {
  const inputValueRef = useRef();
  const menuBtnRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [searchedProduct, setSearedProduct] = useState([]);
  const { cartItemsCount } = useContext(CartContext);

  const handleSearch = () => {
    const inputValue = inputValueRef.current.value;
    setSearchQuery(inputValue);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      setDropDown(false);
    }
  }, [isLargeScreen]);

  const handleDropDown = () => {
    if (!isLargeScreen) {
      setDropDown((prev) => !prev);
    }
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
    <header className="flex justify-between w-full h-[6rem] px-28 gap-6 lg:gap-[3rem] items-center border-b-2 border-b-secondary relative">
      <Link className="text-[2rem] font-bold max-md:text-[1.5rem]" to="/">
        Exclusive
      </Link>
      <nav
        className={`flex gap-6 ${
          isLargeScreen
            ? ""
            : dropDown
            ? "max-lg:absolute max-lg:p-10 max-lg:flex-col max-lg:w-max max-lg:h-max max-lg:bg-secondary max-lg:z-20 max-lg:top-[6rem] max-lg:right-0 max-lg:mr-28"
            : "hidden"
        }`}
      >
        <NavLink className="px-2 py-1 hover:underline font-medium" to="/">
          Home
        </NavLink>
        <NavLink
          className="px-2 py-1 hover:underline font-medium"
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink className="px-2 py-1 hover:underline font-medium" to="/about">
          About
        </NavLink>
        <NavLink className="px-2 py-1 hover:underline font-medium" to="/login">
          Login
        </NavLink>
      </nav>

      <div className="flex items-center relative">
        <input
          ref={inputValueRef}
          onChange={handleSearch}
          className="rounded bg-secondary pl-2 pr-10 py-1 text-[0.8rem] w-[13rem] border-2 transition-all border-secondary hover:border-active outline-active"
          placeholder="What are you looking for?"
        />
        <HiOutlineSearch className="absolute right-2" />
      </div>
      {searchQuery && (
        <ul className="w-[30rem] min-h-max max-h-[32rem] overflow-y-scroll z-20 bg-secondary absolute top-full right-[15rem] p-6 rounded-b-md flex flex-col gap-2">
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

      <div className="flex gap-8 items-center">
        <Link
          className="flex items-center justify-center w-[2rem] h-[2rem] rounded-2xl hover:bg-secondary"
          to="/wishlist"
        >
          <HiOutlineHeart className="w-full h-full p-1" />
        </Link>

        <Link
          className="flex relative mb-4 items-center justify-center rounded-2xl hover:bg-secondary"
          to="/cart"
        >
          {/* <div className="relative top-0"> */}
          <div className="absolute left-3">
            <p className="flex h-2 w-2 mb-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
              {cartItemsCount}
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="file: mt-4 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          {/* </div> */}
        </Link>
      </div>
      <button
        ref={menuBtnRef}
        className="lg:hidden "
        type="button"
        onClick={handleDropDown}
      >
        {dropDown ? (
          <CgClose className="w-10 h-10" />
        ) : (
          <HiOutlineMenu className="w-10 h-10" />
        )}
      </button>
    </header>
  );
}

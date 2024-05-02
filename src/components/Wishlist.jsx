import Header from "./Header";
import Footer from "./Footer";
import JustForYou from "./JustForYou";
import {wishlistProducts} from "../data/wishlist.json";
import { IoTrashOutline } from "react-icons/io5";

export default function Wishlist() {
  return (
    <>
      <Header /> 
     <div className="flex flex-row justify-center items-center mt-20">

     <div className="w-98 h-14 mb-20 justify-start items-center gap-96 flex flex-row justify-between">
  <h2 className="text-center text-black text-xl w-48 inline-flex gap-4">Wishlist <span>(4)</span></h2>
  <div className="px-12 py-4 rounded border border-black border-opacity-50 justify-center items-center gap-2.5 flex">

    <button className="text-black text-base  w-32 h-4 justify-center">Move All To Bag</button>
</div>
</div>
  </div>
   <div className="flex flex-row px-32">
   <div className="flex w-full gap-6 overflow-x-hidden px-14">
        {wishlistProducts.map((product, index) => {
          return (
            <div className="flex flex-col gap-1 w-[14rem]" key={index}>
              <div className="flex flex-col items-center justify-center w-full h-[13rem] rounded-md p-4 bg-secondary relative ">
                <img className="" src={product.img} alt={product.alt} />
                <span className="absolute w-max h-max px-2 rounded-md bg-accent left-3 top-2 text-sm text-secondary">
                  {product["discount-percentage"]}
                </span>
                <div className="absolute top-2 right-3 flex flex-col gap-4">
                  <button className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]">
                    <IoTrashOutline className="w-full h-full" />
                  </button>
                </div>
              </div>
             
                <button className="w-56 h-10 bg-black rounded-bl rounded-br "><p className="text-white">Add to cart</p></button>
              <h3 className="text-md font-medium">{product.name}</h3>
              <div className="flex gap-2 items-center">
                <span className="text-action">{`$${product["discount-price"]}`}</span>
                <span className="line-through">{`$${product.price}`}</span>
              </div>
              <div>
              </div>
            </div>
          );
        })}
      </div>
   </div>


    <JustForYou/>

      <Footer />
      </>
  );
}
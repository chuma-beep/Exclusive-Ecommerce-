import Header from "./Header";
import Footer from "./Footer";
import { cartproducts } from "../data/cart.json"
import {Link} from "react-router-dom";

export default function Cart() {
   return(
      <>
      <Header />
      <div className="flex flex-col align-middle pl-40 gap-10 mb-20">
    <div className="w-24 h-5 justify-start items-center gap-3 inline-flex">
  <Link className="opacity-50 text-black text-sm font-normal leading-tight" to="/">Home</Link>
  <Link className="text-black text-sm font-normal leading-tight">Cart</Link>
</div>
       <div className="w-11/12 h-16 relative bg-white rounded shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
 
  <div className="left-[40px] top-[24px] absolute justify-start items-center gap-72 inline-flex">
    
    <div className="text-black text-base font-normal leading-normal">Product</div>
    <div className="text-black text-base font-normal leading-normal">Price</div>
    <div className="text-black text-base font-normal leading-normal">Quantity</div>
    <div className="text-black text-base font-normal leading-normal">Subtotal</div>
  </div>
</div>

{cartproducts.map((product, index) => {
    return(
      <div key={index}>
      <div className="w-11/12  h-24 relative bg-white rounded shadow">
      <div className="left-[387px] top-[39px] absolute text-black text-base font-normal leading-normal">{product.price}</div>
      <div className="left-[1063px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">{product.total}</div>
      <div className="h-11 left-[710px] top-[29px] absolute  ">
      
      <div className="w-12 top-[6px] absolute justify-start items-center gap-4 inline-flex">
<div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg" data-hs-input-number="">
  <div className="flex items-center gap-x-1.5">
    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-decrement="">
      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
      </svg>
    </button>
    <input className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0" type="text" value="0" data-hs-input-number-input=""/>
    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-increment="">
      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    </button>
  </div>
</div>
</div>
      </div>
      <div className="w-14 h-14 left-[40px] top-[24px] absolute">
        <img className="w-12 h-10 left-[2px] top-[8px] absolute" src={product.img} alt={product.alt} />
      </div>
      <div className="left-[114px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">{product.name}</div>
      <div className="w-6 h-6 left-[30px] top-[20px] absolute">
        <div className="w-4 h-4 left-[3px] top-[3px] absolute bg-red-500 rounded-full" />
      </div>
    </div>
    </div>
);
})}
<div className="w-11/12 h-14 mb-10 items-start flex flex-row justify-between">
  <div className="px-12 py-4 rounded border border-black/opacity-50 justify-center items-center gap-2.5 flex cursor-pointer hover:shadow-lg hover:shadow-gray-400">
    <button className="text-black text-base font-medium leading-normal">Return To Shop</button>
  </div>
  <div className="px-12 py-4 rounded border border-black/opacity-50 justify-center items-center gap-2.5 flex cursor-pointer hover:shadow-lg hover:shadow-gray-400">
    <button className="text-black text-base font-medium leading-normal">Update Cart</button>
  </div>
</div>
<div className="w-96 h-80 justify-start items-start gap-44 inline-flex">
  <div className="justify-start items-end gap-4 flex">
    <div className="w-72 h-14 relative rounded border border-black">
      <input className="left-[24px] top-[16px] absolute opacity-50 text-black text-base font-normal leading-normal "/>
    </div>
    <div className="w-64 px-16  py-4 bg-red-500 rounded justify-center items-center gap-2.5 flex cursor-pointer hover:shadow-lg hover:shadow-gray-400">
      <button className="text-neutral-50 text-base font-normal leading-normal ">Apply Coupon</button>
    </div>
  </div>
  <div className="w-96 h-80 relative rounded">
    <div className="left-6 top-[32px] w-40  absolute text-black text-xl leading-7 font-normal">Cart Total</div>
    <div className="left-[24px] top-[84px] absolute justify-start items-start gap-64 inline-flex">
      <div className="text-black text-base font-normal leading-normal">Subtotal:</div>
      <span className="text-black text-base font-normal leading-normal">$1750</span>
    </div>
    <div className="left-[24px] top-[140px] absolute justify-start items-start gap-64 inline-flex">
      <div className="text-black text-base font-normal leading-normal">Shipping:</div>
      <div className="text-black text-base font-normal leading-normal">Free</div>
    </div>
    <div className="left-[24px] top-[196px] absolute justify-start items-start gap-72 inline-flex">
      <div className="text-black text-base font-normal leading-normal">Total:</div>
      <span className="text-black text-base font-normal leading-normal">$1750</span>
    </div>
    <div className="px-12 py-3 w-64 left-[89px] top-[236px] mt-10 absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex cursor-pointer hover:shadow-lg hover:shadow-gray-400">
      <button className="text-neutral-50 text-base font-medium leading-normal">Proceed to checkout</button>
    </div>
    <div className="w-96 h-px left-[24px] top-[124px] absolute opacity-40">
      <div className="w-96 h-px left-0 top-0 absolute border border-black"></div>
    </div>
    <div className="w-96 h-px left-[24px] top-[180px] absolute opacity-40">
      <div className="w-96 h-px left-0 top-0 absolute border border-black"></div>
    </div>
  </div>
</div>
       </div>

       <Footer />
     </>



   )
}
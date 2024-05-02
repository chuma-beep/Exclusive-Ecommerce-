import{ justforyou } from "../data/justforyou.json";
import { IoEyeOutline } from "react-icons/io5";


export default function JustForYou(){
    return(<>
         <div className="flex flex-row justify-center items-center mt-20 pl-36">

         <div className="flex w-full gap-4 mb-8 justify- items-center">
         <div className="w-5 h-10  ml-10 relative">
  <span className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
  </div>
        <h2 className="text-2xl font-boldb mr-96"> Just For You</h2>
<div className="px-12 py-4 rounded border ml-60 border-black border-opacity-50 justify-center items-center gap-2.5 flex">

<button className="text-black text-base  w-16 h-4 justify-center">See All</button>
</div>
</div>
</div>
<div className="flex flex-row px-32">
<div className="flex w-full gap-6 overflow-x-hidden px-14 mb-20">
   {justforyou.map((product, index) => {
     return (
       <div className="flex flex-col gap-1 w-[14rem]" key={index}>
         <div className="flex flex-col items-center justify-center w-full h-[13rem] rounded-md p-4 bg-secondary relative ">
           <img className="" src={product.img} alt={product.alt} />
           <span className="absolute w-max h-max px-2 rounded-md bg-accent left-3 top-2 text-sm text-secondary">
             {product["discount-percentage"]}
           </span>
           <div className="absolute top-2 right-3 flex flex-col gap-4">
             <button className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]">
               <IoEyeOutline className="w-full h-full" />
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
    
    
    </>)
}
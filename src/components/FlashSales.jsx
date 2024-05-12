import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { flashSalesProducts } from "../data/flashSalesProducts.json";
import { HiOutlineHeart, HiOutlineEye } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function FlashSales() {
  return (
    <section className="w-full px-28 my-14">
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-[1.3rem] h-[3rem] rounded-md bg-accent"></span>
        <h5 className="text-base text-action font-bold">Today’s</h5>
      </div>
      <div className="flex w-full items-center gap-6 mb-8 justify-between">
        <h2 className="text-3xl font-bold">Flash Sales</h2>
        <div className="flex gap-4 items-end">
          <p className="flex flex-col items-center">
            Days <span className="text-2xl font-bold">02</span>
          </p>
          <span className="text-2xl font-bold text-action">:</span>
          <p className="flex flex-col items-center">
            Hours <span className="text-2xl font-bold">23</span>
          </p>
          <span className="text-2xl font-bold text-action">:</span>
          <p className="flex flex-col items-center">
            Minutes <span className="text-2xl font-bold">19</span>
          </p>
          <span className="text-2xl font-bold text-action">:</span>
          <p className="flex flex-col items-center">
            Seconds <span className="text-2xl font-bold">49</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-secondary w-8 h-8 rounded-full transition-all hover:bg-action hover:text-primary flex items-center justify-center">
            <HiArrowLeft />
          </button>
          <button className="bg-secondary w-8 h-8 rounded-full transition-all hover:bg-action hover:text-primary flex items-center justify-center">
            <HiArrowRight />
          </button>
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-center gap-6 overflow-x-hidden">
        {flashSalesProducts.map((product, index) => {
          return (
            <div className="flex flex-col gap-1 w-[14rem]" key={index}>
              <div className="flex flex-col items-center justify-center w-full h-[13rem] rounded-md p-4 bg-secondary relative ">
                <img className="" src={product.img} alt={product.alt} />
                <span className="absolute w-max h-max px-2 rounded-md bg-accent left-3 top-2 text-sm text-primary">
                  {product["discount-percentage"]}
                </span>
                <div className="absolute top-2 right-3 flex flex-col gap-4">
                  <button className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]">
                    <HiOutlineHeart className="w-full h-full" />
                  </button>
                  <button className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]">
                    <HiOutlineEye className="w-full h-full" />
                  </button>
                </div>
              </div>
              <h3 className="text-md font-medium">{product.name}</h3>
              <div className="flex gap-2 items-center">
                <span className="text-action">{`$${product["discount-price"]}`}</span>
                <span className="line-through">{`$${product.price}`}</span>
              </div>
              <div>
                <span>star rating</span>
                <span>({product.stars})</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex mt-8 items-center justify-center w-full">
        <Link
          className="px-4 py-2 rounded-md bg-action w-max text-primary hover:translate-x-2 hover:-translate-y-1 transition-all"
          to="/"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}

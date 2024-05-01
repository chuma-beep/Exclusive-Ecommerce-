import { bestSellingProducts } from "../data/bestSellingProducts.json";
import { HiOutlineHeart, HiOutlineEye } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function BestSellingProducts() {
  return (
    <section className="w-full px-28 my-14">
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-[1.3rem] h-[3rem] rounded-md bg-accent"></span>
        <h5 className="text-base text-action font-bold">This Month</h5>
      </div>
      <div className="flex w-full items-center gap-6 mb-8 justify-between">
        <h2 className="text-3xl font-bold">Best Selling Products</h2>
        <div className="flex items-center gap-4">
        <Link
          className="px-4 py-2 rounded-md bg-action w-max text-secondary"
          to="/"
        >
          View All
        </Link>
        </div>
      </div>
      <div className="flex w-full gap-6 overflow-x-hidden">
        {bestSellingProducts.map((product, index) => {
          return (
            <div className="flex flex-col gap-1 w-[20rem]" key={index}>
              <div className="flex flex-col items-center justify-center w-full h-[13rem] rounded-md p-4 bg-secondary relative ">
                <img className="" src={product.img} alt={product.alt} />
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
    </section>
  );
}

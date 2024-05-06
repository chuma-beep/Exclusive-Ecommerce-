import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { exploreOurProducts } from "../data/exploreOurProducts.json";
import { HiOutlineHeart, HiOutlineEye } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function ExploreOurProducts() {
  return (
    <section className="w-full px-28 my-14">
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-[1.3rem] h-[3rem] rounded-md bg-accent"></span>
        <h5 className="text-base text-action font-bold">Our Productss</h5>
      </div>
      <div className="flex w-full items-center gap-6 mb-8 justify-between">
        <h2 className="text-3xl font-bold">Explore Our Products</h2>
        <div className="flex items-center gap-4">
          <button className="bg-secondary w-8 h-8 rounded-full transition-all hover:bg-action hover:text-secondary flex items-center justify-center">
            <HiArrowLeft />
          </button>
          <button className="bg-secondary w-8 h-8 rounded-full transition-all hover:bg-action hover:text-secondary flex items-center justify-center">
            <HiArrowRight />
          </button>
        </div>
      </div>
      <div className="flex w-full gap-6 flex-wrap justify-center">
        {exploreOurProducts.map((product, index) => {
          return (
            <div className="flex flex-col gap-1 w-[14.3rem]" key={index}>
              <div className="flex flex-col items-center justify-center w-full h-[13rem] rounded-md p-4 bg-secondary relative ">
                <img className="" src={product.img} alt={product.alt} />
                <span className="absolute w-max h-max px-2 rounded-md bg-green-cus left-3 top-2 text-sm text-secondary">
                  {product.new && product.new}
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
                <span className="text-action">{`$${product.price}`}</span>
                <div>
                <span>star rating</span>
                <span>({product.stars})</span>
              </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex mt-8 items-center justify-center w-full">
        <Link
          className="px-4 py-2 rounded-md bg-action w-max text-secondary hover:translate-x-2 hover:-translate-y-1 transition-all"
          to="/"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}

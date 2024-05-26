import { useState, useEffect, useContext } from "react";
import StarRatings from "react-star-ratings";
import Header from "./Header";
import Footer from "./Footer";
import { HiOutlineHeart, HiOutlineEye } from "react-icons/hi";
import { CartContext } from "../context/cart-context";





export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);



  async function getProducts() {
    try {
      const response = await fetch('../public/data/allProductsStore.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      console.log("Raw response text:", text); 
      const data = JSON.parse(text);
      setProducts(data.allProductsStore);  
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <>
      <Header />
      <section className="w-full px-28 my-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-[1.3rem] h-[3rem] rounded-md bg-accent"></span>
          <h1 className="text-base text-action font-bold">Our Products</h1>
        </div>
        <div className="flex w-full gap-6 flex-wrap justify-center">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-1 w-[14rem]">
              <div className="group overflow-hidden flex flex-col items-center justify-center w-full h-[13rem] rounded-md p-4 bg-secondary relative">
                <img className="hover:scale-[1.2] transition-all" src={product.img} alt={product.alt} />
                {product.new && (
                  <span className="absolute w-max h-max px-2 rounded-md bg-green-cus left-3 top-2 text-sm text-primary">
                    {product.new}
                  </span>
                )}
                <div className="absolute top-2 right-3 flex flex-col gap-4">
                  <button className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]">
                    <HiOutlineHeart className="w-full h-full" />
                  </button>
                  <button className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]">
                    <HiOutlineEye className="w-full h-full" />
                  </button>
                </div>
                <button
                  className="w-full h-[2rem] absolute bottom-0 bg-black text-primary hidden group-hover:block"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
              <h3 className="text-md font-medium">{product.name}</h3>
              <div className="flex gap-2 items-center">
                <span className="text-action">{`$${product.price}`}</span>
                <div>
                  <StarRatings
                    rating={product.stars}
                    starDimension="20px"
                    starSpacing="2px"
                    starRatedColor="orange"
                  />
                  <span>({product["times rated"]})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

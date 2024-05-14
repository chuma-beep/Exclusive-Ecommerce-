import Footer from "./Footer";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { allProductsStore } from "../data/allProductsStore.json";
import { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";

export default function ViewProduct() {
  const { productID } = useParams();
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    for (let product of allProductsStore) {
      if (productID === product.id) {
        setCurrentProduct(product);
      }
    }
  }, [setCurrentProduct, productID]);

  return (
    <>
      <Header />
      <section className="w-full h-[70%] px-28 py-10 flex gap-6 justify-between">
        <img src={currentProduct.img} alt={currentProduct.alt} />
        <div>
          <h2>{currentProduct.name}</h2>
          <p>{currentProduct.description}</p>
          <p>${currentProduct.price}</p>
          <div>
            <StarRatings
              rating={currentProduct.stars}
              starDimension="20px"
              starSpacing="2px"
              starRatedColor="orange"
            />
            <span>({currentProduct["times rated"]})</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function HeroCarousel({ data }) {
  const { heroCarouselData } = data;

  return (
    <div>
      {heroCarouselData.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <div>
                {item.logo && <img src={item.logo} alt={item.logo} />}
                <h3>{item.product}</h3>
              </div>
              <h1>{item.discount}</h1>
              <Link to={item["quick-link"]}>
                Shop Now <HiArrowRight />
              </Link>
            </div>
            <img src={item.img} alt={item.alt} />
          </div>
        );
      })}
      <span>
        {heroCarouselData.map((_, index) => {
          return <button key={index} onClick={null}></button>;
        })}
      </span>
    </div>
  );
}

HeroCarousel.propTypes = {
  data: PropTypes.object.isRequired,
};

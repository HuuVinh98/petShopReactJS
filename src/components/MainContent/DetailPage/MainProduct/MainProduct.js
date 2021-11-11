import "./MainProduct.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faMinus,
  faPlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import gallery4 from "../../../../images/gallery4.jpg";

export default function ProductInfo({
  desc,
  name,
  price,
  weight,
  demension,
  age,
  food,
}) {
  return (
    <div class="main-product">
      <div class="main-product__left">
        <OwlCarousel
          items={1}
          className="owl-theme"
          responsiveClass
          loop
          nav
          margin={8}
          autoPlay={true}
          autoplayTimeout={2000}
        >
          <div>
            <img src={gallery4} alt="" />
          </div>
          <div>
            <img src={gallery4} alt="" />
          </div>
          <div>
            <img src={gallery4} alt="" />
          </div>
          <div>
            <img src={gallery4} alt="" />
          </div>
          <div>
            <img src={gallery4} alt="" />
          </div>
          <div>
            <img src={gallery4} alt="" />
          </div>
        </OwlCarousel>
      </div>
      <div class="main-product__right">
        <div class="right-top">
          <h2>{name}</h2>
          <h3>{price}</h3>
        </div>
        <div class="right-bot">
          <p>{desc}</p>
          <table class="product-info">
            <tr>
              <td>Weight</td>
              <td>{weight}</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>{demension}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age}</td>
            </tr>
            <tr>
              <td>Foods</td>
              <td>{food}</td>
            </tr>
          </table>
          <div class="product-quantity">
            <div class="quantity flex">
              <span>
                <FontAwesomeIcon icon={faMinus} />
              </span>
              <span>1</span>
              <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </div>
            <button>Add To Cart</button>
            <div class="btn-wishlist">
              <FontAwesomeIcon icon={faHeart} color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

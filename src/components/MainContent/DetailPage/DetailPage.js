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
import Item from "../../Trending/Item/Item";
import exfish from "../../../images/exfish.png";
import slide1 from "../../../images/gallery1.jpg";
import slide2 from "../../../images/gallery2.jpg";
import slide3 from "../../../images/gallery3.jpg";
import MainProduct from "./MainProduct/MainProduct";

import "./DetailPage.scss";
export default function DetailPage() {
  return (
    <div className="detail-page">
      <div class="product-path">
        <div class="container">
          <a href="#">
            <span>Home</span>
            <FontAwesomeIcon icon={faAngleRight} color="blue" />
          </a>
          <a href="#">
            <span>Special Products</span>
            <FontAwesomeIcon icon={faAngleRight} color="blue" />
          </a>
          <a href="#">
            <span>Vulva Fish</span>
          </a>
        </div>
      </div>
      <div class="product-detail">
        <div class="container">
          <MainProduct
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab fuga
          enim ipsam sed animi illum, officia dolorum ullam tenetur nihil
          voluptatibus aliquam ratione fugit vitae dignissimos veniam. Error,
          numquam? Ipsam!"
            name="Vulava Fish"
            price="$30.00"
            weight="100g"
            demension="2x2 cm"
            age="2 days"
            food="Rice, bean,..."
          ></MainProduct>

          <div class="related-products">
            <div class="title">
              <h2>Related Products</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
              </p>
            </div>
            <div class="owl-carousel">
              <OwlCarousel
                items={5}
                className="owl-theme"
                responsive={{
                  0: {
                    items: 1,
                  },
                  576: {
                    items: 2,
                  },
                  768: {
                    items: 3,
                  },
                  992: {
                    items: 4,
                  },
                  1140: {
                    items: 5,
                  },
                }}
                loop
                nav
                margin={8}
                autoPlay={true}
                autoplayTimeout={2000}
              >
                <Item name="Vulva Fish" price="$30.00" url={exfish}></Item>
                <Item name="Vulva Fish" price="$30.00" url={exfish}></Item>
                <Item name="Vulva Fish" price="$30.00" url={exfish}></Item>
                <Item name="Vulva Fish" price="$30.00" url={exfish}></Item>
                <Item name="Vulva Fish" price="$30.00" url={exfish}></Item>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

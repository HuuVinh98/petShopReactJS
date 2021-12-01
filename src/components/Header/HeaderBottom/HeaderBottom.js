import "./HeaderBottom.scss";
import logo from "../../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "../Navigation/Navigation";
import NavResponsive from "../Navigation/MenuResponsive";

import {
  faBars,
  faHeart,
  faSearch,
  faShoppingBag,
  faHamburger,
  faShippingFast,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function HeaderBottom() {
  return (
    <div className="header-bottom ">
      <div className="container">
        <div className="bar--left bar">
          <FontAwesomeIcon
            icon={faBars}
            color="#333"
            style={{ fontSize: "30px" }}
          />
        </div>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <Navigation />

        <ul className="icons">
          <li className="icons__shipping">
            <FontAwesomeIcon
              icon={faShippingFast}
              color="#eea243"
              style={{ fontSize: "40px" }}
              className="fa-icon"
            />
            <div className="text">
              <p>Call and Order In</p>
              <h3>+1234-457-890</h3>
            </div>
          </li>
          <li className="icons__search">
            <div>
              <FontAwesomeIcon
                icon={faSearch}
                color="#333"
                style={{ fontSize: "18px" }}
              />
            </div>
          </li>
          <li className="icons__wishlist">
            <div>
              <a href="/wishlist">
                <FontAwesomeIcon
                  icon={faHeart}
                  color="#333"
                  style={{ fontSize: "18px" }}
                />
              </a>
              <span className="wishlist-num">0</span>
            </div>
          </li>
          <li className="icons__cart">
            <div>
              <a href="/cart">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  color="#333"
                  style={{ fontSize: "18px" }}
                />
              </a>
              <span className="cart-num">0</span>
            </div>
          </li>
          <li className="bar--right bar">
            <FontAwesomeIcon
              icon={faBars}
              color="#333"
              style={{ fontSize: "30px" }}
            />
          </li>
        </ul>

        <FontAwesomeIcon
          icon={faPhone}
          color="#333"
          style={{ fontSize: "30px" }}
          className="fa-phone"
        />
      </div>
    </div>
  );
}

export default HeaderBottom;

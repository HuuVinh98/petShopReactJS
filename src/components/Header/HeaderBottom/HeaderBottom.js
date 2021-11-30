import "./HeaderBottom.scss";
import logo from "../../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "../Navigation/Navigation";
import NavResponsive from "../Navigation/NavResponsive";

import {
  faBars,
  faHeart,
  faSearch,
  faShoppingBag,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function HeaderBottom() {
  return (
    <div className="header-bottom ">
      <div className="container">
        <div className="bar--left bar">
          <FontAwesomeIcon
            icon={faBars}
            color="white"
            style={{ fontSize: "30px" }}
          />
        </div>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {/* <form action="">
            <input type="text" placeholder="Search"></input>
            <div className="search-icon ">
              <FontAwesomeIcon
                icon={faSearch}
                color="white"
                style={{ fontSize: "20px" }}
              />
            </div>
          </form> */}

        <Navigation />

        <ul className="icons">
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
              <FontAwesomeIcon
                icon={faShoppingBag}
                color="#333"
                style={{ fontSize: "18px" }}
              />
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
      </div>
    </div>
  );
}

export default HeaderBottom;

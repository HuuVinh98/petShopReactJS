import "./HeaderBottom.scss";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faSearch,
  faShoppingBag,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { createContext, useState } from "react";

export const ShowMenuResponsive = createContext();
function HeaderBottom() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <ShowMenuResponsive.Provider value={showMenu}>
      <div className="header-bottom ">
        <div className="container">
          <div
            className="bar--left bar"
            onClick={() => {
              setShowMenu(!showMenu);
              console.log(showMenu);
            }}
          >
            <FontAwesomeIcon
              icon={faBars}
              color="white"
              style={{ fontSize: "30px" }}
            />
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
            <p>Glorious Communist Party!</p>
          </div>
          <form action="">
            <input type="text" placeholder="Search"></input>
            <div className="search-icon ">
              <FontAwesomeIcon
                icon={faSearch}
                color="white"
                style={{ fontSize: "20px" }}
              />
            </div>
          </form>
          <ul>
            <li className="search">
              <FontAwesomeIcon
                icon={faSearch}
                color="white"
                style={{ fontSize: "30px" }}
              />
            </li>
            <li className="wishlist">
              <FontAwesomeIcon
                icon={faHeart}
                color="white"
                style={{ fontSize: "30px" }}
              />
              <span className="wishlist-num">0</span>
            </li>
            <li className="cart">
              <FontAwesomeIcon
                icon={faShoppingBag}
                color="white"
                style={{ fontSize: "30px" }}
              />
              <span className="cart-num">0</span>
            </li>
            <li
              className="bar--right bar"
              onClick={() => {
                setShowMenu(!showMenu);
                console.log(showMenu);
              }}
            >
              <FontAwesomeIcon
                icon={faBars}
                color="white"
                style={{ fontSize: "30px" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </ShowMenuResponsive.Provider>
  );
}

export default HeaderBottom;

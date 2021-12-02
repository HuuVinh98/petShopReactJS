import "./FooterTop.scss";
import logo from "../../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function FooterTop() {
  return (
    <div className="footer-top">
      <div className="footer-top__left">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </li>
          <li style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
            nesciunt voluptatem beatae nemo.{" "}
          </li>
          <li>
            <span>
              <a href="">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </span>
            <span>
              <a href="">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </span>
            <span>
              <a href="">
                {" "}
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </span>
            <span>
              <a href="">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </span>
            <span>
              <a href="">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div className="footer-top__right row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <ul>
            <li>Services</li>
            <li>
              <a href="">My Account</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Shopping Cart</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Services Login</a>
            </li>
          </ul>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <ul>
            <li>Services</li>
            <li>
              <a href="">My Account</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Shopping Cart</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Services Login</a>
            </li>
          </ul>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <ul>
            <li>Services</li>
            <li>
              <a href="">My Account</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Shopping Cart</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Services Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

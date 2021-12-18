import "./FooterTop.scss";
import logo from "../../../images/logo.png";
import traidua from "../../../images/traidua.png";
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
          <img src={traidua} className="coconut" />
          <li>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </li>
          {/* <li style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
            nesciunt voluptatem beatae nemo.{" "}
          </li> */}
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
          </li>
        </ul>
      </div>
      <div className="footer-top__right flex j-spaceBetween">
        <ul>
          <li>Contact Us</li>
          <li>Phone: +0123456</li>
          <li>Email: demo@gmail.com</li>
          <li>Address: abcd, efgh, iklm, xyz</li>
        </ul>

        <ul>
          <li>Feedback</li>
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
  );
}

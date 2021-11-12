import "./Navigation.scss";
import exfish from "./exfish.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="circle--left circle">
        <div className="sub-circle"></div>
      </div>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="menu_shop">
          <div>
            <span>Shop</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <ul className="dropdown">
            <li>
              <ul>
                <li>Fish</li>
                <li>
                  <a href="#">Fish 1</a>
                </li>
                <li>
                  <a href="#">Fish 2</a>
                </li>
                <li>
                  <a href="#">Fish 3</a>
                </li>
                <li>
                  <a href="#">Fish 4</a>
                </li>
                <li>
                  <a href="#">Fish 5</a>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>Hamster</li>
                <li>
                  <a href="#">Hamster 1</a>
                </li>
                <li>
                  <a href="#">Hamster 2</a>
                </li>
                <li>
                  <a href="#">Hamster 3</a>
                </li>
                <li>
                  <a href="#">Hamster 4</a>
                </li>
                <li>
                  <a href="#">Hamster 5</a>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>Bird</li>
                <li>
                  <a href="">Bird 1</a>
                </li>
                <li>
                  <a href="">Bird 2</a>
                </li>
                <li>
                  <a href="">Bird 3</a>
                </li>
                <li>
                  <a href="">Bird 4</a>
                </li>
                <li>
                  <a href="">Bird 5</a>
                </li>
              </ul>
            </li>
            <li className="cc">
              <div className="image">
                <img src={exfish} alt="" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="circle--right circle">
        <div className="sub-circle"></div>
      </div>
    </nav>
  );
}
export default Navigation;

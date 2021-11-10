import "./CartBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CartBoxItem from "./CartBoxItem/CartBoxItem";
import exfish from "../../images/exfish.png";
export default function CartBox() {
  return (
    <div className="render-cart flex f-column">
      <div className="head flex j-spaceBetween">
        <span>
          Cart(<span id="items-in-cart">0</span>)
        </span>
        <span className="close-cart">
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
      <div className="items flex f-column j-start">
        <CartBoxItem url={exfish} name="Vulva Fish" price="30" quantity={2} />
      </div>
      <div className="foot flex f-column">
        <div className="subtotal flex j-spaceBetween">
          <span>Subtotal:</span>
          <span id="subtotal" style={{ fontSize: "20px" }}></span>
        </div>
        <button className="flex j-center a-center">
          <a href="#" target="_blank">
            View Cart
          </a>
        </button>
        <button className="flex j-center a-center">
          <a href="#" target="_blank">
            Checkout
          </a>
        </button>
      </div>
    </div>
  );
}

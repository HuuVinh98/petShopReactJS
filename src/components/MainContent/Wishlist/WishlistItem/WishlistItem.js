import "./WishlistItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
export default function WishlistItem({ url, name }) {
  return (
    <div class="wishlist-product">
      <div class="image">
        <img src={url} alt="" />
        <span class="delete-wishlist-products flex a-center j-center">
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
      <div class="text">
        <p>{name}</p>
        <div class="two-button flex j-spaceBetween">
          <button class="add-wishlist-to-cart">Add to cart</button>
          <span class="quick-view-click">
            <FontAwesomeIcon icon={faSearchPlus} />
          </span>
        </div>
      </div>
    </div>
  );
}

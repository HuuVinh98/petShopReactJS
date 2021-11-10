import "./Wishlist.scss";
import exfish from "../../../images/exfish.png";
import WishlistItem from "./WishlistItem/WishlistItem";
export default function Wishlist() {
  return (
    <div class="wishlist-section">
      <div class="container">
        <h1>Wishlist</h1>
        <div class="content flex wr-wrap">
          <WishlistItem url={exfish} name="Vulva Fish"></WishlistItem>
        </div>
      </div>
    </div>
  );
}

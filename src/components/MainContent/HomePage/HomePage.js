import Slider from "../../Slider/Slider";
import Outstanding from "../../Outstanding/Outstanding";
import Promotion from "../../Promotion/Promotion";
import Popular from "../../Popular/Popular";
import Beautiful from "../../Beautiful/Beautiful";
import Gallery from "../../Gallery/Gallery";
import Reviews from "../../Reviews/Reviews";
import Menus from "../../Menus/Menus";
export default function HomePage() {
  return (
    <div className="home-page">
      <Slider />
      <Menus />
      <Promotion />
      <Popular />
      <Gallery />
      <Reviews />
    </div>
  );
}

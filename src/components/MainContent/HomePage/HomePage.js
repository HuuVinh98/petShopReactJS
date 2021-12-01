import Slider from "../../Slider/Slider";
import Products from "../../Products/Products";
import Trending from "../../Trending/Treding";
import Special from "../../Special/Special";
import Outstanding from "../../Outstanding/Outstanding";
import Promotion from "../../Promotion/Promotion";
import Beautiful from "../../Beautiful/Beautiful";
import Gallery from "../../Gallery/Gallery";
import Reviews from "../../Reviews/Reviews";
export default function HomePage() {
  return (
    <div className="home-page">
      <Slider />
      <Promotion />
      <Trending />
      <Special />
      <Outstanding />

      <Beautiful />
      <Gallery />
      <Reviews />
    </div>
  );
}

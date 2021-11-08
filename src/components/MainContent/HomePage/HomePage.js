import Slider from "../../Slider/Slider";
import Products from "../../Products/Products";
import Trending from "../../Trending/Treding";
import Special from "../../Special/Special";
import Outstanding from "../../Outstanding/Outstanding";
import Sale from "../../Sale/Sale";
import Beautiful from "../../Beautiful/Beautiful";
import Gallery from "../../Gallery/Gallery";
import Reviews from "../../Reviews/Reviews"
export default function HomePage()
{
    return (
        <div className="home-page">
            <Slider />
            <Products />
            <Trending />
            <Special /> 
            <Outstanding />
            <Sale />
            <Beautiful />
            <Gallery />
            <Reviews />
        </div>

    )
}
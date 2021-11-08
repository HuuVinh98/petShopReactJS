
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight,faMinus,faPlus,faHeart} from '@fortawesome/free-solid-svg-icons';
import Item from "../../Trending/Item/Item";
import gallery4 from "../../../images/gallery4.jpg";
import exfish from "../../../images/exfish.png";
import "./DetailPage.scss";
export default function DetailPage()
{
    return (
        <div className="detail-page">
            <div class="product-path">
                <div class="container">
                    <a href="#">
                        <span>Home</span>
                        <FontAwesomeIcon icon={faAngleRight} color="blue"/>
                    </a>
                    <a href="#">
                        <span>Special Products</span>
                        <FontAwesomeIcon icon={faAngleRight} color="blue" />
                    </a>
                    <a href="#"><span>Vulva Fish</span></a>
                </div>
            </div>
            <div class="product-detail">
                <div class="container">
                    <div class="main-product">
                        <div class="left">
                            <div class="owl-carousel">
                                <OwlCarousel items={1}  
                                    className="owl-theme"  
                                    loop  
                                    nav  
                                    margin={8} 
                                    autoPlay={true}
                                    autoplayTimeout={2000}
                                >  
                                    <div><img src={gallery4} alt=""/></div>
                                    <div><img src={gallery4} alt=""/></div>
                                    <div><img src={gallery4} alt=""/></div>
                                    <div><img src={gallery4} alt=""/></div>
                                    <div><img src={gallery4} alt=""/></div>
                                    <div><img src={gallery4} alt=""/></div>
                                </OwlCarousel>  
                            </div>
                        </div>
                        <div class="right">
                            <div class="top">
                                <h2>Vulva Fish</h2>
                                <h3>$33.00</h3>
                            </div>
                            <div class="bot flex f-column a-start">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab fuga enim ipsam sed animi illum, officia dolorum ullam tenetur nihil voluptatibus aliquam ratione fugit vitae dignissimos veniam. Error, numquam? Ipsam!</p>
                                <table class="info">
                                        <tr>
                                            <td>Weight</td>
                                            <td>100g</td>
                                        </tr>
                                        <tr>
                                            <td>Dimensions</td>
                                            <td>2x2 cm</td>
                                        </tr>
                                        <tr>
                                            <td>Age</td>
                                            <td>2 days</td>
                                        </tr>
                                        <tr>
                                            <td>Foods</td>
                                            <td>Rice, beans, fruits, ...</td>
                                        </tr>
                                </table>
                                <div class="buy flex j-spaceBetween a-center">
                                    <div class="number flex">
                                        <span>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </span>
                                        <span>1</span>
                                        <span>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                    </div>
                                    <button>Add To Cart</button>
                                    <div class="wishlist flex j-center a-center">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="related-products">
                        <div class="title">
                            <h2>Related Products</h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                        <div class="owl-carousel">
                            <OwlCarousel items={1}  
                                className="owl-theme"  
                                loop  
                                nav  
                                margin={8} 
                                autoPlay={true}
                                autoplayTimeout={2000}
                            >  
                                <Item 
                                    name="Vulva Fish"
                                    price="$30.00"
                                    url={exfish}
                                >
                                </Item>
                                <Item 
                                    name="Vulva Fish"
                                    price="$30.00"
                                    url={exfish}
                                >
                                </Item>
                                <Item 
                                    name="Vulva Fish"
                                    price="$30.00"
                                    url={exfish}
                                >
                                </Item>
                                <Item 
                                    name="Vulva Fish"
                                    price="$30.00"
                                    url={exfish}
                                >
                                </Item>
                                <Item 
                                    name="Vulva Fish"
                                    price="$30.00"
                                    url={exfish}
                                >
                                </Item>
                            </OwlCarousel> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
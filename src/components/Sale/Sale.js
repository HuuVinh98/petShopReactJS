import "./Sale.scss";
import example from "../../images/example.png";
import sanho from "../../images/sanho.png";
export default function Sale()
{
    return (
        <section className="sales">
            <div class="container">
                <div class="sale">
                    <div class="sale__left">
                        <p>Up to 70% off</p>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <button><a href="#">Read more</a></button>
                    </div>
                    <div class="sale__right">
                        <img src={example} alt="" />
                    </div>
                </div>
                <div class="sale">
                    <div class="sale__left">
                        <p>Special Orders</p>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <button><a href="#">Read more</a></button>
                    </div>
                    <div class="sale__right">
                        <img src={sanho} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
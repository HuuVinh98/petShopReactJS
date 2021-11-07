import "./Beautiful.scss";
import aquarium from "../../images/aquarium.jpg"
export default function Beautiful()
{
    return (
        <section class="beautiful-products">
            <div class="container">
                <div class="text">
                    <h2>BEAUTIFUL AQUARIUM</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aut beatae nesciunt repellendus, dicta neque ex doloribus distinctio ab debitis eum natus quos non. Eaque aperiam sit maiores voluptatum nemo?</p>
                    <button><a href="#">BUY NOW!</a></button>
                </div>
                <div class="picture">
                    <img src={aquarium} alt="" />
                </div>
            </div>
        </section>
    )
}
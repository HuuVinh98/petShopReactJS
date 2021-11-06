import "./Special.scss";
import Item from "../Trending/Item/Item";
import exfish from "../../images/exfish.png"
export default function Special()
{
    return (
    <section className="pet-products">
        <div className="container">
            <div className="title">
                    <div className="left">
                        <h2>Special Products</h2>
                    </div>
                    <div className="right">
                        <button><a href="">New Arrivals</a></button>
                        <button><a href="">Best Sellers</a></button>
                        <button><a href="">On Sale</a></button>
                        <button><a href="">All Products</a></button>
                    </div>
            </div>
            
            <div className="products">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                        <Item
                            url={exfish}
                            name="Vulava Fish"
                            price="$30.00"
                        ></Item>
                    </div> 
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                        <Item
                            url={exfish}
                            name="Vulava Fish"
                            price="$30.00"
                        ></Item>
                    </div> 
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                        <Item
                            url={exfish}
                            name="Vulava Fish"
                            price="$30.00"
                        ></Item>
                    </div> 
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                        <Item
                            url={exfish}
                            name="Vulava Fish"
                            price="$30.00"
                        ></Item>
                    </div> 
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                        <Item
                            url={exfish}
                            name="Vulava Fish"
                            price="$30.00"
                        ></Item>
                    </div> 
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                        <Item
                            url={exfish}
                            name="Vulava Fish"
                            price="$30.00"
                        ></Item>
                    </div> 
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                        <Item
                            url={exfish}
                            name="Vulava Fish"
                            price="$30.00"
                        ></Item>
                    </div> 
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                        <Item
                            url={exfish}
                            name="Vulava Fish"
                            price="$30.00"
                        ></Item>
                    </div> 
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                        <Item
                            url={exfish}
                            name="Vulava Fish"
                            price="$30.00"
                        ></Item>
                    </div> 
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                        <Item
                            url={exfish}
                            name="Vulava Fish"
                            price="$30.00"
                        ></Item>
                    </div> 
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                        <Item
                            url={exfish}
                            name="Vulava Fish"
                            price="$30.00"
                        ></Item>
                    </div> 
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                        <Item
                            url={exfish}
                            name="Vulava Fish"
                            price="$30.00"
                        ></Item>
                    </div> 
                                                       
                </div>     
            </div>     
        </div>    
    </section>
    )
}
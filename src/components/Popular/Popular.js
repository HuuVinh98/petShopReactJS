import "./Popular.scss";
import Item from "./Item/Item";
import mucrim from "../../images/mucrim.png";
export default function Popular() {
  return (
    <section className="popular">
      <div className="container">
        <div className="popular-title">
          <div className="popular-title__top">
            <h2>Popular dish</h2>
          </div>
          <div className="popular-title__bottom">
            <button>
              <a href="">Seafood</a>
            </button>
            <button>
              <a href="">Peanut</a>
            </button>
            <button>
              <a href="">Ricepaper</a>
            </button>
            <button>
              <a href="">Dried Animal</a>
            </button>
          </div>
        </div>

        <div className="popular-products">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <Item
                url={mucrim}
                name="Squid Married Satay"
                desc="How are you? I'm fine thank you. And you?"
                price="$30.00"
              ></Item>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <Item
                url={mucrim}
                name="Squid Married Satay"
                desc="How are you? I'm fine thank you. And you?"
                price="$30.00"
              ></Item>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <Item
                url={mucrim}
                name="Squid Married Satay"
                desc="How are you? I'm fine thank you. And you?"
                price="$30.00"
              ></Item>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <Item
                url={mucrim}
                name="Squid Married Satay"
                desc="How are you? I'm fine thank you. And you?"
                price="$30.00"
              ></Item>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <Item
                url={mucrim}
                name="Squid Married Satay"
                desc="How are you? I'm fine thank you. And you?"
                price="$30.00"
              ></Item>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <Item
                url={mucrim}
                name="Squid Married Satay"
                desc="How are you? I'm fine thank you. And you?"
                price="$30.00"
              ></Item>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <Item
                url={mucrim}
                name="Squid Married Satay"
                desc="How are you? I'm fine thank you. And you?"
                price="$30.00"
              ></Item>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <Item
                url={mucrim}
                name="Squid Married Satay"
                desc="How are you? I'm fine thank you. And you?"
                price="$30.00"
              ></Item>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <Item
                url={mucrim}
                name="Squid Married Satay"
                desc="How are you? I'm fine thank you. And you?"
                price="$30.00"
              ></Item>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <Item
                url={mucrim}
                name="Squid Married Satay"
                desc="How are you? I'm fine thank you. And you?"
                price="$30.00"
              ></Item>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <Item
                url={mucrim}
                name="Squid Married Satay"
                desc="How are you? I'm fine thank you. And you?"
                price="$30.00"
              ></Item>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <Item
                url={mucrim}
                name="Squid Married Satay"
                desc="How are you? I'm fine thank you. And you?"
                price="$30.00"
              ></Item>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

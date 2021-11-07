
import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import './App.css';
import './reset.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from './components/Slider/Slider';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Products from "./components/Products/Products";
import Trending from "./components/Trending/Treding";
import Special from "./components/Special/Special";
import Outstanding from "./components/Outstanding/Outstanding";
import Sale from "./components/Sale/Sale";
import Beautiful from "./components/Beautiful/Beautiful";
import Gallery from "./components/Gallery/Gallery";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
function App() {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {window.removeEventListener("scroll", handleScroll)} ;
  }, [showBtn]);
  return (
    <div className="App">
      {showBtn&&<ScrollTop />}
      <Header />
      <Slider />
      <Products />
      <Trending />
      <Special /> 
      <Outstanding />
      <Sale />
      <Beautiful />
      <Gallery />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;

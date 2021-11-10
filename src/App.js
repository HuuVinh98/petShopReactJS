import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import "./reset.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "./components/Slider/Slider";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import CartBox from "./components/CartBox/CartBox";
function App() {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showBtn]);
  return (
    <div className="App">
      {showBtn && <ScrollTop />}
      <Header />
      <CartBox />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

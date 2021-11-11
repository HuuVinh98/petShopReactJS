import { useEffect, useState } from "react";
import "./App.css";
import "./reset.scss";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ModalBoxs/ScrollTop/ScrollTop";
import CartBox from "./components/ModalBoxs/CartBox/CartBox";
import Account from "./components/ModalBoxs/Account/Account";

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
      {/* <CartBox /> */}
      <Account />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

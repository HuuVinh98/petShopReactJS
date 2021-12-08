import { useEffect, useState } from "react";
import "./App.css";
import "./reset.scss";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ModalBoxs/ScrollTop/ScrollTop";
import Account from "./components/ModalBoxs/Account/Account";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    <Router>
      <div className="App">
        {showBtn && <ScrollTop />}
        {/* <CartBox /> */}
        {/* <Account /> */}
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

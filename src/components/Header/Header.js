import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import Navigation from "./Navigation/Navigation";
import "./Header.scss";
import NavResponsive from "./Navigation/NavResponsive";
import { ShowMenuResponsive } from "./HeaderBottom/HeaderBottom";
import { useContext } from "react";
function Header() {
  const showNavResponsive = useContext(ShowMenuResponsive);
  return (
    <header>
      <HeaderTop
        title="World Wide completely Free Return and Shipping"
        phone="+012 345 6789"
        email="demo@example.com"
      ></HeaderTop>
      <HeaderBottom></HeaderBottom>
      <Navigation />
      {showNavResponsive && <NavResponsive />}
    </header>
  );
}

export default Header;

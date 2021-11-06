import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import Navigation from "./Navigation/Navigation";
import './Header.scss';
function Header()
{
    return (
        <header>
            <HeaderTop 
             title="World Wide completely Free Return and Shipping"
             phone="+012 345 6789"
             email="demo@example.com"
            ></HeaderTop>
            <HeaderBottom></HeaderBottom>
            <Navigation />
        </header>
    )
}

export default Header;
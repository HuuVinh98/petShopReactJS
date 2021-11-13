import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchItem from "./SearchItem/SearchItem";
import exfish from "../../../images/exfish.png";
import "./SearchBox.scss";
export default function SearchBox() {
  return (
    <div className="search-box flex f-column">
      <div className="search-box__input">
        <div className="container flex">
          <form action="" className="flex j-spaceBetween">
            <input type="text" placeholder="Search" id="search-input" />
            <a href="#">
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </form>
          <div className="btn-close-search">
            <FontAwesomeIcon icon={faTimes} color="#333" />
          </div>
        </div>
      </div>
      {/* ----------------------add search item------------------ */}
      <div className="search-box__list flex j-center a-start">
        <SearchItem url={exfish} name="Vulava Fish" price="$30"></SearchItem>
        <SearchItem url={exfish} name="Vulava Fish" price="$30"></SearchItem>
        <SearchItem url={exfish} name="Vulava Fish" price="$30"></SearchItem>
        <SearchItem url={exfish} name="Vulava Fish" price="$30"></SearchItem>
        <SearchItem url={exfish} name="Vulava Fish" price="$30"></SearchItem>
      </div>
      {/* ----------------------add search item------------------ */}
    </div>
  );
}

import "./HeaderTop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function HeaderTop({ phone, location }) {
  return (
    <div className="header-top ">
      <div className="container">
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faMobileAlt}
              color="white"
              style={{ marginRight: "10px" }}
            />
            <p>CALL US: {phone}</p>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              color="white"
              style={{ marginRight: "10px" }}
            />
            <p>{location}</p>
          </li>
        </ul>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faFacebook}
              color="white"
              style={{ marginRight: "10px" }}
              className="fa-icon"
            ></FontAwesomeIcon>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faInstagram}
              color="white"
              style={{ marginRight: "10px" }}
              className="fa-icon"
            ></FontAwesomeIcon>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faYoutube}
              color="white"
              style={{ marginRight: "10px" }}
              className="fa-icon"
            ></FontAwesomeIcon>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faTwitter}
              color="white"
              style={{ marginRight: "10px" }}
              className="fa-icon"
            ></FontAwesomeIcon>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLinkedin}
              color="white"
              style={{ marginRight: "10px" }}
              className="fa-icon"
            ></FontAwesomeIcon>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderTop;

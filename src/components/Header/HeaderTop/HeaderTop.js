import './HeaderTop.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'

function HeaderTop({title,phone,email})
{
    return (
        <div className="header-top ">
            <div className="container">
                <p>{title}</p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faPhoneAlt} color="#266BF9" style={{marginRight:"10px"}}/>
                        <p>{phone}</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} color="#266BF9" style={{marginRight:"10px"}} />
                        <p>{email}</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUser} color="#266BF9" style={{marginRight:"10px"}} />
                        <p>Account</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderTop;

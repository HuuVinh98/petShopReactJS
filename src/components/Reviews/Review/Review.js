import "./Review.scss";

export default function Review({mess,avata,name})
{
    return (
        <div className="review flex f-column a-start"> 
            <p className="mess">{mess}</p>
            <div className="info flex j-spaceBetween a-center">
                <div className="left">
                    <img src={avata} alt=""/>  
                </div>
                <div className="right flex f-column a-start">
                    <h3>{name}</h3>
                    <p>Client</p>
                </div>          
            </div>              
        </div>
    )
}
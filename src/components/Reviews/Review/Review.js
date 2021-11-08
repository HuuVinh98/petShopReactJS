import "./Review.scss";

export default function Review({mess,avata,name})
{
    return (
        <div className="review"> 
            <p className="review__mess">{mess}</p>
            <div className="reviewer-info">
                <div className="reviewer-info__left">
                    <img src={avata} alt=""/>  
                </div>
                <div className="reviewer-info__right">
                    <h3>{name}</h3>
                    <p>Client</p>
                </div>          
            </div>              
        </div>
    )
}
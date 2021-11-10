import "./CartBoxItem.scss";

export default function CartBoxItem({ url, name, quantity, price }) {
  return (
    <div className="cart-item flex">
      <div className="image">
        <img src={url} />
      </div>
      <div className="info flex f-column a-start">
        <p className="name">{name}</p>
        <div className="quantity flex a-center">
          <span className="sub" data-id="${val.id}">
            <i className="fas fa-minus"></i>
          </span>
          <span className="sub-quantity">{quantity}</span>
          <span className="plus">
            <i className="fas fa-plus"></i>
          </span>
        </div>
      </div>
      <div className="flex f-column a-end right">
        <span className="delete-item">
          <i className="fas fa-times"></i>
        </span>
        <span>
          $
          {Number(
            (
              quantity *
              Number(price.split("").splice(1, price.length).join(""))
            ).toFixed(2)
          )}
        </span>
      </div>
    </div>
  );
}

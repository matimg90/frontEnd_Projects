import { useState, useContext } from "react";
import "./CartComponent.css";
import { UserContext } from "../App";

function CartComponent() {
   const bookPrice = 10.0;
  const{value} = useContext(UserContext);
  // eslint-disable-next-line
  const [cartItems, setCartItems] = value;
  const [qty, setQty] = useState(1);
  // eslint-disable-next-line
  const [total, setTotal] = useState(bookPrice);
  const onChange = (event) => {
    setQty(event.target.value)
  };
  const handleRemoveBook = (item) => {
    setCartItems((prev) => [...prev.filter((i) => i !== item)]);
  };
  

  return (
    <div className="cart">
      <div className="cart__header">
        <span className="cart__header--item">Book</span>
        <span className="cart__header--item">Quantity</span>
        <span className="cart__header--item">Price</span>
      </div>
      <div className="cart__body">
        {cartItems.map((cartItem, index) => (
          <div className="cart__item">
            <div className="cart__item--section">
              <div className="cart__book">
                <img
                  className="cart__book--img"
                  src={`${process.env.PUBLIC_URL}/${cartItem.imageLink}`}
                  alt=""
                />
                <div className="cart__book--info">
                  <span className="cart__book--title">{`Title: ${cartItem.title}`}</span>
                  <span className="cart__book--price">{`Price: $${bookPrice}`}</span>
                  <button className="cart__book--remove" onClick={()=>handleRemoveBook(cartItem)}>Remove</button>
                </div>
              </div>
            </div>
            <div className="cart__item--section">
              <input
                className="cart__quantity--box"
                type="number"
                onChange={onChange}
                defaultValue={1}
                pattern="[0-9]"
              />
            </div>
            <div className="cart__item--section">$ {total*qty}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartComponent;

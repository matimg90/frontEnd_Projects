import { useState } from "react";
import "./CartComponent.css"
function CartComponent (){
    const bookPrice = 10.00;
    const [total, setTotal] = useState(0);
    //const [cartItems,setCartItems] = useState([])
    const imageLink = "images/things-fall-apart.jpg"
    const calcTotal = event =>{
        setTotal ((bookPrice * event.target.value).toPrecision(4,2))
        console.log(event.target.value)
    }


    return(
        <div className="cart">
            <div className="cart__header">
                <span className="cart___book">Book</span>
                <span className="cart___quantity">Quantity</span>
                <span className="cart___total">Price</span>
            </div>
            <div className="cart__body">
                <div className="cart__item">
                    <div className="cart__book">
                        <img className="cart__book--img" src={`${process.env.PUBLIC_URL}/${imageLink}`} alt="" />
                        <div className="cart__book--info">
                            <span className="cart__book--title">Nombre : pepelibro</span>
                            <span className="cart__book--price">Precio: $10</span>
                            <button className="cart__book--remove">Remove</button>
                        </div>
                    </div>
                    <div className="cart__quantity">
                        <input className="cart__quantity--box"
                            type="number" 
                            onChange={calcTotal}
                            defaultValue = {1}
                            pattern="[0-9]"
                        />
                    </div>
                    <div className="cart__total">
                        $ {total}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartComponent
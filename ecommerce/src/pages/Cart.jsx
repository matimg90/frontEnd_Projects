import CartComponent from "../components/CartComponent";
import Total from "../components/Total";
import Title from "../components/Title";
function Cart(){
    return(
        <div>
            <Title text="Cart"></Title>
            <CartComponent></CartComponent>
            <Total></Total>
        </div>
    )
}

export default Cart;
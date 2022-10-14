import { useLocation } from "react-router-dom";
import StarRating from "../components/StarRating.jsx";
import "./Detail.css";
import { UserContext } from "../App";
import { useContext } from "react";

function Detail() {
  const location = useLocation();
  const { book } = location.state;
  const price = Math.floor(Math.random() * 100);
  const [cartItems, setCartItems] = useContext(UserContext);

  return (
    <div className="main">
      <img
        className="book-image"
        src={`${process.env.PUBLIC_URL}/${book.imageLink}`}
        alt=""
      />
      <div className="book-details">
        <h1>{book.title}</h1>
        <StarRating></StarRating>
        <label htmlFor="">{`Author: ${book.author}`}</label>
        <label htmlFor="">{`Year: ${book.year}`}</label>
        <label htmlFor="">{`Language: ${book.language}`}</label>
        <label htmlFor="">{`Country: ${book.country}`}</label>
        <label htmlFor="">{`Pages: ${book.pages}`}</label>
        <label htmlFor="">{`$ ${price}`}</label>
        <button onClick={()=> setCartItems([...cartItems, book])}>Add to cart</button>
      </div>
    </div>
  );
}

export default Detail;

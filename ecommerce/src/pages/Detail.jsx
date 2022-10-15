import { useLocation } from "react-router-dom";
import "./Detail.css";
import { UserContext } from "../App";
import { useContext } from "react";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";

function Detail() {
  const location = useLocation();
  const { book } = location.state;
  const price = Math.floor(Math.random() * 100);
  const [cartItems, setCartItems] = useContext(UserContext);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const starNumber = Math.floor(Math.random() * 6);
  return (
    <div className="main">
      <img
        className="book-image"
        src={`${process.env.PUBLIC_URL}/${book.imageLink}`}
        alt=""
      />
      <div className="book-details">
        <h1>{book.title}</h1>
        <Rating name="read-only" value={starNumber} readOnly />
        <div>
          <Checkbox
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
        </div>
        <label htmlFor="">{`Author: ${book.author}`}</label>
        <label htmlFor="">{`Year: ${book.year}`}</label>
        <label htmlFor="">{`Language: ${book.language}`}</label>
        <label htmlFor="">{`Country: ${book.country}`}</label>
        <label htmlFor="">{`Pages: ${book.pages}`}</label>
        <label htmlFor="">{`$ ${price}`}</label>
        <Button
          variant="contained"
          onClick={() => setCartItems([...cartItems, book])}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default Detail;

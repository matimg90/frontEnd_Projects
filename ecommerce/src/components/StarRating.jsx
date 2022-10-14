import "./StarRating.css"
import { useState } from "react";

const StarRating = () => {
    const starNumber = Math.floor(Math.random() * 5);
    const [rating] = useState(starNumber);

    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              id="button"
              key={index}
              className={index <= rating ? "on" : "off"}
            //   onClick={() => setRating(index)}
            //   onMouseEnter={() => setHover(index)}
            //   onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

  export default StarRating;
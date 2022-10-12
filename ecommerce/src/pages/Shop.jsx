import { useEffect, useState } from "react";
import Book from "../components/Book.jsx";
//import { Link } from "react-router-dom";
import data from "../books.json";
import "./Shop.css";
import Title from "../components/Title.jsx";
import Dropdown from "react-bootstrap/esm/DropdownMenu.js";
// import DropdownItem from "react-bootstrap/esm/DropdownItem.js";
//import Skeleton from "react-loading-skeleton";
//import "react-loading-skeleton/dist/skeleton.css";

function Shop() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setBooks(data);
    }, 0);
  });
  return (
    <div className="main">
      <Title text="Shop"></Title>
      <div className="main">
        <div className="sort-container">
          <label id="sortLabel" htmlFor="">Sort by:</label>
          <select className="dropdown sort">
            <option className="dropdown options">title (asc)</option>
            <option className="dropdown options">title (desc)</option>
          </select>
        </div>
        <div className="book-container">
          {books.map((book, index) => (
            // <Link className="book"
            //       to={`../detail/${book.title.toString()}`}
            //       key={index}
            //       state={{book:book}}>
            // </Link> */}
            <Book
              title={book.title.toString()}
              author={book.author.toString()}
              country={book.country.toString()}
              imageLink={book.imageLink.toString()}
              language={book.language.toString()}
              link={book.link.toString()}
              pages={book.pages.toString()}
              year={book.year.toString()}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;

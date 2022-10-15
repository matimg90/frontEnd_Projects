import { useEffect, useState } from "react";
import Book from "../components/Book.jsx";
import { Link } from "react-router-dom";
import data from "../books.json";
import "./Shop.css";
import Title from "../components/Title.jsx";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import DropdownItem from "react-bootstrap/esm/DropdownItem.js";
//import Skeleton from "react-loading-skeleton";
//import "react-loading-skeleton/dist/skeleton.css";

function Shop() {
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };
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
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="sort-label">Sort</InputLabel>
              <Select
                labelId="sort-label"
                id="sort-select"
                value={sort}
                label="Sort"
                onChange={handleChange}
                defaultValue={10}
              >
                <MenuItem value={10}>Title Asc</MenuItem>
                <MenuItem value={20}>Title Desc</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
        </div>
        <div className="book-container">
          {books.map((book, index) => (
            <Link
              to={`../detail/${book.title.toString()}`}
              key={index}
              state={{ book: book }}
            >
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;

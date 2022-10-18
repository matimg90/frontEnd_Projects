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
import { useContext } from "react";
import { UserContext } from "../App";
import { Skeleton } from "@mui/material";

function Shop() {
  const [books, setBooks] = useState([...data]);
  const { value2 } = useContext(UserContext);
  // eslint-disable-next-line
  const [searchTerm, setSearchTerm] = value2;
  const [sort, setSort] = useState(10);
  const [isLoading, setLoading] = useState(true);

  const handleChange = (event) => {
    setSort(event.target.value);
    console.log(event.target.value);
  };
  useEffect(() => {
    setTimeout(() => {
      // filterBooks(books, searchTerm);
      setLoading(false);
    }, 1000);
    sortBooks(sort, books);
  }, [sort, books, searchTerm]);

  function sortBooks(sort, books) {
    if (sort === 10) {
      setBooks([...books].sort((a, b) => (a.title > b.title ? 1 : -1)));
    } else {
      setBooks([...books].sort((a, b) => (a.title > b.title ? -1 : 1)));
    }
  }
  // eslint-disable-next-line
  const filterBooks = (books, searchTerm) => {
    const searchTermLower = searchTerm.toString().toLowerCase();
    if (searchTermLower.length > 0) {
      return [...books].filter((item) => {
        const bookTitle = item.title.toLocaleLowerCase();
        return bookTitle.includes(searchTermLower);
      });
    } else {
      return books;
    }
  };
  return (
      <div className="main">
        <Title text="Shop"></Title>
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
              >
                <MenuItem value={10}>Title Asc</MenuItem>
                <MenuItem value={20}>Title Desc</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="book-container">
          {filterBooks(books, searchTerm).map((book, index) => (
            <Link
              to={`../detail/${book.title.toString()}`}
              key={index}
              state={{ book: book }}
            >
              {isLoading ? (
                <Skeleton animation="wave">
                <div className="skeleton">
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
                </div>
                </Skeleton>
              ) : (
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
              )}
            </Link>
          ))}
        </div>
      </div>
  );
}

export default Shop;

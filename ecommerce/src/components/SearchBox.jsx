import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import data from "../books.json";
import "./Nav";
function SearchBox() {
  //const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  const onSearch = (searchTerm) => {
    console.log(searchTerm);
    setInputText(searchTerm);
  };
  const searchBook = (bookName) => {
    console.log("searchBook");
  };
  return (
    <>
      <div className="search-container">
        <input
          className="searchBox__box"
          type="text"
          placeholder="Buscar..."
          value={inputText}
          onChange={handleChange}
          onKeyPress={(e) => e.key === "Enter" && searchBook(e.target.value)}
        />
      </div>
      <div className="dropdown">
        {data
          .filter((item) => {
            const searchTerm = inputText.toLowerCase();
            const bookTitle = item.title.toLocaleLowerCase();
            return (
              searchTerm &&
              bookTitle.startsWith(searchTerm) &&
              searchTerm !== bookTitle
            );
          })
          .slice(0, 5)
          .map((item, index) => (
            <div
              className="dropdown-row"
              onClick={() => onSearch(item.title)}
              key={index}
            >
              {item.title}
            </div>
          ))}
      </div>
    </>
  );
}

export default SearchBox;

import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import data from "../books.json";
import "./Nav";
function SearchBox() {
  const navigate = useNavigate();
  const { value2 } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = value2;
  // const [inputText, setInputText] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const onSearch = (searchTerm) => {
    console.log(searchTerm);
    setSearchTerm(searchTerm);
    navigate(`../Shop/${searchTerm}`);//, { state: { searchTerm: searchTerm } });
  };
  // const searchBook = (bookName) => {
  //   console.log("searchBook");
  // };
  return (
    <>
      <div className="search-container">
        <input
          className="searchBox__box"
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={(e) => e.key === "Enter" && onSearch(e.target.value)}
        />
      </div>
      <div className="dropdown">
        {data
          .filter((item) => {
            const searchTermLower = searchTerm.toString().toLowerCase();
            const bookTitle = item.title.toLocaleLowerCase();
            return (
              searchTermLower &&
              bookTitle.startsWith(searchTermLower) &&
              searchTermLower !== bookTitle
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

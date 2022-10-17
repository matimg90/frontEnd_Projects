import { Link } from "react-router-dom";
import "./Nav.css";
import SearchBox from "./SearchBox.jsx";
import BurguerMenu from "./BurguerMenu.jsx";
import Badge from "@mui/material/Badge";
import { UserContext } from "../App";
import { useContext } from "react";

function Nav() {
  const{value} = useContext(UserContext);
  // eslint-disable-next-line
  const [cartItems, setCartItems] = value;
  return (
    <nav className="nav">
      <div></div>
      <div className="Title">
        <label htmlFor="">MC Books</label>
      </div>
      <div className="searchBox">
        <SearchBox></SearchBox>
      </div>
      <div className="menuItems-container">
        <div className="menuItems">
          <Link className="menuItems__Link" to={"/"}>
            Home
          </Link>
        </div>
        <div className="menuItems">
          <Link className="menuItems__Link" to={"/shop"}>
            Shop
          </Link>
        </div>
        <div className="menuItems">
          <Badge badgeContent={cartItems.length} color="secondary">
            <Link className="menuItems__Link" to={"/cart"}>
              Cart
            </Link>
          </Badge>
        </div>
      </div>
      <BurguerMenu></BurguerMenu>
      <div></div>
    </nav>
  );
}

export default Nav;

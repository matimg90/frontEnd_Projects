import { Link } from "react-router-dom";
import "./Nav.css";
import SearchBox from "./SearchBox.jsx"

function Nav() {
    return(
        <nav className="nav">
            <div></div>
            <div className="Title">
                <label htmlFor="">MC Books</label>
            </div>
            <div className="searchBox">
                <SearchBox ></SearchBox>
            </div>
            <div className="menuItems">
                <Link className="menuItems__Link" to={"/"}>Home</Link>
            </div>
            <div className="menuItems">
                <Link className="menuItems__Link" to={"/shop"}>Shop</Link>
            </div>
            <div  className="menuItems">
                <Link className="menuItems__Link" to={"/cart"}>Cart</Link>
            </div>
            <div></div>
        </nav>
    )
}

export default Nav;
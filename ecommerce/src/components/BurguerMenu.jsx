import { useState } from "react";
import "./BurguerMenu.css";
import { Link } from "react-router-dom";

function BurguerMenu() {
  const [burguer_class, setBurguerClass] = useState("burguer-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurguerClass("burguer-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurguerClass("burguer-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className="burguer-menu" onClick={updateMenu}>
        <div className={burguer_class}></div>
        <div className={burguer_class}></div>
        <div className={burguer_class}></div>
      </div>

      <div className={menu_class}>
          <Link className="burguer__items" to={"/"} onClick={updateMenu}>
            Home
          </Link>
          <Link className="burguer__items" to={"/shop"} onClick={updateMenu}>
            Shop
          </Link>
          <Link className="burguer__items" to={"/cart"}  onClick={updateMenu}>
            Cart
          </Link>
      </div>
    </>
  );
}

export default BurguerMenu;

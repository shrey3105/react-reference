import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const arr = useState("login");

  console.log("Header is Rendered");

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img className="logo-img" src={LOGO_URL} alt="logo" />
        </Link>
      </div>

      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <button
          className="login-btn"
          onClick={() => {
            console.log("clicked");
            arr[0] == "login" ? arr[1]("logout") : arr[1]("login");
          }}
        >
          {arr[0]}
        </button>
      </ul>
    </div>
  );
};

export default Header;

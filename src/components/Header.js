import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const arr = useState("login");

  console.log(arr);

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={LOGO_URL} alt="logo" />
      </div>

      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
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

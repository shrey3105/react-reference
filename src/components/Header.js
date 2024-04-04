import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const arr = useState("login");

  const onlineStatus = useOnlineStatus();

  console.log("Header is Rendered");

  return (
    <div className="flex p-3 justify-between bg-slate-50 shadow-lg">
      <div className="w-24 h-24">
        <Link to="/">
          <img
            className="logo-img w-[100%] h-[100%]"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>
      </div>

      <ul className="flex items-center">
        <li>
          You are{" "}
          {onlineStatus ? (
            <b className="text-green-500">online</b>
          ) : (
            <b className="text-red-500">offline</b>
          )}
        </li>
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-4">
          <Link to="/contact">Contact</Link>
        </li>
        <button
          className="login-btn px-4"
          onClick={() => {
            console.log("clicked");
            arr[0] == "Login" ? arr[1]("Logout") : arr[1]("Login");
          }}
        >
          {arr[0]}
        </button>
      </ul>
    </div>
  );
};

export default Header;

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/*
Header
  => Logo
  => Nav Items
Body
  => SearchBar
  => Card Container
     => Card
Footer
  => Copyright
  => Links
*/

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

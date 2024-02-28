import React from "react";
import ReactDOM from "react-dom/client";

const ele = <span>hehe</span>;

const Title = () => (
  <h1 className="title">
    {ele}
    React Title
  </h1>
);

const HeadingComponent = () => (
  <div className="container">
    <Title />
    <p>
      This is Component Description. Using Title component inside Heading
      Component. This is also called Component Composition
    </p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

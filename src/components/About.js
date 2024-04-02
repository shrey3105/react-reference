import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor Called");
  }

  componentDidMount() {
    console.log("Parent Component Mounted");
  }

  render() {
    console.log("Parent Render Called");
    return (
      <div>
        <h1>About US Page</h1>
        <p>THis is an about us page</p>

        <UserClass></UserClass>
      </div>
    );
  }
}

export default About;

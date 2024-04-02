import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dummy Name",
      location: "Dummy Location",
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shrey3105");
    const json = await data.json();

    console.log(json);

    this.setState({
      name: json.login,
      location: json.location,
    });
    console.log(this.props.name + " Child Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component will now unmount");
  }
  render() {
    const { name, location } = this.state;
    console.log(this.props.name + " Render");
    return (
      <div className="user-card">
        <h3>Name - {name}</h3>
        <h3>Location - {location}</h3>
        <h4>Twitter : @shreysingh3105</h4>
      </div>
    );
  }
}

export default UserClass;

import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();

    //console.log("Parents Constructor");
  }
  componentDidMount() {
    //console.log("Parent Component did mount called");
  }
  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Us page</h1>
        <User name="ali (function)" />
        {/* <UserClass name="First (class)" email={"first@gmail.com(class)"} /> */}
        {/* <UserClass name="Second (class)" email={"second@gmail.com(class)"} /> */}
      </div>
    );
  }
}

export default About;

/* output- while using ConponentDidMount with two child comp
Parents Constructor
 Parent Render
 First (class)Child Constructor
 First (class)Child Render
 Second (class)Child Constructor
 Second (class)Child Render

 - DOM updated - in single batch
 First (class)Child Component Did mount called
 Second (class)Child Component Did mount called
Parent Component did mount called
*/

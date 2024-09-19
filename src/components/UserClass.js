import React from "react";
import UserContext from "../../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "Dummy_phote.com",
      },
    };
    /* this.state = {
      count: 0,
    }; */
    //console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    /* this.timer = setInterval(() => {
      console.log("setInterval called");
    }, 1000); */
    //console.log("Child Component Did mount called");
    //console.log(this.props.name + "Child Component Did mount called");
    /* const data = await fetch("https://api.github.com/users/sabir1512");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json); */
  }
  /* both are same code
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count !== this.prevState.count ||
      this.state.count2 !== this.prevState.count2
    ){}
      console.log("Componrnt did update called");
  }
  useEffect(()=>{},[count,count2]) */

  /* componentDidUpdate(prevProps, prevState) {
    console.log("Componrnt did update called");
  } */
  componentWillUnmount() {
    //clearInterval(this.timer);
    //console.log("Componet will unmount called");
  }
  render() {
    //const { name, email } = this.props;
    //const { count } = this.state;
    //console.log(this.props.name + "Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    //debugger;
    return (
      <div className="user-card">
        {/* <h3>{count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count
        </button>
 */}
        {/* <img src={avatar_url} /> */}
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>LinkedInId:sabirali</h3>

        <UserContext.Consumer>
          {(data) => <li>{data.loggedInUser}</li>}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default UserClass;

/**
 * ----MOUNTING----
 * Constructor(dummy)
 * Render(dummy)
 *     <Html dummy>
 *
 * Component Did Mount
 *     <API Call>
 *     <this.setState()> -> State variable is updated
 *
 * -----Update----
 *      Render(API data)
 *      <Html (new api data)>
 *
 * Component Did Update
 *
 */

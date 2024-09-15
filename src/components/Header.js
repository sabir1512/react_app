import logo from "../images/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // If no dependency array the useEffect called on every render.
  //If dependency array is empty=[] then useEffect is called on initial render(just once).
  //If dependency array is [btnName] then useEffect is called everytime whenever btnName is updated
  /* useEffect(() => {
    console.log("useEffect called");
  }, [btnName]); */
  //console.log("Header render");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
            {/* <a href="/about">About Us</a> */}
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

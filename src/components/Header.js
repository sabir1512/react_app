import logo from "../images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mt-2 border sm:bg-yellow-50 lg:bg-green-100" >
      <div className="logo-container">
        <img className='w-32 rounded-lg' src={logo} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🛑"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="px-4"
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

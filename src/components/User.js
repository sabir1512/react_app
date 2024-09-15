import { useState, useEffect } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    /* const timer = setInterval(() => {
      console.log("setInterval called");
    }, 1000); */
    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect return");
    };
  }, []);
  console.log("Render");
  return (
    <div className="user-card">
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>

      <h2>Name: {name}</h2>
      <h3>Email:sabir@gmail.com</h3>
      <h3>LinkedInId:sabirali</h3>
    </div>
  );
};
export default User;
